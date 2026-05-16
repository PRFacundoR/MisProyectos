const express=require('express');
const crypto=require('crypto');//esto es para generar un id unico para cada tarea, ya que en este caso no estamos usando una base de datos, y necesitamos un id unico para cada tarea, ya que el id es el identificador unico de cada tarea, y es necesario para poder acceder a cada tarea individualmente, por ejemplo, para poder acceder a la tarea con id 1, se necesita un id unico para esa tarea, y ese id unico se puede generar con crypto.randomUUID(), que genera un id unico de forma aleatoria, y es muy dificil de predecir, lo que lo hace ideal para usar como id unico en este caso.
const axios = require('axios');
const z=require('zod');//esto es para validar los datos que se reciben en el body de las peticiones, ya que por defecto express no valida los datos que se reciben en el body de las peticiones, y si no se valida los datos, se pueden recibir datos incorrectos o mal formados, lo que puede causar errores en el servidor, por ejemplo, si se recibe un dato que no es un numero en el campo id, y se intenta acceder a ese campo como si fuera un numero, se puede generar un error, por eso es importante validar los datos que se reciben en el body de las peticiones, y zod es una libreria muy facil de usar para validar los datos, ya que permite definir esquemas de validacion de forma muy sencilla, y luego validar los datos contra esos esquemas de forma muy sencilla tambien.
const { id } = require('zod/v4/locales');
const app=express();
app.disable('x-powered-by');

//aca va la middleware, es decir, el codigo que se ejecuta antes de llegar a las rutas, por ejemplo, para parsear el body de las peticiones, o para manejar los errores, etc.
 
//app.use(/*ruta que afecta ya sea '/' o /rutainicio/* */'/*',(req,res)
/*=>{
    console.log('Middleware ejecutado');
    next();
});//tmabien los middlewares pueden ser globales, es decir, que se ejecuten en todas las rutas, para eso se usa app.use() sin especificar la ruta, por ejemplo:
//usarse para get, post, put, delete, etc. por ejemplo:
app.use((req,res,next)=>{
    console.log('Middleware global ejecutado');
    next();
});*/
app.use('/', (req, res, next) => { // IMPORTANTE: Agregado 'next' aquí
    console.log('Middleware ejecutado en la raíz y subrutas');
    next(); 
});


app.use(express.json());//esto es para parsear el body de las peticiones, es decir, para poder acceder a req.body, es necesario usar este middleware, ya que por defecto express no parsea el body de las peticiones, y si no se usa este middleware, req.body será undefined, y no se podrá acceder a los datos enviados en el body de las peticiones POST, PUT, etc.

app.get('/',(req,res)=>{
    res.redirect('/users');
});

const port= process.env.PORT || 3000;
let listaTareas=[];
        //ruta
app.get('/users',async (req,res)=>{

    //primer endpoint
    //res.send('<h1>Hola Mundo</h1>');
    const users=await axios.get('https://jsonplaceholder.typicode.com/todos/');
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



app.get('/users/:id',async (req,res)=>{
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



/*let pokemonData=[]

app.post('/api/data',async (req,res)=>{

    //segundo endpoint
    try {
        const pokemons=await axios.get('https://pokeapi.co/api/v2/pokemon');
        
         pokemonData=res.json(pokemons.data.results);
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
        res.status(500).json({ error: 'Error al obtener los datos de la API' });
    }
    
}
);



*/
app.post('/users',(req,res)=>{
    const schema=z.object({
        title:z.string({
            required_error:'El campo title es requerido',
            invalid_type_error:'El campo title debe ser un string'
        }),
        completed:z.boolean({
            required_error:'El campo completed es requerido',
            invalid_type_error:'El campo completed debe ser un boolean'
        }),
        id:z.number().int().optional().positive()//esto es para que el id sea opcional, ya que el id se va a generar de forma automatica, y no se va a recibir en el body de la peticion, por lo tanto, es necesario que el id sea opcional, para que no se genere un error al validar el body de la peticion, ya que si el id no es opcional, y no se recibe en el body de la peticion, se generara un error al validar el body de la peticion, ya que el id es un campo requerido por defecto, y si no se recibe en el body de la peticion, se generara un error al validar el body de la peticion, por eso es importante que el id sea opcional.
        //asi se hace la validacion de un campo que es un arrglo de objetos, por ejemplo, si se quiere validar un campo que es un arreglo de objetos, se puede hacer de la siguiente manera:
        //campo:z.array(z.object({
        //    campo1:z.string(),
        //    campo2:z.number()
        //})) o si se tiene un numero limitado de objetos en el arreglo, se puede hacer de la siguiente manera:
        //campo:z.enum(['valor1','valor2','valor3']) esto es para validar que el campo sea un valor especifico, por ejemplo, si se quiere validar que el campo sea un valor especifico, se puede hacer de la siguiente manera:
        //campo:z.enum(['valor1','valor2','valor3']) esto es para validar que el campo sea un valor especifico, por ejemplo, si se quiere validar que el campo sea un valor especifico, se puede hacer de la siguiente manera:
    });//ver safeparse midudev curso node min 48 episodio 3 o de api rest hasta 1.04.00 para ver la validacion de los datos con zod, y la diferencia entre safeParse y parse, y como manejar los errores de validacion con safeParse y parse, y como validar solo algunos campos del body de la peticion con schema.partial().
    //const validation=schema.safeParse(req.body);
    //tenemos dos formas de validar los datos, una es con safeParse, que devuelve un objeto con la propiedad success, que indica si la validacion fue exitosa o no, y la propiedad data, que contiene los datos validados si la validacion fue exitosa, o la propiedad error, que contiene el error de validacion si la validacion no fue exitosa, y la otra forma es con parse, que lanza un error si la validacion no fue exitosa, y devuelve los datos validados si la validacion fue exitosa, por lo tanto, es necesario usar un bloque try catch para manejar el error de validacion si se usa parse, mientras que con safeParse no es necesario usar un bloque try catch para manejar el error de validacion, ya que el error de validacion se maneja con la propiedad success del objeto devuelto por safeParse.
    // tenemos schema.partial().safeParse(req.body) para validar solo algunos campos del body de la peticion, por ejemplo, si se quiere validar solo el campo title del body de la peticion, se puede hacer de la siguiente manera:
    //const validation=schema.partial({title:true}).safeParse(req.body) esto es para validar solo el campo title del body de la peticion, y el campo completed no se valida, por lo tanto, no es necesario que el campo completed se reciba en el body de la peticion, ya que el campo completed no se valida, por lo tanto, no es necesario que el campo completed se reciba en el body de la peticion, por eso es importante usar schema.partial() para validar solo algunos campos del body de la peticion, y no todos los campos del body de la peticion, ya que si se validan todos los campos del body de la peticion, se generara un error si alguno de los campos no se recibe en el body de la peticion, por eso es importante usar schema.partial() para validar solo algunos campos del body de la peticion, y no todos los campos del body de la peticion.
    
    const {id,title, completed}=req.body;

    const nuevaTarea={id:listaTareas.at(-1)?.id,title,completed};//(Nota: El signo ?. se llama encadenamiento opcional y evita que tu código falle si la lista llega a estar vacía).
    
    listaTareas.push(nuevaTarea);
    res.status(201).send('<h1>Tarea creada</h1>');
});

//la ultima ruta siempre es para el error 404, es decir, si no se encuentra la ruta, se muestra el error 404
app.use((req,res)=>{
    res.status(404).send('<h1>404 Not Found</h1>');
});
//app run de c#
app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${port}/users`);
});//esto siempre es asi?


//al principio de todo se pone una cabecera para que la api pueda ser mostrada/usada por diferentes origenes, es decir, para permitir que la api sea consumida por diferentes aplicaciones, por ejemplo, si se quiere consumir la api desde una aplicacion frontend que esta en un dominio diferente al dominio del backend, es necesario agregar una cabecera para permitir el acceso a la api desde diferentes origenes, y esa cabecera se llama Access-Control-Allow-Origin, y se puede agregar de la siguiente manera:
//app.use((req,res,next)=>{
//    res.header('Access-Control-Allow-Origin','*');//esto es para permitir el acceso a la api desde cualquier origen, es decir, desde cualquier dominio, por eso se pone el asterisco *, que significa cualquier origen, pero si se quiere permitir el acceso a la api solo desde un dominio especifico, se puede poner el dominio en lugar del asterisco *, por ejemplo:  
//    res.header('Access-Control-Allow-Origin','http://localhost:3000');//esto es para permitir el acceso a la api solo desde el dominio http://localhost:3000, que es el dominio donde se encuentra la aplicacion frontend, por eso se pone el dominio en lugar del asterisco *, que significa cualquier origen, pero si se quiere permitir el acceso a la api solo desde un dominio especifico, se puede poner el dominio en lugar del asterisco *, por ejemplo:
//    res.header('Access-Control-Allow-Origin','http://midudev.com');//esto es para permitir el acceso a la api solo desde el dominio http://midudev.com, que es el dominio donde se encuentra la aplicacion frontend, por eso se pone el dominio en lugar del asterisco *, que significa cualquier origen, pero si se quiere permitir el acceso a la api solo desde un dominio especifico, se puede poner el dominio en lugar del asterisco *, por ejemplo:
//    next();
//});//esto es para permitir el acceso a la api desde diferentes origenes, y se debe colocar antes de las rutas, para que se aplique a todas las rutas, y no solo a una ruta especifica.

//en producion se usa algo llamado cors, que es una libreria que se encarga de manejar las cabeceras de CORS de forma automatica, y se puede usar de la siguiente manera:
//const cors=require('cors');
//app.use(cors());//esto es para permitir el acceso a la api desde cualquier origen, es decir, desde cualquier dominio, por eso se pone el asterisco *, que significa cualquier origen, pero si se quiere permitir el acceso a la api solo desde un dominio especifico, se puede poner el dominio en lugar del asterisco *, por ejemplo:
//app.use(cors({origin:'http://localhost:3000'}));//esto es para permitir el acceso a la api solo desde el dominio http://localhost:3000, que es el dominio donde se encuentra la aplicacion frontend, por eso se pone el dominio en lugar del asterisco *, que significa cualquier origen, pero si se quiere permitir el acceso a la api solo desde un dominio especifico, se puede poner el dominio en lugar del asterisco *, por ejemplo:
//app.use(cors({origin:'http://midudev.com'}));//esto es para permitir el acceso a la api solo desde el

/**
 * app.use(cors({
  origin: (origin, callback) => {
    // Si el origen está en la lista o es una petición local (sin origen)
    if (dominiosPermitidos.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Bloqueado por seguridad de CORS'));
    }
  }
}));
 */

// en la clase 4 primeros 15 minutos se ve como subir la api sin un html