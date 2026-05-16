
// ts no es para validaciones de usuarios
const nombreCurso: string = "TypeScript Avanzado";
const duracionCurso: number = 40;
const esCursoOnline: boolean = true;


function obtenerInformacionCurso(): string {
    return `El curso ${nombreCurso} tiene una duración de ${duracionCurso} horas y es ${esCursoOnline ? "online" : "presencial"}.`;
}  

 class name1 {
    private persona: string 
    private edad: number;


    constructor(persona: string, edad: number) {
        this.persona = persona;
        this.edad = edad;

    }

    public getPersona(): string {
        return this.persona;
    }





}


const estudiante1 = new name1("Juan", 25);

estudiante1.getPersona();

fetch("https://api.example.com/curso")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error al obtener el curso:", error));




// 1. Definimos el TIPO de dato (la forma que tiene)
// Usamos interfaces o 'type' para representar la estructura pura.
type Persona = {
    // Usamos 'readonly' para seguridad en desarrollo
    readonly persona: string; 
    readonly edad: number;
}

// 2. Definimos la FUNCIÓN CREADORA (Equivale a tu constructor)
// Recibe los datos y devuelve un objeto de tipo 'Persona'.
const crearPersona = (personaIn: string, edadIn: number): Persona => {
    
    // Creamos el objeto plano (como la foto)
    const nuevaPersona: Persona = {
        persona: personaIn,
        edad: edadIn
    };

    // 🛡️ Blindamos el objeto en memoria usando Object.freeze().
    // Esto lo vuelve INMUTABLE TOTALMENTE en tiempo de ejecución.
    return Object.freeze(nuevaPersona);
};

// --- CÓMO USARLO EN EL MUNDO REAL ---

// A. Creamos el objeto inmutable
const usuario1 = crearPersona("Leo", 30);

// B. TypeScript nos protege mientras escribimos
// usuario1.edad = 31; // ❌ ERROR EN EL EDITOR: "Cannot assign to 'edad' because it is a read-only property."

// C. JavaScript nos protege mientras corre la aplicación (gracias a Object.freeze)
// Intentamos forzar el cambio
(usuario1 as any).edad = 31; // Forzamos a TS a ignorar el error
console.log(usuario1.edad); // Imprime 30. ¡El cambio fue ignorado!

// D. ¿Cómo "modificamos" si es inmutable? Creando una copia nueva.
// (Esto es clave para el frontend moderno como React/Redux)
const usuario1UnAñoDespues: Persona = crearPersona(usuario1.persona, usuario1.edad + 1);

console.log(usuario1);               // Imprime {persona: "Leo", edad: 30}
console.log(usuario1UnAñoDespues);    // Imprime {persona: "Leo", edad: 31}


//Union Type (El "O Lógico")

// Puede ser un número o un texto
type Identificador = number | string;

let idUsuario: Identificador = 123; // ✅ Válido
idUsuario = "UUID-456-ABC";       // ✅ Válido también
// idUsuario = true;              // ❌ Error: no es ni number ni string

type Rol = "Admin" | "Usuario" | "Invitado";




//Template Literal Types (La Plantilla Pura)

// Obligamos a que el texto empiece sí o sí con "Bearer " seguido de cualquier otro texto (string)
type TokenAutorizacion = `Bearer ${string}`;

let miToken: TokenAutorizacion = "Bearer abc123xyz"; // ✅ Impecable
// let tokenMalo: TokenAutorizacion = "Token abc123xyz"; // ❌ Error: Le falta el "Bearer "





//Template Union Types (La Multiplicación Mágica)

// Dos Union Types simples
type MetodoHTTP = "GET" | "POST" | "DELETE";
type Entidad = "usuarios" | "productos";

// Los metemos adentro de una plantilla:
type RutaAPI = `${MetodoHTTP} /api/${Entidad}`;

// TypeScript automáticamente generó estas 6 opciones por detrás:
// "GET /api/usuarios"
// "GET /api/productos"
// "POST /api/usuarios"
// "POST /api/productos"
// "DELETE /api/usuarios"
// "DELETE /api/productos"

let peticion: RutaAPI = "POST /api/usuarios"; // ✅ Autocompletado perfecto en tu editor


//Intersection Types: El "Y Lógico" (AND)

// 1. Definimos un tipo base chiquito
type Usuario1 = {
    nombre: string;
    email: string;
};

// 2. Definimos otro tipo base
type PermisosLaborales = {
    legajo: number;
    nivelAcceso: "Admin" | "Basico"; // ¡Acá metimos un Union Type de yapa!
};

// 3. 💥 LA INTERSECCIÓN: Sumamos los dos tipos
type Empleado = Usuario1 & PermisosLaborales;
// Ahora, cuando querés crear un Empleado, TypeScript te obliga a poner TODO junto.
// Si te falta una sola propiedad de cualquiera de los dos tipos, te tira error.
const nuevoEmpleado: Empleado = {
    // Viene del tipo Usuario
    nombre: "Leo",
    email: "leo@empresa.com",
    
    // Viene del tipo PermisosLaborales
    legajo: 9942,
    nivelAcceso: "Admin" 
};





///type indexing



/**
 * 
 * ¡Seguimos sacando herramientas de la caja! 🛠️
Acabás de llegar a una de las funciones más prácticas para ahorrarte líneas de código inútiles. A esto formalmente se le llama Indexed Access Types (Tipos de Acceso Indizado), pero "Type Indexing" es como le decimos todos en el día a día.

Para tu mente lógica, la regla mnemotécnica es esta: Es hacer lo mismo que hacés para leer el valor de un array o un diccionario, pero aplicándolo a los Tipos.

En JavaScript puro, si querés leer un valor adentro de un objeto, hacés esto: let valor = miObjeto["propiedad"];.
En TypeScript, hacés exactamente lo mismo, pero para extraer un Tipo que está anidado adentro de otro.

¿Por qué lo necesitamos? (El problema)
Imaginate que estás consumiendo una API gigante y la librería te da un solo Tipo masivo para toda la respuesta, pero vos estás armando un componente en React que solo necesita una partecita de esa respuesta.

En C#, tendrías que ir al archivo original y sacar la clase anidada para poder usarla como parámetro, o crear un DTO nuevo. En TypeScript, simplemente "navegás" hacia adentro del tipo.

El código en acción
Mirá cómo "consultamos" el tipo como si fuera un diccionario:
 * 
 * 
 */
// 1. El tipo gigante que te devuelve la API (o que armaste vos)
type RespuestaAPI = {
    datos: {
        usuario: {
            id: string;
            nombre: string;
            rol: "Admin" | "Editor" | "Lector";
        };
        token: string;
    };
    codigoEstado: number;
};

// 2. 🎯 TYPE INDEXING AL RESCATE
// Extraemos el tipo exacto de 'usuario' sin tener que reescribirlo.
type PerfilUsuario = RespuestaAPI["datos"]["usuario"];

// 3. Ahora podemos usarlo en nuestras funciones
const mostrarPerfil = (perfil: PerfilUsuario) => {
    console.log(perfil.nombre); // ✅ TS sabe que esto es un string
    console.log(perfil.rol);    // ✅ TS sabe que esto es "Admin" | "Editor" | "Lector"
};





/**
 * 
 * Truco Avanzado: Indexando con Union Types
Como en TypeScript todo se puede combinar, podés usar un Union Type adentro de los corchetes para extraer varios tipos al mismo tiempo.
 * 
 */
type Producto = {
    id: number;
    nombre: string;
    precio: number;
    enStock: boolean;
};

// Le pedimos a TS: "Dame los tipos de 'nombre' Y de 'precio'"
// El resultado será: string | number
type TiposDeDatos = Producto["nombre" | "precio"];



// type of sirve para extraer el tipo de una variable o función ya declarada, y usarlo en otro lado sin tener que reescribirlo. Es como decir: "Quiero que esta nueva variable tenga exactamente el mismo tipo que esta otra que ya existe".
// ejemplo:
const mensajeBienvenida = "¡Bienvenido al curso de TypeScript!";
type TipoMensaje = typeof mensajeBienvenida; // TipoMensaje es ahora exactamente "¡Bienvenido al curso de TypeScript!"


// type of también funciona con funciones. Si tenés una función y querés usar su tipo para otra variable, podés hacerlo así:
function sumar(a: number, b: number): number {
    return a + b;
}  


type TipoFuncionSumar = typeof sumar; // TipoFuncionSumar es ahora (a: number, b: number) => number

const otraFuncion: TipoFuncionSumar = (x, y) => x * y; // Esto es válido porque tiene la misma firma que sumar, aunque haga otra cosa.



// type from function return type: Si querés extraer solo el tipo del valor que devuelve una función, sin importar los parámetros, usás ReturnType:
type TipoRetornoSumar = ReturnType<typeof sumar>; // TipoRetornoSumar es ahora number, porque sumar devuelve un number


// type from function parameters: Si querés extraer el tipo de los parámetros de una función, usás Parameters:
type TipoParametrosSumar = Parameters<typeof sumar>; // TipoParametrosSumar es ahora [number, number], un tuple con los tipos de los parámetros de sumar        

// type from function parameters + return type: Si querés extraer tanto los parámetros como el retorno, podés combinarlos:
type TipoCompletoSumar = {
    parametros: Parameters<typeof sumar>; // [number, number]
    retorno: ReturnType<typeof sumar>;   // number
};  

const lenguajes: string[] = ["JavaScript", "TypeScript", "Python"];
type TipoLenguajes = typeof lenguajes; // TipoLenguajes es ahora string[] (un array de strings)

//hacer arrays de muchos tipos a la vez con type of + union types:
const cosas: (string | number | boolean)[] = ["Hola", 42, true];
type TipoCosas = typeof cosas; // TipoCosas es ahora (string | number | boolean)[]        

//enums: Si tenés un enum y querés extraer su tipo, también podés usar type of:
enum DiasSemana {// si pongo const enum, el valor de cada día sería un string en vez de un número, pero con enum normal, cada día es un número empezando desde 0 y no se compila a un objeto real, sino que se reemplaza directamente por su valor numérico en el código compilado.
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}
var diaSemana: DiasSemana = DiasSemana.Lunes;
//ejemplo de enum
if (DiasSemana.Lunes == diaSemana) {
    
}

function verificarDia(dia: DiasSemana): number {
    if (dia === DiasSemana.Lunes) {
        return 1;
    } else if (dia === DiasSemana.Martes) {
        return 2;
    } else {
        return 0; // Otros días
    }
}

//aserciones de tipo: A veces, TypeScript no puede inferir el tipo de una variable o expresión, y te da un error. En esos casos, podés usar una aserción de tipo para decirle a TypeScript "Confía en mí, esto es de este tipo". Se hace con la sintaxis "as Tipo":
let valorDesconocido: any = "Esto es un string, pero TS no lo sabe";
let longitud: number = (valorDesconocido as string).length; // Le decimos a TS que trate valorDesconocido como un string, así podemos acceder a la propiedad length sin error.
//asercion para getElementById: Si estás usando document.getElementById y sabes que el elemento existe, podés hacer una aserción para evitar el error de que puede ser null:
const miElemento = document.getElementById("miElemento") as HTMLElement; // Ahora TS trata a miElemento como un HTMLElement, no como HTMLElement | null
//se puede hacer aserción con canvas también:
const miCanvas = document.getElementById("miCanvas") as HTMLCanvasElement; // Ahora TS trata a miCanvas como un HTMLCanvasElement, no como HTMLElement | null
// el as se hace despues de sacar el elemento y verificarlo y se usa getcontext para verificar que el canvas se pudo sacar correctamente:
const miCanvas2 = document.getElementById("miCanvas2");

if ( miCanvas instanceof HTMLCanvasElement ) {
    const contexto = miCanvas.getContext("2d");
}
/*instanceof hace una verificación en tiempo de ejecución para asegurarse de que miCanvas es realmente un HTMLCanvasElement antes de intentar usarlo como tal. Esto es importante porque getElementById puede devolver null si no encuentra el elemento, y también podría devolver un tipo de elemento diferente al que esperas. Al usar instanceof, te aseguras de que estás trabajando con el tipo correcto antes de hacer la aserción con "as". 
*/
//ejemplo de aserción con funciones:
function obtenerValor(): any {
    return "Este es un string, pero TS no lo sabe";
}

// typeof es para tipos de datos bases
// instanceof es para tipos de datos complejos (clases, objetos, arrays, etc) y se usa en tiempo de ejecución para verificar que una variable es una instancia de una clase o tipo específico antes de hacer una aserción con "as". Es como un guardia de seguridad que chequea tu identidad antes de dejarte entrar a la fiesta del tipo que querés usar.

//asercion de fecthing: Si estás haciendo una petición fetch y sabes que la respuesta va a tener un formato específico, podés usar aserciones para decirle a TS qué tipo de datos esperar:
fetch("https://api.example.com/curso")
    .then(response => response.json())
    .then(data => {console.log((data as { nombre: string; duracion: number }).nombre); // Le decimos a TS que data es un objeto con nombre y duracion
    console.log((data as { nombre: string; duracion: number }).duracion); // Le decimos a TS que data es un objeto con nombre y duracion
})
    .catch(error => console.error("Error al obtener el curso:", error));

    // para usar await es ts se pone .mts al final del archivo y se puede usar aserciones también:
const data= await fetch("https://api.chucknorris.io/jokes/random");
// se le debe poner el tipo de dato que se espera recibir, en este caso un objeto con una propiedad "value" que es un string, porque la API de chistes de Chuck Norris devuelve un JSON con esa estructura.

const jsonData = await data.json() as { value: string };// no se hace as a mano, sino que se usa una app de generación de tipos a partir de JSON, como quicktype.io, que te da el tipo exacto para esa respuesta específica. Esto es súper útil para no tener que escribir a mano tipos gigantescos para respuestas de APIs complejas.
// tenemos tipescript zod que es una librería de validación de datos que también puede generar tipos a partir de esquemas, lo que es muy útil para validar respuestas de APIs y asegurarse de que cumplen con la estructura esperada antes de usarlas en el código.
const repos=data;

// que hace .map() en ts? Es un método de los arrays que te permite transformar cada elemento del array original en algo nuevo, creando un nuevo array con los resultados. Es como una máquina de transformación: le das un array y una función que dice cómo transformar cada elemento, y te devuelve un nuevo array con los elementos transformados. Por ejemplo:
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(num => num * num); // cuadrados será [1, 4, 9, 16, 25]
// atmbien se puede usar con objetos:
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];
const nombres = personas.map(persona => persona.nombre); // nombres será ["Juan", "María", "Pedro"]
//y poner funciones más complejas dentro del map:
const personasMayoresDe25 = personas.map(persona => {
    if (persona.edad > 25) { return persona.nombre; } else { return null; }
}).filter(nombre => nombre !== null); // personasMayoresDe25 será ["María"] porque solo María tiene más de 25 años


//hay que hacer validaciones en tiempo de compilación, no en tiempo de ejecución, para evitar errores en producción. 
// TypeScript es una herramienta que te ayuda a hacer esas validaciones antes de que el código corra, así que es importante 
// aprovecharla al máximo y no dejar pasar errores que podrían ser evitados con un buen tipado. 
// Por ejemplo, si tenés una función que espera un número pero le pasás un string, TypeScript te va a 
// tirar un error en el editor, lo que te da la oportunidad de corregirlo antes de que el código se ejecute y cause un bug en producción.


// validaciones en tiempo de compilación vs tiempo de ejecución: Es importante entender la diferencia entre ambos tipos de validaciones. 
// Las validaciones en tiempo de compilación son las que hace TypeScript mientras escribís el código, y te ayudan a detectar errores antes de que el código corra. 
// Las validaciones en tiempo de ejecución son las que hace JavaScript mientras el código está corriendo, y son necesarias para manejar situaciones impredecibles como 
// errores de red, datos mal formateados, etc. Lo ideal es usar TypeScript para hacer todas las validaciones posibles en tiempo de compilación, y reservar las validaciones en tiempo de ejecución 
// para casos que no se pueden prever con el tipado estático.


//hay interfaces y clases y es lo mismo que en Java, C#, etc. 
// Las interfaces son como contratos que definen la forma de un objeto, 
// pero no tienen implementación. Las clases son plantillas para crear objetos
//  con propiedades y métodos, y pueden implementar interfaces para asegurarse 
// de cumplir con ese contrato. En TypeScript, las interfaces son muy útiles 
// para definir la estructura de datos que esperás recibir o enviar, 
// mientras que las clases son útiles para crear objetos con comportamiento 
// específico. y no se compilan


//narrowing: Es el proceso de reducir el tipo de una variable a un tipo
//  más específico dentro de un bloque de código, usando técnicas como typeof, 
// instanceof, o comprobaciones de propiedades. Esto es útil para que 
// TypeScript pueda inferir el tipo correcto y darte acceso a las propiedades
//  y métodos específicos de ese tipo sin errores. Por ejemplo:
function procesarValor(valor: string | number) {
    if (typeof valor === "string") {return valor.toUpperCase(); // TS sabe que valor es un string aquí
    } else {return valor * 2; // TS sabe que valor es un number aquí
    }}

//type guards personalizados: Además de los operadores typeof e instanceof, 
// también podés crear tus propios type guards personalizados para tipos más 
// complejos. Esto se hace creando una función que devuelve un booleano y 
// tiene una firma especial que le dice a TypeScript qué tipo es verdadero 
// cuando la función devuelve true. Por ejemplo:
type Circulo = { radio: number };
type Cuadrado = { lado: number };
function esCirculo(forma: Circulo | Cuadrado): forma is Circulo {
    return (forma as Circulo).radio !== undefined; // Si tiene la propiedad 'radio', es un Circulo
}
//se suele evitar los type guards personalizados porque pueden ser difíciles 
// de mantener y entender, y a menudo se pueden resolver con un buen diseño de
//  tipos usando discriminated unions o clases con métodos específicos. 
// Sin embargo, en algunos casos pueden ser útiles para manejar tipos complejos 
// que no encajan bien con las otras técnicas de narrowing.

//type never: Es un tipo especial que representa un valor que nunca ocurre.
//  Se usa principalmente para indicar que una función no devuelve nada (void)
//  o que un bloque de código es inalcanzable. Por ejemplo:
function lanzarError(mensaje: string): never {
    throw new Error(mensaje); // Esta función nunca devuelve un valor, solo lanza un error
}

class persona {
    constructor(public nombre: string, public edad: number) {} 
set setNombre(nombre: string) {
    this.nombre = nombre;}
get getNombre(): string {
    return this.nombre;}
}

// # y private: En TypeScript, el símbolo # se usa para declarar campos privados en una clase, lo que significa que solo pueden ser accedidos desde dentro de la clase.
// El modificador private también se usa para declarar campos privados, pero es una convención de TypeScript que no impide el acceso desde fuera de la clase, aunque sí genera un error en tiempo de compilación si intentás acceder a esos campos desde fuera. 
// En cambio, los campos declarados con # son realmente privados y no pueden ser accedidos ni siquiera con aserciones de tipo o técnicas de hacking. Por ejemplo:

//protected: El modificador protected es similar a private, pero permite que 
// los campos o métodos sean accedidos desde clases derivadas (subclases). 
// Es decir, si una clase A tiene un campo protegido, la clase B que extienda 
// de A podrá acceder a ese campo, pero otras clases que no estén en la 
// jerarquía de herencia no podrán acceder a él. Esto es útil para permitir 
// cierta flexibilidad en la herencia sin exponer completamente los detalles 
// internos de la clase base. Por ejemplo:

//implementar interfaces: En TypeScript, las clases pueden implementar interfaces para asegurarse de que cumplen con un contrato específico. Esto es útil para garantizar que una clase tenga ciertas propiedades o métodos sin importar su jerarquía de herencia. Por ejemplo:
/*interface Saludo {
    saludar(): string;
}       

class Persona implements Saludo {
    constructor(public nombre: string) {}*/

//.d.ts: Los archivos con extensión .d.ts son archivos de declaración de tipos
//  en TypeScript. Estos archivos se utilizan para proporcionar información de 
// tipo a TypeScript sobre bibliotecas o módulos que no están escritos en 
// TypeScript, como bibliotecas de JavaScript puro. En un archivo .d.ts, 
// se pueden declarar funciones, clases, interfaces, etc., sin proporcionar 
// una implementación real, solo la firma y el tipo de los elementos. 
// Esto permite que TypeScript pueda hacer validaciones de tipo y 
// autocompletado cuando se usan esas bibliotecas en un proyecto TypeScript. 
// Por ejemplo, si estás usando una biblioteca de JavaScript llamada 
// "miBiblioteca", podrías tener un archivo "miBiblioteca.d.ts" que declare 
// las funciones y clases que esa biblioteca expone, para que puedas usarla 
// sin problemas en tu código TypeScript.