import { Router } from 'express';
import crypto from 'crypto';//esto es para generar un id unico para cada tarea, ya que en este caso no estamos usando una base de datos, y necesitamos un id unico para cada tarea, ya que el id es el identificador unico de cada tarea, y es necesario para poder acceder a cada tarea individualmente, por ejemplo, para poder acceder a la tarea con id 1, se necesita un id unico para esa tarea, y ese id unico se puede generar con crypto.randomUUID(), que genera un id unico de forma aleatoria, y es muy dificil de predecir, lo que lo hace ideal para usar como id unico en este caso.
import { get } from 'axios';
import { object, string, boolean, number } from 'zod';//esto es para validar los datos que se reciben en el body de las peticiones, ya que por defecto express no valida los datos que se reciben en el body de las peticiones, y si no se valida los datos, se pueden recibir datos incorrectos o mal formados, lo que puede causar errores en el servidor, por ejemplo, si se recibe un dato que no es un numero en el campo id, y se intenta acceder a ese campo como si fuera un numero, se puede generar un error, por eso es importante validar los datos que se reciben en el body de las peticiones, y zod es una libreria muy facil de usar para validar los datos, ya que permite definir esquemas de validacion de forma muy sencilla, y luego validar los datos contra esos esquemas de forma muy sencilla tambien.
//esta linea de arriba revisar si da error

import { id } from 'zod/v4/locales';//esto es para validar el campo id, ya que el campo id debe ser un numero entero positivo, y zod tiene una funcion para validar numeros enteros positivos, que es z.number().int().positive(), y esa funcion se puede usar para validar el campo id, por ejemplo, si se quiere validar el campo id, se puede hacer de la siguiente manera:

const router = Router();

router.get('/',(req,res)=>{
    res.redirect('/users');
});



router.get('/:id',async (req,res)=>{
    //segundo endpoint
    const {id}=req.params;
    let usuarioEncontrado = listaTareas.find(tarea => tarea.id === parseInt(id));
    if (!usuarioEncontrado) {
        return res.status(404).send('<h1>Usuario no encontrado</h1>');
    }
    res.send(`<h1>Detalle de la tarea</h1>
    
    <p>ID: ${usuarioEncontrado.id}</p>
    <p>Title: ${usuarioEncontrado.title}</p>
    <p>Completed: ${usuarioEncontrado.completed}</p>`);
});

let listaTareas=[];
        //ruta
router.get('/',async (req,res)=>{

    //primer endpoint
    //res.send('<h1>Hola Mundo</h1>');
    const users=await get('https://jsonplaceholder.typicode.com/todos/');
    listaTareas = users.data;
    res.send(`<h1>Lista de tareas</h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
        </tr>
        ${listaTareas.map(tarea => `
        <tr>
            <td>${tarea.id}</td>    
            <td>${tarea.title}</td>
            <td>${tarea.completed}</td>
        </tr>
        `).join('')}
    </table>`);
});
router.post('/',(req,res)=>{
    const schema=object({
        title:string({
            required_error:'El campo title es requerido',
            invalid_type_error:'El campo title debe ser un string'
        }),
        completed:boolean({
            required_error:'El campo completed es requerido',
            invalid_type_error:'El campo completed debe ser un boolean'
        }),
        id:number().int().optional().positive()//esto es para que el id sea opcional, ya que el id se va a generar de forma automatica, y no se va a recibir en el body de la peticion, por lo tanto, es necesario que el id sea opcional, para que no se genere un error al validar el body de la peticion, ya que si el id no es opcional, y no se recibe en el body de la peticion, se generara un error al validar el body de la peticion, ya que el id es un campo requerido por defecto, y si no se recibe en el body de la peticion, se generara un error al validar el body de la peticion, por eso es importante que el id sea opcional.
        });
    const {id,title, completed}=req.body;

    const nuevaTarea={id:listaTareas.at(-1)?.id,title,completed};//(Nota: El signo ?. se llama encadenamiento opcional y evita que tu código falle si la lista llega a estar vacía).
    
    listaTareas.push(nuevaTarea);
    res.status(201).send('<h1>Tarea creada</h1>');
});

export default router; 