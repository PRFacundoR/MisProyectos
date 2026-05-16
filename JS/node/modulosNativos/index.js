// invocar modulos nativos para hacer cosas como abrir el explorador de archivos, mostrar notificaciones, etc.

const os=require('node:os');
const path=require('node:path');//path, para manejar rutas de archivos de forma multiplataforma
const fs=require('node:fs');//file system, para leer y escribir archivos
const { promises } = require('node:dns');
/*import { platform, arch, cpus, totalmem, freemem, uptime } from 'node:os';
import path from 'node:path';//path, para manejar rutas de archivos de forma multiplataforma
import fs from 'node:fs';//file system, para leer y escribir archivos
 */
console.log('Información del sistema operativo:');
console.log(`Plataforma: ${os.platform()}`);
console.log(`Arquitectura: ${os.arch()}`);
console.log(`CPUs: ${os.cpus()}`);//escalar procesos segun los nucleos disponibles
console.log(`Memoria total: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Memoria libre: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`uptime: ${(os.uptime() / 3600).toFixed(2)} horas`);



console.log('ejemplos de file system(fs):');

const stats=fs.statSync('../../worker.js');
console.log(`El archivo worker.js tiene un tamaño de ${stats.size} bytes y fue modificado por última vez el ${stats.mtime}`);

const contenido=fs.readFileSync('../../worker.js','utf-8');
console.log(`Contenido de worker.js:\n${contenido.slice(0,100)}...`);//solo muestra los primeros 100 caracteres

//requiere(node:fs/promises) para usar fs con promesas, o usar fs.promises directamente
//const{promify}=require('node:util'); solo en modulos sin promesas nativas, para convertir funciones de callback a promesas
// ahora de forma asincrona, con promesas con async/await
async function mostrarInfoArchivo() {
    try {
        const statsAsync=await fs.promises.stat('../../worker.js');
        console.log(`(Async) El archivo worker.js tiene un tamaño de ${statsAsync.size} bytes y fue modificado por última vez el ${statsAsync.mtime}`);}
    catch (error) {
        console.error('Error al obtener información del archivo:', error);
    }}

mostrarInfoArchivo();
console.log('ejecutando otra cosa mientras se obtiene la información del archivo de forma asincrona...');    

// fs asicnrono con callbacks
fs.stat('../../worker.js',(err,stats)=>{console.log(`(Callback) El archivo worker.js tiene un tamaño de ${stats.size} bytes y fue modificado por última vez el ${stats.mtime}`);    });


// usar asrync/await con .js es por medio de funciones async, pero con .mjs se puede usar top-level await sin necesidad de funciones async, lo que simplifica el código asincrono. en la ultima 
// se invoca de la forma import fs from 'node:fs/promises'; y luego se puede usar await directamente sin funciones async.
// o import {read} from 'node:fs/promises'


//sincrono, asincrono secuencial, asincrono concurrente, asincrono con callbacks, asincrono con promesas, asincrono con async/await, top-level await (en .mjs)
//sincrono bloquea el hilo principal, asincrono permite que el programa siga ejecutandose mientras se espera una respuesta, concurrente permite ejecutar varias tareas al mismo tiempo, callbacks son funciones que se pasan como argumentos 
// a otras funciones para que se ejecuten cuando se complete una tarea, promesas son objetos que representan el resultado de una operación asincrona, async/await es una sintaxis que permite escribir código asincrono de forma más legible, top-level await permite usar 
// await sin necesidad de funciones async en módulos .mjs.


// en paralelo(falso) es decir que se ejecutan varias tareas al mismo tiempo, mientras que en secuencial se ejecutan una después de la otra. en paralelo se puede lograr con Promise.all() o con async/await sin esperar a cada tarea, mientras que en secuencial se espera a cada tarea antes de continuar con la siguiente.
Promise.all([
    fs.promises.stat('../../worker.js'),
    fs.promises.readFile('../../worker.js','utf-8').then(contenido=>console.log(`Contenido de worker.js:\n${contenido.slice(0,100)}...`))
]).then(([stats])=>{console.log(`(Parallel) El archivo worker.js tiene un tamaño de ${stats.size} bytes y fue modificado por última vez el ${stats.mtime}`);})
.catch(error=>console.error('Error en tareas paralelas:', error));


// abrir directorio actual sin importar el sistema operativo, usando path para construir la ruta de forma multiplataforma
const directorioActual=path.join('carpeta','subcarpeta');//path.join() para construir rutas de forma multiplataforma
console.log(`Directorio actual: ${directorioActual}`);

path.basename(directorioActual);//devuelve el nombre del ultimo segmento de la ruta
path.dirname(directorioActual);

path.extname('archivo.txt');//devuelve la extension del archivo
path.parse('archivo.txt');//devuelve un objeto con la ruta, el nombre, la extension, etc.



//leer un directorio y mostrar su contenido
fs.readdir('./',(err,archivos)=>{if (err) {console.error('Error al leer el directorio:', err);} else {console.log('Contenido del directorio actual:'); archivos.forEach(archivo=>console.log(archivo));}});

//crear un archivo nuevo y escribir contenido
fs.writeFile('nuevoArchivo.txt','Hola, este es un nuevo archivo creado con fs.writeFile',err=>{if (err) {console.error('Error al crear el archivo:', err);} else {console.log('Archivo creado exitosamente');}});


//proccess es un objeto global que proporciona información y control sobre el proceso de Node.js en ejecución. se puede usar para obtener información del entorno, manejar señales, salir del proceso, etc.
console.log(`Argumentos de la línea de comandos: ${process.argv}`);
console.log(`Directorio de trabajo actual: ${process.cwd()}`);
console.log(`Versión de Node.js: ${process.version}`);
proccess.exit(0);//salir del proceso con código de salida 0 (éxito) o cualquier otro código para indicar error

process.on('exit', code=>{console.log(`El proceso ha salido con el código: ${code}`);});// manejar eventos de salida del proceso


//variables de entorno, se pueden usar para configurar el comportamiento de la aplicación sin modificar el código, por ejemplo, para establecer el puerto del servidor, la base de datos, etc.
console.log(`Variable de entorno NODE_ENV: ${process.env.NODE_ENV}`);
process.env.NODE_ENV='production';//establecer una variable de entorno