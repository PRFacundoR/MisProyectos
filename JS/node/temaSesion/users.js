import DBlocal from 'db-local';//no usa sql, es una base de datos local que guarda los datos en un archivo json, es muy simple de usar y no requiere configuración, ideal para proyectos pequeños o para aprender a usar bases de datos en node, no es recomendable para proyectos grandes o en producción, ya que no tiene las mismas características de seguridad, rendimiento y escalabilidad que una base de datos relacional o NoSQL, pero para este ejemplo es suficiente para guardar los usuarios y sus contraseñas de forma sencilla.
import seguridad from 'bcrypt';//hash para claves

const { Schema } = new DBlocal({ path: './db' });
const User = Schema({//el esquema de la base de datos, define la estructura de los datos que vamos a guardar, en este caso, un usuario con un nombre de usuario y una contraseña, ambos son obligatorios, el nombre de usuario debe ser único para evitar que haya dos usuarios con el mismo nombre.
    //el esquema es como una plantilla que define cómo deben ser los datos que vamos a guardar en la base de datos, en este caso, un usuario con un nombre de usuario y una contraseña, ambos son obligatorios, el nombre de usuario debe ser único para evitar que haya dos usuarios con el mismo nombre.
    id: { type: String, required: true, unique: true },
    user: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
});

export class Users {
    static async create({ user, pass }) {

        //podemos usar zod

        //validaciones son:
        //1. el nombre de usuario debe ser una cadena de texto, no puede estar vacío, y debe tener al menos 3 caracteres.
        //2. la contraseña debe ser una cadena de texto, no puede estar vacía, y debe tener al menos 6 caracteres.
        if (typeof user !== 'string' || user.trim() === '' || user.length < 3) {
            throw new Error('El nombre de usuario debe ser una cadena de texto, no puede estar vacío, y debe tener al menos 3 caracteres.');
        }
        if (typeof pass !== 'string' || pass.trim() === '' || pass.length < 6) {
            throw new Error('La contraseña debe ser una cadena de texto, no puede estar vacía, y debe tener al menos 6 caracteres.');
        }


        //ver que el username no exista en la base de datos, si existe, lanzar un error, si no existe, crear el usuario en la base de datos y devolver el usuario creado.
        const existingUser = User.findOne({ user });//buscamos un usuario con el mismo nombre de usuario en la base de datos, si existe, devuelve el usuario, si no existe, devuelve null.
        if (existingUser) {
            throw new Error('El nombre de usuario ya existe, por favor elige otro nombre de usuario.');
        }

        //genera el id
        const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);//genera un id aleatorio de 16 caracteres, esto no es seguro para producción, pero para este ejemplo es suficiente, en producción se recomienda usar una librería como uuid para generar ids únicos y seguros.
        let passhash = await seguridad.hash(pass, 10);//hasheamos la contraseña con bcrypt, el segundo parámetro es el número de rondas de sal, entre más rondas, más seguro, pero también más lento, para este ejemplo, 10 rondas es suficiente, en producción se recomienda usar al menos 12 rondas para mayor seguridad.
        const newUser = User.create({ id, user, pass: passhash }).save();//creamos el usuario en la base de datos, el método create crea una instancia del modelo User con los datos proporcionados, y el método save guarda esa instancia en la base de datos, si todo sale bien, devuelve el usuario creado, si hay un error, lanza una excepción.
        return id;
    };



    static async login({ user, pass }) {

        if (typeof user !== 'string' || user.trim() === '' || user.length < 3) {
            throw new Error('El nombre de usuario debe ser una cadena de texto, no puede estar vacío, y debe tener al menos 3 caracteres.');
        }
        if (typeof pass !== 'string' || pass.trim() === '' || pass.length < 6) {
            throw new Error('La contraseña debe ser una cadena de texto, no puede estar vacía, y debe tener al menos 6 caracteres.');
        }

        const userInDB = User.findOne({ user });//buscamos el usuario en la base de datos, si existe, devuelve el usuario, si no existe, devuelve null.
        if (!userInDB) {
            throw new Error('El nombre de usuario no existe, por favor verifica tu nombre de usuario e intenta de nuevo.');
        }
        if (!await seguridad.compare(pass, userInDB.pass)) {
            throw new Error('La contraseña es incorrecta, por favor verifica tu contraseña e intenta de nuevo.');
        }
        return userInDB;

    };
    static logout({ user }) { }


}