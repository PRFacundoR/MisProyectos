import express from 'express';
import { Users } from './users';
import JWT from 'jsonwebtoken';
import cookieParser from 'cookie-parser';//este middleware es necesario para poder acceder a las cookies enviadas por el cliente en la solicitud, sin este middleware, req.cookies estará vacío y no podremos acceder a las cookies enviadas por el cliente, este middleware parsea las cookies de la solicitud y las convierte en un objeto JavaScript, para que podamos acceder a las cookies enviadas por el cliente a través de req.cookies.
//import 'dotnev' //para cargar las variables de entorno desde un archivo .env, esto nos permite mantener la configuración de nuestra aplicación separada del código, lo que mejora la seguridad y la flexibilidad de nuestra aplicación, por ejemplo, podríamos usar variables de entorno para almacenar la palabra secreta que usamos para firmar los tokens JWT, o para almacenar la URL de la base de datos, etc.
//zod para validaciones, es una librería de validación de datos para JavaScript y TypeScript, nos permite definir esquemas de validación para nuestros datos, y luego validar los datos contra esos esquemas, si los datos son válidos, devuelve los datos validados, si los datos no son válidos, lanza un error con un mensaje detallado de qué salió mal, esto nos ayuda a asegurarnos de que los datos que recibimos en nuestro servidor sean del tipo y formato esperado, lo que mejora la seguridad y la robustez de nuestra aplicación. En este ejemplo, podríamos usar zod para validar los datos recibidos en el endpoint de registro, por ejemplo, para asegurarnos de que el nombre de usuario sea una cadena de texto no vacía y tenga al menos 3 caracteres, y que la contraseña sea una cadena de texto no vacía y tenga al menos 6 caracteres.
//libreria par login, registro y manejo de sesiones, como passport.js, jsonwebtoken, etc. Estas librerías nos ayudan a implementar funcionalidades de autenticación y autorización en nuestra aplicación de manera más sencilla y segura, por ejemplo, passport.js es una librería de autenticación para Node.js que nos permite implementar diferentes estrategias de autenticación, como autenticación local con nombre de usuario y contraseña, autenticación con redes sociales como Google o Facebook, etc. Jsonwebtoken es una librería que nos permite generar y verificar tokens JWT (JSON Web Tokens), que son una forma segura de transmitir información entre el cliente y el servidor, por ejemplo, podríamos usar JWT para generar un token de acceso cuando un usuario inicia sesión, y luego verificar ese token en las rutas protegidas para asegurarnos de que el usuario esté autenticado antes de permitirle acceder a esos recursos.
//ejs para renderizar vistas, es un motor de plantillas para Node.js que nos permite generar HTML dinámico en el servidor, podríamos usar ejs para renderizar páginas de inicio de sesión, registro, etc. Esto nos permite separar la lógica de negocio de la presentación, lo que mejora la mantenibilidad y la escalabilidad de nuestra aplicación.
//libreria para session de usuarios, como express-session, cookie-session, etc. Estas librerías nos ayudan a manejar sesiones de usuarios en nuestra aplicación, lo que nos permite mantener la información del usuario autenticado entre diferentes solicitudes, por ejemplo, podríamos usar express-session para crear una sesión de usuario cuando un usuario inicia sesión, y luego almacenar información relevante en esa sesión, como el ID del usuario, su nombre de usuario, etc. Luego, en las rutas protegidas, podríamos verificar si la sesión del usuario existe y es válida antes de permitirle acceder a esos recursos.

//json web token para manejar la autenticación y autorización de usuarios(sin estados), es una forma segura de transmitir información entre el cliente y el servidor, podríamos usar JWT para generar un token de acceso cuando un usuario inicia sesión, y luego verificar ese token en las rutas protegidas para asegurarnos de que el usuario esté autenticado antes de permitirle acceder a esos recursos. Esto nos permite implementar una autenticación sin estado (stateless) en nuestra aplicación, lo que mejora la escalabilidad y la seguridad de nuestra aplicación.
//JBT tambien se puede usar para implementar autorización basada en roles, por ejemplo, podríamos incluir información sobre el rol del usuario en el token JWT, y luego verificar esa información en las rutas protegidas para asegurarnos de que el usuario tenga los permisos necesarios para acceder a esos recursos.
// puede ser una transsacción de base de datos, por ejemplo, podríamos usar una transacción para asegurarnos de que la creación de un nuevo usuario en la base de datos sea atómica, es decir, que se complete completamente o no se complete en absoluto, esto nos ayuda a mantener la integridad de los datos en nuestra aplicación, especialmente en situaciones donde múltiples operaciones dependen unas de otras, como por ejemplo, crear un nuevo usuario y asignarle un rol específico en la base de datos.
//en los jwt tenemos una palabra secreta que la ponemos nosotros en las variables de entorno, esta palabra secreta es la que se usa para firmar y verificar los tokens JWT, es importante mantener esta palabra secreta segura y no compartirla públicamente, ya que si un atacante obtiene acceso a esta palabra secreta, podría generar tokens JWT falsos y acceder a recursos protegidos en nuestra aplicación sin autorización.
//no es necesario usar una base de datos para este ejemplo, podríamos usar un array en memoria para almacenar los usuarios y sus contraseñas, pero esto no es recomendable para aplicaciones reales, ya que los datos se perderían cada vez que se reinicie el servidor, además de que no es seguro almacenar contraseñas en texto plano en memoria, por lo que es importante usar una base de datos para almacenar los usuarios y sus contraseñas de manera segura y persistente.

/*
librerias que uso son:
- express para crear el servidor y manejar las rutas.
- bcrypt para hashear las contraseñas de los usuarios, esto es importante para proteger la información de los usuarios en caso de que la base de datos sea comprometida, al hashear las contraseñas, incluso si un atacante obtiene acceso a la base de datos, no podrá ver las contraseñas en texto plano, sino solo los hashes, lo que hace mucho más difícil para un atacante adivinar las contraseñas de los usuarios.
-jsonwebtoken para generar y verificar tokens JWT, esto nos permite implementar una autenticación sin estado (stateless) en nuestra aplicación, lo que mejora la escalabilidad y la seguridad de nuestra aplicación, además de que también se puede usar para implementar autorización basada en roles.
- ejs para renderizar vistas, esto nos permite separar la lógica de negocio de la presentación, lo que mejora la mantenibilidad y la escalabilidad de nuestra aplicación, podríamos usar ejs para renderizar páginas de inicio de sesión, registro, etc.

las que se instalan con -D son:
- nodemon para reiniciar automáticamente el servidor cada vez que se detecta un cambio en el código, esto es muy útil durante el desarrollo, ya que nos permite ver los cambios en tiempo real sin tener que reiniciar manualmente el servidor cada vez que hacemos un cambio en el código.
- zod para validaciones, esto nos ayuda a asegurarnos de que los datos que recibimos en nuestro servidor sean del tipo y formato esperado, lo que mejora la seguridad y la robustez de nuestra aplicación, podríamos usar zod para validar los datos recibidos en el endpoint de registro, por ejemplo, para asegurarnos de que el nombre de usuario sea una cadena de texto no vacía y tenga al menos 3 caracteres, y que la contraseña sea una cadena de texto no vacía y tenga al menos 6 caracteres.

las que se instalan con -D son para el desarrollo, no son necesarias en producción, pero son muy útiles durante el desarrollo para mejorar la productividad y la calidad del código, por ejemplo, nodemon nos permite ver los cambios en tiempo real sin tener que reiniciar manualmente el servidor cada vez que hacemos un cambio en el código, lo que mejora la eficiencia durante el desarrollo. Zod nos ayuda a validar los datos de manera más robusta y detallada, lo que mejora la seguridad y la calidad de nuestra aplicación durante el desarrollo.

las que se instalan sin -D son necesarias en producción, ya que son las librerías que usamos para implementar la funcionalidad de nuestra aplicación, por ejemplo, express es necesario para crear el servidor y manejar las rutas, bcrypt es necesario para hashear las contraseñas de los usuarios, jsonwebtoken es necesario para generar y verificar tokens JWT, ejs es necesario para renderizar vistas, etc. Estas librerías son esenciales para el funcionamiento de nuestra aplicación tanto en desarrollo como en producción.

las que se una -E son para manejar errores de manera profesional, esto nos ayuda a mejorar la robustez y la seguridad de nuestra aplicación, por ejemplo, podríamos usar una librería como express-async-errors para manejar errores de manera más sencilla en nuestras rutas asíncronas, o podríamos usar una librería como winston para registrar los errores en un archivo de log, lo que nos permite tener un historial de los errores que ocurren en nuestra aplicación y facilitar la depuración y el mantenimiento de la aplicación a largo plazo.

-d para dependencias de desarrollo, -E para dependencias de manejo de errores, sin ningún flag para dependencias necesarias en producción.

*/


const app = express()
app.use(express.json())//este middleware es necesario para poder acceder a los datos enviados por el cliente en el cuerpo de la solicitud, sin este middleware, req.body estará vacío y no podremos acceder a los datos enviados por el cliente, este middleware parsea el cuerpo de la solicitud y lo convierte en un objeto JavaScript, para que podamos acceder a los datos enviados por el cliente a través de req.body.
app.use(cookieParser())//este middleware es necesario para poder acceder a las cookies enviadas por el cliente en la solicitud, sin este middleware, req.cookies estará vacío y no podremos acceder a las cookies enviadas por el cliente, este middleware parsea las cookies de la solicitud y las convierte en un objeto JavaScript, para que podamos acceder a las cookies enviadas por el cliente a través de req.cookies.
//middlware para autenticación , esto nos permite proteger ciertas rutas de nuestra aplicación para que solo los usuarios autenticados puedan acceder a ellas, por ejemplo, podríamos crear un middleware de autenticación que verifique el token JWT enviado por el cliente en las cookies, y si el token es válido, permita el acceso a la ruta protegida, si el token no es válido o no existe, devuelva una respuesta de error indicando que el acceso está denegado. Esto nos permite implementar una autenticación sin estado (stateless) con JWT, lo que mejora la escalabilidad y la seguridad de nuestra aplicación al no depender de sesiones almacenadas en el servidor.
app.use((req, res, next) => {
    console.log('Middleware de autenticación');
    const token = req.cookies.access_token;//obtenemos el token JWT de las cookies enviadas por el cliente, esto se hace con el middleware cookie-parser que parsea las cookies de la solicitud y las convierte en un objeto JavaScript, para poder acceder a las cookies enviadas por el cliente a través de req.cookies, es importante configurar este middleware en el servidor, de lo contrario, req.cookies estará vacío y no podremos acceder a las cookies enviadas por el cliente.
    
    req.session = {user: null}
    
    try {
       const data = JWT.verify(token, process.env.JWT_SECRET);//verificamos el token JWT
        req.session.user = data;//si el token es válido, almacenamos la información del usuario en la sesión, esto nos permite tener acceso a la información del usuario autenticado en todas las rutas de nuestra aplicación, lo que facilita la implementación de funcionalidades que dependan de la información del usuario autenticado, como por ejemplo, mostrar el nombre del usuario en la vista, o verificar los permisos del usuario para acceder a ciertos recursos, etc.
        
    }catch{}//inicializamos la propiedad session en null, esto nos permite tener una propiedad session disponible en todas las rutas de nuestra aplicación, incluso si el usuario no está autenticado, esto es útil para evitar errores de tipo "Cannot read property 'user' of null" en las rutas protegidas, ya que siempre tendremos una propiedad session disponible, aunque su valor sea null.
    next();
})

const port = process.env.PORT || 3000;


//de aca hasta

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const {user} = req.session;//obtenemos la información del usuario autenticado de la sesión, esto nos permite mostrar información personalizada en la vista, como por ejemplo, el nombre del usuario, o mostrar diferentes opciones en el menú dependiendo de si el usuario está autenticado o no, etc. Esto es solo un ejemplo, en una aplicación real, podríamos usar esta información para mostrar diferentes vistas o para mostrar información específica para cada usuario autenticado.
    res.render('vista', user);//renderiza la vista 'vista.ejs' y le pasa un objeto con una propiedad 'title' que tiene el valor 'Página de inicio', esto nos permite mostrar un título dinámico en la página de inicio, y también nos permite reutilizar la misma vista para diferentes páginas, simplemente cambiando el valor de la propiedad 'title' u otras propiedades que queramos pasar a la vista.
});
//hsata aca el tema de renderizar vistas, el name se le pase el name de la db cuando se hace el incio de sesion, para mostrar el nombre del usuario en la vista, esto es solo un ejemplo, en una aplicación real, podríamos usar sesiones o tokens para mantener la información del usuario autenticado y mostrar su nombre en la vista de manera más segura y robusta.
app.get('/saludo', (req, res) => {
    res.send('Hola desde la ruta /saludo');
});

app.post('/login', async(req, res) => {
        const {user, pass} = req.body;
        try {
            
            const userInDB = await Users.login({user, pass});
            const token= JWT.sign({id: userInDB.id, user: userInDB.user}, process.env.JWT_SECRET, {expiresIn: '1h'});//generamos un token JWT con la información del usuario autenticado, el primer parámetro es el payload del token, que es un objeto con la información que queremos incluir en el token, en este caso, el ID y el nombre de usuario del usuario autenticado, el segundo parámetro es la palabra secreta que usamos para firmar el token, esta palabra secreta debe ser segura y no debe compartirse públicamente, por lo general se almacena en una variable de entorno para mantenerla segura , el tercer parámetro es un objeto con opciones adicionales para el token, en este caso, estamos estableciendo una expiración de 1 hora para el token, lo que significa que el token será válido durante 1 hora después de su creación, después de ese tiempo, el token expirará y ya no será válido para autenticar al usuario.
            //la palabra secreta que usamos 'process.env.JWT_SECRET' no la definimos nosotros, sino que la definimos en un archivo .env que no se incluye en el código fuente de nuestra aplicación, esto es importante para mantener la seguridad de nuestra aplicación, ya que si compartimos públicamente la palabra secreta, un atacante podría generar tokens JWT falsos y acceder a recursos protegidos en nuestra aplicación sin autorización.,PERO LA QUE ESTAMOS USANDO ES UNA AUTOGENERADA POR JWT, ESTO NO ES SEGURO PARA PRODUCCIÓN, EN PRODUCCIÓN SE RECOMIENDA USAR UNA PALABRA SECRETA SEGURA Y ÚNICA PARA CADA APLICACIÓN, POR EJEMPLO, PODRÍAMOS USAR UNA CADENA DE CARACTERES ALEATORIA DE AL MENOS 32 CARACTERES DE LONGITUD, O PODRÍAMOS USAR UNA HERRAMIENTA COMO OPENSSL PARA GENERAR UNA CLAVE SECRETA SEGURA. 
            // EL TOKEN SE GUARDAN EN LAS COOKIES DEL NAVEGADOR, ESTO NOS PERMITE MANTENER LA SESIÓN DEL USUARIO AUTENTICADO ENTRE DIFERENTES SOLICITUDES, PARA GUARDAR EL TOKEN EN LAS COOKIES, PODRÍAMOS USAR EL MÉTODO res.cookie() DE EXPRESS, POR EJEMPLO: res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' }); ESTO GUARDARÍA EL TOKEN EN UNA COOKIE LLAMADA 'token' CON LAS OPCIONES httpOnly, secure y sameSite CONFIGURADAS PARA MEJORAR LA SEGURIDAD DE LA COOKIE. LUEGO, EN LAS RUTAS PROTEGIDAS, PODRÍAMOS VERIFICAR SI LA COOKIE 'token' EXISTE Y ES VÁLIDA ANTES DE PERMITIRLE ACCEDER A ESOS RECURSOS PROTEGIDOS. NO SE GUARDAN EN LOCALSTORAGE Y SESIONSTORAGE PORQUE ESTO NO ES SEGURO, YA QUE LAS COOKIES CON LA OPCIÓN httpOnly CONFIGURADA NO SON ACCESIBLES DESDE EL LADO DEL CLIENTE, LO QUE PROTEGE EL TOKEN DE ATA 
            //LOCALSTORAGE Y SESIONSTORAGE SON VULNERABLES A ATAQUES DE CROSS-SITE SCRIPTING (XSS), LO QUE SIGNIFICA QUE UN ATACANTE PODRÍA INYECTAR CÓDIGOS MALICIOSOS EN LA PÁGINA WEB Y ROBAR EL TOKEN ALMACENADO EN LOCALSTORAGE O SESIONSTORAGE, POR LO TANTO, ES RECOMENDABLE GUARDAR LOS TOKENS DE AUTENTICACIÓN EN COOKIES CON LA OPCIÓN httpOnly CONFIGURADA PARA MEJORAR LA SEGURIDAD DE NUESTRA APLICACIÓN.
            res.cookie('access_token', token,{
                httpOnly: true,//esto hace que la cookie no sea accesible desde el lado del cliente, lo que protege el token de ataques de cross-site scripting (XSS), ya que un atacante no podría acceder a la cookie a través de JavaScript inyectado en la página web.
                secure:process.env.NODE_ENV === 'production',//esto hace que la cookie solo se envíe a través de conexiones seguras (HTTPS) en producción, lo que protege el token de ser interceptado por atacantes en conexiones no seguras, en desarrollo, esta opción se puede desactivar para facilitar las pruebas, pero en producción es importante mantenerla activada para mejorar la seguridad de nuestra aplicación.
                sameSite: 'strict',//esto hace que la cookie solo se envíe en solicitudes originadas desde el mismo sitio, lo que protege el token de ataques de cross-site request forgery (CSRF), ya que un atacante no podría enviar solicitudes maliciosas desde otro sitio web para robar el token o realizar acciones en nombre del usuario autenticado.
                maxAge: 60 * 60 * 1000,//esto establece una expiración de 1 hora para la cookie, lo que significa que la cookie será válida durante 1 hora después de su creación, después de ese tiempo, la cookie expirará y ya no será válida para autenticar al usuario, esto ayuda a mejorar la seguridad de nuestra aplicación al limitar el tiempo durante el cual un token comprometido podría ser utilizado por un atacante.
            }).send({message: 'Inicio de sesión exitoso', user: userInDB});
        } catch (error) {
            res.status(401).send({message: error.message});// no se muestra el error completo por seguridad, solo se muestra el mensaje de error, esto es importante para evitar revelar información sensible sobre la implementación de nuestro sistema de autenticación, como por ejemplo, si el nombre de usuario no existe o si la contraseña es incorrecta, esto podría ayudar a un atacante a adivinar nombres de usuario válidos o a realizar ataques de fuerza bruta para adivinar contraseñas.
        }

});
app.post('/registro', async (req, res) => {
    const {user, pass} = req.body;//obtenemos el nombre de usuario y la contraseña del cuerpo de la solicitud, esto se hace con el middleware express.json() que parsea el cuerpo de la solicitud y lo convierte en un objeto JavaScript, para poder acceder a los datos enviados por el cliente, es importante configurar este middleware en el servidor, de lo contrario, req.body estará vacío y no podremos acceder a los datos enviados por el cliente.
    //aqui podemos validar los datos recibidos, por ejemplo, verificar que el nombre de usuario no esté vacío, que la contraseña tenga una longitud mínima, etc. Si los datos son válidos, podemos crear un nuevo usuario en la base de datos y devolver una respuesta al cliente indicando que el registro fue exitoso, si los datos no son válidos, podemos devolver una respuesta con un mensaje de error indicando qué salió mal.

    try {
        const id= await Users.create({user,pass});
        res.send({id});
    } catch (error) {
        //clase 7 min 31 midu nos manda a ver un video de él de como manejar erores de manera pro
    }
});
app.post('/cerrar-sesion', (req, res) => {
    res.clearCookie('access_token').send({message: 'Sesión cerrada exitosamente'});//esto borra la cookie 'access_token' del navegador del cliente, lo que efectivamente cierra la sesión del usuario autenticado, ya que el token JWT almacenado en esa cookie ya no estará disponible para autenticar al usuario en las rutas protegidas, esto es una forma sencilla de implementar la funcionalidad de cierre de sesión en nuestra aplicación, simplemente borrando la cookie que contiene el token de autenticación.
});

app.get('/protegida'/*ruta*/, (req, res) => {
    //asi se hace para la autenticación sin estado (stateless) con JWT, verificamos el token JWT enviado por el cliente en las cookies, si el token es válido, permitimos el acceso a la ruta protegida, si el token no es válido o no existe, devolvemos una respuesta de error indicando que el acceso está denegado.
    const token = req.cookies.access_token;//obtenemos el token JWT de las cookies enviadas por el cliente, esto se hace con el middleware cookie-parser que parsea las cookies de la solicitud y las convierte en un objeto JavaScript, para poder acceder a las cookies enviadas por el cliente, es importante configurar este middleware en el servidor, de lo contrario, req.cookies estará vacío y no podremos acceder a las cookies enviadas por el cliente.
    if (!token) {
        return res.status(401).send({message: 'Acceso denegado'});
    }
    try {
        const decoded = JWT.verify(token, /*va palabra secreta*/process.env.JWT_SECRET);//verificamos el token JWT, el primer parámetro es el token JWT que queremos verificar, el segundo parámetro es la palabra secreta que usamos para firmar el token, esta palabra secreta debe ser la misma que usamos para firmar el token, si el token es válido, JWT.verify() devuelve el payload del token decodificado, que es un objeto con la información que incluimos en el token al momento de generarlo, en este caso, el ID y el nombre de usuario del usuario autenticado, si el token no es válido o ha expirado, JWT.verify() lanza una excepción, por lo que es importante manejar esta excepción para devolver una respuesta de error adecuada al cliente.
        //si el token es válido, podemos permitir el acceso a la ruta protegida, por ejemplo, podríamos devolver una respuesta con un mensaje de bienvenida al usuario autenticado, o podríamos devolver información específica para ese usuario, etc.
        res.send({message: `Bienvenido ${decoded.user} a la ruta protegida`});
    } catch (error) {
        res.status(401).send({message: 'Acceso denegado'});
    }
});//hacer esto en todas las rutas que queramos proteger, es decir, que solo los usuarios autenticados puedan acceder a ellas, esto nos permite implementar una autenticación sin estado (stateless) con JWT, lo que mejora la escalabilidad y la seguridad de nuestra aplicación al no depender de sesiones almacenadas en el servidor.
// para evitar repetir este código de verificación del token JWT en cada ruta protegida, podríamos crear un middleware de autenticación que se encargue de verificar el token JWT y permitir o denegar el acceso a las rutas protegidas, esto nos permite mantener nuestro código más limpio y modular, y facilita la gestión de la autenticación en nuestra aplicación.


//falta el tema de que hacer cuando la cookie del token JWT expira, podríamos manejar esto en el middleware de autenticación, por ejemplo, podríamos verificar la fecha de expiración del token JWT y si el token ha expirado, podríamos borrar la cookie del token JWT y devolver una respuesta de error indicando que la sesión ha expirado, esto nos permite manejar de manera más robusta la expiración de las sesiones de los usuarios autenticados en nuestra aplicación. 
//se hace como una segunda cookie para manejar la expiración de la sesión, por ejemplo, podríamos crear una cookie adicional llamada 'session_expiration' que almacene la fecha de expiración de la sesión, y luego en el middleware de autenticación, podríamos verificar esta cookie para determinar si la sesión ha expirado o no, si la sesión ha expirado, podríamos borrar ambas cookies (la del token JWT y la de la fecha de expiración) y devolver una respuesta de error indicando que la sesión ha expirado, esto nos permite manejar de manera más robusta la expiración de las sesiones de los usuarios autenticados en nuestra aplicación.

app.listen(port, () => {
    console.log('Servidor iniciado en el puerto ' + port);
});