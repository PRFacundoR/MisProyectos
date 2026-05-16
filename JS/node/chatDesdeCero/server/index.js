
// vamos a usar websocket de socket.io para crear un chat en tiempo real, pero primero vamos a crear el servidor con express y luego lo integraremos con socket.io
import express from 'express';
//import cors from 'cors';
import { Server } from 'socket.io';
import { createServer } from 'node:http';
import logger from 'morgan';


//crear conexion a la base de datos, si es necesario, para guardar los mensajes del chat o la información de los usuarios
import { createClient } from '@libsql/client';

// Creamos la conexión apuntando a un archivo local en tu carpeta
const db = createClient({
    url: "file:chat-local.db"
});


// Esto se ejecuta al levantar el servidor
await db.execute(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        content TEXT,
        user TEXT
    )
`);

const port = process.env.PORT || 3000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    connectionStateRecovery: {
        // Si se pierde la conexión, el cliente intentará reconectarse automáticamente
        maxDisconnectionDuration: 30000 // Tiempo máximo de desconexión en milisegundos (30 segundos)
    }
});


io.on('connection', async (socket) => {
    console.log('a user connected');
    //aqui podemos escuchar los eventos que el cliente emite y responder a ellos
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    //PASO 2, proceso mensaje que llega desde el front y hace algo como mostrarlo
    socket.on('chat message', async (msg, username) => {

        let resultado;
        try {
            // Pasamos 'msg' (el texto real) a la base de datos, no la variable vacía
            resultado = await db.execute('INSERT INTO messages (content, user) VALUES (?,?)', [msg, username]);
        } catch (error) {
            console.error('Error al guardar el mensaje en la base de datos:', error);
            return; // Si hay un error, cortamos la ejecución acá
        }

        io.emit('chat message', msg, resultado.lastInsertRowid.toString(), username);//PASO 3 enviamos mensaje a todo el mundo.




    });

    //por ejemplo, si el cliente emite un evento 'chat message', podemos escuchar ese evento y emitirlo a todos los clientes conectados

    ///recuperamos el mensaje recién insertado para obtener su ID y lo emitimos a todos los clientes conectados, incluyendo el ID del mensaje
    if (!socket.recovered) {
        try {
            const mensajeAnteriores = await db.execute('SELECT * FROM messages WHERE id > ?', [socket.handshake.auth.serverOffset ?? 0]);                //socket.handshake.auth.serverOffset el significado de cada parametro es el siguiente:
            //socket: es el objeto que representa la conexión del cliente al servidor.
            //handshake: es un objeto que contiene información sobre la conexión, como los datos de autenticación enviados por el cliente.
            //auth: es una propiedad dentro de handshake que se utiliza para almacenar datos de autenticación personalizados enviados por el cliente durante la conexión.
            //serverOffset: es un valor personalizado que el cliente puede enviar para indicar desde qué punto en la base de datos quiere recuperar los mensajes anteriores. Si no se proporciona, se asume que es 0, lo que significa que se recuperarán todos los mensajes.
            mensajeAnteriores.rows.forEach(mensaje => {
                socket.emit('chat message', mensaje.content, mensaje.id.toString(), mensaje.user);
            });
        } catch (error) {
            console.error('Error al recuperar los mensajes anteriores de la base de datos:', error);
            return; // Si hay un error, cortamos la ejecución acá
        }
    }
});



app.use(logger('dev'));


app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/cliente/index.html');
});


httpServer.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

//morgan es un middleware para registrar las peticiones HTTP