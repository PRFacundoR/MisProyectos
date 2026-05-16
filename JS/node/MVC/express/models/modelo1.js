

export class name {
    constructor(parameters) {
        
    }
}// hacer los metodos asincronos asi me devuelva una promesa y en el controlador puedo usar el await para esperar a que se resuelva la promesa y asi obtener el resultado de la operacion asincrona, por ejemplo, si tengo un metodo asincrono que obtiene los datos de una base de datos, puedo usar el await para esperar a que se resuelva la promesa y asi obtener los datos de la base de datos, y luego puedo retornar esos datos al controlador para que los envie al cliente, por eso es importante hacer los metodos asincronos para poder usar el await en el controlador y asi obtener el resultado de la operacion asincrona.




// uso mysql2 como libreria, tengo que hacer la conexion a la base de datos en el constructor de la clase, y luego puedo usar esa conexion para hacer las consultas a la base de datos en los metodos de la clase, por ejemplo, si tengo un metodo asincrono que obtiene los datos de una tabla de la base de datos, puedo usar la conexion que hice en el constructor para hacer la consulta a la base de datos y obtener los datos, y luego puedo retornar esos datos al controlador para que los envie al cliente, por eso es importante hacer la conexion a la base de datos en el constructor de la clase para poder usarla en los metodos de la clase.

//de la siguiente manera se hace la conexion a la base de datos en el constructor de la clase:

import mysql from 'mysql2/promise';

const DEFAULT_CONFIG = {
    host: 'localhost',
    user: 'root',
    port: 3306,// si no usas el puerto por defecto, tenes que especificarlo, en mi caso usa el puerto 3306, pero si usas otro puerto, tenes que cambiarlo aqui,en produccion no se recomienda usar el puerto por defecto, es mejor usar un puerto personalizado para mayor seguridad, pero en desarrollo es mas facil usar el puerto por defecto, asi que yo lo dejo asi, pero si vos usas otro puerto, tenes que cambiarlo aqui., osea en produccion no se recomienda usar el puerto por defecto, es mejor usar un puerto personalizado ese puerto lo sacas 
    password: '',
    database: 'nombre_de_la_base_de_datos'
};

const config =process.env.DATABASE_URL ?? DEFAULT_CONFIG


const connection = await mysql.createConnection(config);

//ejemplo de una query a la base de datos usando la conexion que hice en el constructor de la clase:
const[rows, fields] = await connection.execute('SELECT * FROM nombre_de_la_tabla');

// luego puedo retornar esos datos al controlador para que los envie al cliente, por ejemplo:
return rows;

//si uso where en la consulta, puedo hacer algo asi:
const [rows, fields] = await connection.execute('SELECT * FROM nombre_de_la_tabla WHERE id = ?', [id]);

//.query es otra forma de hacer la consulta a la base de datos, pero no es recomendable usarla porque no es tan segura como execute, ya que query no hace el escape de los parametros, lo que puede generar vulnerabilidades de inyeccion SQL, por eso es mejor usar execute en lugar de query para hacer las consultas a la base de datos, asi que yo recomiendo usar execute en lugar de query para hacer las consultas a la base de datos.

//para los id si son cosas importantes, es mejor usar un uuid en lugar de un id autoincremental, ya que los uuid son mas seguros y no se pueden predecir, mientras que los id autoincrementales son faciles de predecir y pueden ser vulnerables a ataques de fuerza bruta, por eso es mejor usar uuid en lugar de id autoincremental para los id importantes, como por ejemplo el id de un usuario o el id de una orden, asi que yo recomiendo usar uuid en lugar de id autoincremental para los id importantes.


//clase 5 - node curso midudev minuto 1.13.00 puesta en produccion

// la inyeccion de dependencias es una tecnica que consiste en pasar las dependencias de una clase como parametros en el constructor de la clase, en lugar de crear las dependencias dentro de la clase, esto permite que la clase sea mas flexible y facil de testear, ya que podemos pasar diferentes dependencias para diferentes casos, por ejemplo, si tenemos una clase que hace consultas a la base de datos, podemos pasar la conexion a la base de datos como parametro en el constructor de la clase, en lugar de crear la conexion dentro de la clase, esto nos permite pasar una conexion mockeada para los tests unitarios, y una conexion real para la produccion, por eso es importante usar la inyeccion de dependencias para hacer nuestras clases mas flexibles y faciles de testear.

// para hacer la inyeccion de dependencias, podemos usar un contenedor de dependencias, que es una clase que se encarga de crear las instancias de las dependencias y pasarlas a las clases que las necesitan, por ejemplo, podemos crear un contenedor de dependencias que se encargue de crear la conexion a la base de datos y pasarla a las clases que necesitan hacer consultas a la base de datos, esto nos permite centralizar la creacion de las dependencias y facilitar el mantenimiento del codigo, por eso es importante usar un contenedor de dependencias para hacer la inyeccion de dependencias en nuestras clases.

// se usa en el controller para importar el modelo y crear una instancia del modelo, y luego usar esa instancia para llamar a los metodos del modelo y obtener los datos de la base de datos, y luego retornar esos datos al cliente, por ejemplo:

// las dependencias sirven por ejemplo para usar un gestor de guardar los datos ya sea en sql no sql, json o archivo, el controller tiene la misma logica pero el modelo se encarga de la logica de acceso a los datos, entonces si quiero cambiar la forma de guardar los datos, por ejemplo, si quiero cambiar de mysql a mongodb, solo tengo que cambiar el modelo, y el controller sigue funcionando igual, por eso es importante usar las dependencias para separar la logica de acceso a los datos del resto del codigo, y asi poder cambiar la forma de guardar los datos sin tener que cambiar el resto del codigo.

//-E es para installar para produccion, -D es para installar para desarrollo, por ejemplo, si quiero instalar una libreria que solo voy a usar en desarrollo, como por ejemplo nodemon, puedo usar el comando npm install nodemon -D para instalarlo solo en desarrollo, y asi no tenerlo instalado en produccion, lo mismo para las librerias que solo voy a usar en produccion, como por ejemplo mysql2, puedo usar el comando npm install mysql2 -E para instalarlo solo en produccion, y asi no tenerlo instalado en desarrollo, por eso es importante usar el comando npm install con las opciones -E o -D para instalar las librerias solo en el entorno donde las voy a usar, y asi mantener el proyecto limpio y organizado.

// -d es para instalar una libreria como dependencia de desarrollo, es decir, que solo se va a usar en el entorno de desarrollo, como por ejemplo nodemon, eslint, prettier, etc. Estas librerias son utiles para el desarrollo del proyecto, pero no son necesarias para el funcionamiento del proyecto en produccion, por eso es importante usar el comando npm install con la opcion -D para instalar las librerias como dependencias de desarrollo, y asi mantener el proyecto limpio y organizado.