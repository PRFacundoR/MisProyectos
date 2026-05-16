
/*let scanfConsoleReadLine= prompt("Ingresa dato");

alert('Funcion que actua como print o ConsoleWriteLine '+ scanfConsoleReadLine);

document.writeln(scanfConsoleReadLine);*/

/* usar .concat para unir cadenas en vez de +  se puede unir numero con cadena tamnein si uso ""+numero+numero conviertop topod en string tambien se puede hacer con el acento fueto para hacer ${var}*/


/*let monto=parseInt(prompt("Ingresa monto"));

let helado1=1000;
let helado2=1400;
let helado3=1500;


if (monto>helado1) {
    document.writeln("helados para todo y vuelto "+ (monto-helado1));
}
    
palabra reservasda continue, te salta iterando
*/

/*
let arreglo=["manzana","pera", "caca"];


for (let i = 0; i < arreglo.length; i++) {
    document.writeln( arreglo[i]);
    
}
document.writeln("<br>");  
let arrayAsociativo={
    facu:"nombre",
    peralta:"ape",
    numero: "21"

}

document.writeln("<br>");
document.writeln("<br>"+ arrayAsociativo.facu);


for (const fruta in arreglo) {//muestra nombre de propiedad en clases y posicion en arreglos y dentro de loas arreglos puedo guardar arrglos
    // podemos nombrar for con "fornombre:" asi si hacemos break fornombre y ese break esta en el for de mas adentro, se termina todo seria sentencia label
    document.writeln("<br> posiciones "+ fruta);
    
    document.writeln("<br> objeto "+ arreglo[fruta]);
    
    
}

document.writeln("<br>");

for (const fruta of arreglo) {
    document.writeln("<br>"+ fruta);
    
}*/


//funciones


// function saludar(){

//     let ni=prompt("Ñ");
//     return ni;

// }
// /*funcion flecha */
// const suma=(num1,num2)=>{
// document.writeln(num1+num2);
// }


// document.writeln(saludar());
// suma(1,2);


// let fiestaInicio=0;
// let fiestafin=5;


// while (fiestafin>0) {

//     let edad=parseInt(prompt("Cual es su edad?"));
//     if (fiestafin<=3 && edad>=18) {
//             alert("Entro a la fiesta, no paga");
//     }
//     if (edad>=18 && fiestafin>=3) {
//         alert("Entro a la fiesta, paga");
        

//     } else {
//         alert("Eres menor no entras");
        
//     }
    
// fiestafin-=0.5

// }
/*
let datosAlumno=[0,0];

let alumnos=[];
let dias=3;
let j=1;
while (dias>0) {

    alert("dia "+j);
    for (let i = 0; i < 2; i++) {
        alert("alumno "+i);
        let estado=prompt("Ingrese su estado");
        if (estado=="P" || estado=="p") {
            datosAlumno[1]+=1;
        }else{
            datosAlumno[0]+=1;
        }
        
        alumnos[i]=datosAlumno;

    }

    dias--;
    j++;

}



for (let i = 0; i < 2; i++) {
    document.writeln("Alumno "+(i+1)+" faltas: "+alumnos[i][0]+ " asistencias "+alumnos[i][1]);
    
}


linkedList*/


// POO


class auto {//similara  a c++ o c#, en metodos igual, se usa el new. se puede crear metodos estaticos para cuando queremos usar un metodo que no necesite objetos de la clase osea usarlo como funcion
    ruedas;
    motor;
    velocidad;
    constructor(ruedas, motor, velocidad) {
        this 
    }

    //get y set metodos que son propiedades
    set setNombre(name){
        this.motor=name;
    }

    get getMotor() {
        return this.motor
    }
}

//ahpra el tema de herncia cambia, las clases se definen con const

class tanque extends auto{
    constructor(ruedas, motor, velocidad,canion){
        super(2,"v21",60)//asi se hereda
    }
}

let nombre=prompt().toUpperCase().trim();
alert(nombre);

/**
 * ==========================================
 * MÉTODOS DE CADENAS (STRINGS) EN JAVASCRIPT
 * ==========================================
 * * - concat(str1, str2, ...): Junta dos o más cadenas y retorna una nueva.
 * Ej: "Hola ".concat("Mundo") // "Hola Mundo"
 * 
 * * - startsWith(searchString, position?): Devuelve true si la cadena comienza con los caracteres indicados.
 * Ej: "Javascript".startsWith("Java") // true
 * 
 * * - endsWith(searchString, length?): Devuelve true si la cadena termina con los caracteres indicados.
 * Ej: "Archivo.txt".endsWith(".txt") // true
 * 
 * * - includes(searchString, position?): Devuelve true si la cadena contiene los caracteres indicados.
 * Ej: "Hola Mundo".includes("Mundo") // true
 * 
 * * - indexOf(searchValue, fromIndex?): Devuelve el índice de la primera aparición del valor. Si no existe, devuelve -1.
 * Ej: "Facundo".indexOf("c") // 2
 * 
 * * - lastIndexOf(searchValue, fromIndex?): Devuelve el índice de la última aparición del valor. Si no existe, devuelve -1.
 * Ej: "banana".lastIndexOf("a") // 5
 * 
 * * - padStart(targetLength, padString?): Rellena la cadena al principio hasta alcanzar la longitud deseada.
 * Ej: "5".padStart(3, "0") // "005"
 * 
 * * - padEnd(targetLength, padString?): Rellena la cadena al final hasta alcanzar la longitud deseada.
 * Ej: "5".padEnd(3, "0") // "500"
 * 
 * * - repeat(count): Devuelve una nueva cadena que repite la original la cantidad de veces indicada.
 * Ej: "Ja".repeat(3) // "JaJaJa"
 * 
 * * - split(separator, limit?): Divide la cadena en un arreglo (array) según el separador que le pasemos.
 * Ej: "a,b,c".split(",") // ["a", "b", "c"]
 * 
 * * - substring(indexStart, indexEnd?): Retorna una porción de la cadena entre los índices indicados (el end no es inclusivo).
 * Ej: "Desarrollo".substring(0, 5) // "Desar"
 * 
 * * - toLowerCase(): Convierte toda la cadena a minúsculas.
 * Ej: "HOLA".toLowerCase() // "hola"
 * 
 * * - toUpperCase(): Convierte toda la cadena a mayúsculas.
 * Ej: "hola".toUpperCase() // "HOLA"
 * 
 * * - toString(): Devuelve una cadena que representa al objeto especificado.
 * Ej: let num = 123; num.toString() // "123"
 * 
 * * - trim(): Elimina los espacios en blanco al principio y al final de la cadena.
 * Ej: "   hola   ".trim() // "hola"
 * 
 * * - trimEnd(): Elimina los espacios en blanco al final de la cadena.
 * Ej: "hola   ".trimEnd() // "hola"
 * 
 * * - trimStart(): Elimina los espacios en blanco al comienzo de la cadena.
 * Ej: "   hola".trimStart() // "hola"
 * 
 * * - valueOf(): Retorna el valor primitivo de un objeto String.
 * Ej: let strObj = new String("texto"); strObj.valueOf() // "texto"
 * 
 * 
 * 
 * 
 * * ==========================================
 * MÉTODOS DE ARREGLOS (ARRAYS)
 * ==========================================
 * * --- Transformadores (Modifican el array original) ---
 *
 * * - pop(): Elimina el último elemento del array y lo devuelve.
 * Ej: let arr = [1, 2, 3]; arr.pop(); // Devuelve 3, el array queda [1, 2]
 * 
 * * - shift(): Elimina el primer elemento del array y lo devuelve.
 * Ej: let arr = [1, 2, 3]; arr.shift(); // Devuelve 1, el array queda [2, 3]
 * 
 * * - push(elemento1, ..., elementoN): Agrega uno o más elementos al final del array y devuelve la nueva longitud.
 * Ej: let arr = [1]; arr.push(2, 3); // Devuelve 3, el array queda [1, 2, 3]
 * 
 * * - reverse(): Invierte el orden de los elementos del array.
 * Ej: let arr = [1, 2, 3]; arr.reverse(); // El array queda [3, 2, 1]
 * 
 * * - unshift(elemento1, ..., elementoN): Agrega uno o más elementos al inicio del array y devuelve la nueva longitud.
 * Ej: let arr = [3]; arr.unshift(1, 2); // Devuelve 3, el array queda [1, 2, 3]
 * 
 * * - sort(compareFunction?): Ordena los elementos localmente y devuelve el array ordenado con numeros o palabras.
 * Ej: let arr = [3, 1, 2]; arr.sort(); // El array queda [1, 2, 3]
 * 
 * * - splice(start, deleteCount?, item1?, item2?, ...): Cambia el contenido del array eliminando, reemplazando o agregando elementos.
 * Ej: let arr = ["a", "b", "c"]; arr.splice(1, 1, "x"); // Elimina 1 elemento en el índice 1 ("b") y agrega "x". Queda ["a", "x", "c"]
 * 
 * 
 * * --- Accesores (No modifican el original, devuelven algo nuevo) ---
 * 
 * * - join(separator?): Une todos los elementos del array en un string, separados por lo que le indiques (por defecto es una coma).
 * Ej: [1, 2, 3].join("-") // "1-2-3"
 * 
 * * - slice(start?, end?): Devuelve una copia de una parte del array dentro de un nuevo array (el end no es inclusivo).
 * Ej: [1, 2, 3, 4].slice(1, 3) // [2, 3]
 * 
 * * (Nota: toString(), indexOf(), y lastIndexOf() se pueden usar en arrays y funcionan igual que en las cadenas).
 *   let frutas = ["manzana", "banana", "naranja", "banana"];

    console.log(frutas.indexOf("naranja")); // Devuelve 2
    console.log(frutas.indexOf("uva"));     // Devuelve -1 (porque no existe)

    let frutas = ["manzana", "banana", "naranja", "banana"];

    console.log(frutas.lastIndexOf("banana")); // Devuelve 3 (la posición de la segunda "banana")
 * 
    let numeros = [10, 20, 30];

    console.log(numeros.toString()); // Devuelve el texto "10,20,30"
 * 
 * 
 * 
 * * --- De Repetición ---
 * 
 * * - filter(callbackFn): Crea un nuevo array con todos los elementos que pasen la condición implementada en la función.
 * Ej: [1, 2, 3, 4].filter(num => num > 2) // [3, 4]
 * 
 * * - forEach(callbackFn): Ejecuta la función indicada una vez por cada elemento del array.
 * Ej: ["a", "b"].forEach(letra => console.log(letra)); // Imprime "a" y luego "b" en la consola
 * 
 * 
 * 
 * 
 * 
 * * ==========================================
 * OBJETO MATH: MÉTODOS Y PROPIEDADES
 * ==========================================
 * * Nota: Se usan directamente como Math.propiedad o Math.metodo().
 *
 * --- MÉTODOS ---
 * * - Math.sqrt(x): Devuelve la raíz cuadrada positiva de un número.
 * Ej: Math.sqrt(25) // 5
 * 
 * * - Math.cbrt(x): Devuelve la raíz cúbica de un número.
 * Ej: Math.cbrt(27) // 3
 * 
 * * - Math.max(n1, n2, ...): Devuelve el mayor de cero o más números.
 * Ej: Math.max(10, 50, 20) // 50
 * 
 * * - Math.min(n1, n2, ...): Devuelve el más pequeño de cero o más números.
 * Ej: Math.min(10, 50, 20) // 10
 * 
 * * - Math.random(): Devuelve un número pseudo-aleatorio entre 0 (inclusivo) y 1 (exclusivo).
 * Ej: Math.random() // 0.748293... (Si querés uno del 1 al 10 hacés: Math.random() * 10)
 * 
 * * - Math.round(x): Devuelve el número redondeado al entero más cercano (0.5 redondea para arriba).
 * Ej: Math.round(4.6) // 5  |  Math.round(4.4) // 4
 * 
 * * - Math.fround(x): Devuelve la representación flotante de precisión simple (32 bits) más cercana.
 * Ej: Math.fround(1.5) // 1.5
 * 
 * * - Math.floor(x): Devuelve el mayor entero menor o igual a un número (siempre redondea para abajo).
 * Ej: Math.floor(4.9) // 4  |  Math.floor(-4.1) // -5
 * 
 * * - Math.trunc(x): Devuelve la parte entera del número, simplemente corta/elimina los decimales.
 * Ej: Math.trunc(4.9) // 4  |  Math.trunc(-4.9) // -4
 * 
 * 
 *
 * --- PROPIEDADES (CONSTANTES) ---
 * 
 * * - Math.PI: Ratio de la circunferencia respecto al diámetro (~3.14159).
 * Ej: Math.PI // 3.141592653589793
 * 
 * * - Math.SQRT1_2: Raíz cuadrada de 1/2 (~0.707).
 * Ej: Math.SQRT1_2 // 0.7071067811865476
 * 
 * * - Math.SQRT2: Raíz cuadrada de 2 (~1.414).
 * Ej: Math.SQRT2 // 1.4142135623730951
 * 
 * * - Math.E: Constante de Euler, base de los logaritmos naturales (~2.718).
 * Ej: Math.E // 2.718281828459045
 * 
 * * - Math.LN2: Logaritmo natural de 2 (~0.693).
 * Ej: Math.LN2 // 0.6931471805599453
 * 
 * * - Math.LN10: Logaritmo natural de 10 (~2.303).
 * Ej: Math.LN10 // 2.302585092994046
 * 
 * * - Math.LOG2E: Logaritmo de E con base 2 (~1.442).
 * Ej: Math.LOG2E // 1.4426950408889634
 * 
 * * - Math.LOG10E: Logaritmo de E con base 10 (~0.434).
 * Ej: Math.LOG10E // 0.4342944819032518
 */ 
 
/**
 * ==========================================
 * MÉTODOS DE CONSOLA (CONSOLE)
 * ==========================================
 * * Nota: Se usan llamando al objeto global console.
 *
 * --- Funciones de Registro ---
 * 
 * * - console.assert(condition, message): Imprime un error solo si la condición es falsa.
 * Ej: console.assert(1 === 2, "La matemática falló"); // Muestra el error
 * 
 * * - console.clear(): Limpia la consola por completo.
 * Ej: console.clear();
 * 
 * * - console.error(message): Muestra un mensaje de error (generalmente en rojo).
 * Ej: console.error("No se pudo conectar a la base de datos");
 * 
 * * - console.info(message): Emite un mensaje informativo (en algunos navegadores pone un ícono 'i').
 * Ej: console.info("Proceso de carga iniciado");
 * 
 * * - console.log(message): Muestra un mensaje estándar. 
 * Ej: console.log("Hola mundo");
 * 
 * * - console.table(data, columns?): Muestra arrays u objetos en un formato de tabla muy cómodo de leer.
 * Ej: console.table(["Manzana", "Pera", "Uva"]); // Muestra una tabla con (index) y (Value)
 * 
 * * - console.warn(message): Imprime una advertencia (generalmente en amarillo).
 * Ej: console.warn("Estás usando una función obsoleta");
 * 
 * * - console.dir(object): Despliega una lista interactiva de las propiedades de un objeto específico.
 * Ej: console.dir(document.body);
 *
 * 
 * 
 * --- Funciones de Conteo ---
 * 
 * * - console.count(label?): Registra cuántas veces se llamó a esta línea con una etiqueta específica.
 * Ej: console.count("Ciclo"); // Imprime: Ciclo: 1, luego Ciclo: 2, etc.
 * 
 * * - console.countReset(label?): Resetea a cero el contador de esa etiqueta.
 * Ej: console.countReset("Ciclo");
 *
 * 
 * 
 * --- Funciones de Agrupación ---
 * 
 * * - console.group(label?): Crea un grupo visual (indenta hacia la derecha los logs que le siguen).
 * Ej: console.group("Datos del Usuario");
 * 
 * * - console.groupEnd(): Cierra el grupo actual, volviendo a la indentación normal.
 * Ej: console.groupEnd();
 * 
 * * - console.groupCollapsed(label?): Igual que group(), pero aparece cerrado por defecto (hay que hacer clic para expandirlo).
 * Ej: console.groupCollapsed("Detalles técnicos");
 *
 * 
 * 
 * --- Funciones de Temporización ---
 * 
 * * - console.time(label): Inicia un cronómetro interno asociado a una etiqueta.
 * Ej: console.time("PeticionAPI");
 * 
 * * - console.timeLog(label): Imprime el tiempo transcurrido desde el inicio, pero NO detiene el cronómetro.
 * Ej: console.timeLog("PeticionAPI"); // Ej: "PeticionAPI: 12ms"
 * 
 * * - console.timeEnd(label): Detiene el cronómetro y muestra el tiempo final.
 * Ej: console.timeEnd("PeticionAPI"); // Ej: "PeticionAPI: 25ms - timer ended"
 */

/**
 * ==========================================
 * DOCUMENT OBJETO: SELECCIÓN DE ELEMENTOS Y ATRIBUTOS
 * ==========================================
 * * Nota: Para los selectores, se usa el objeto global 'document'. 
 * * Para los atributos, se usan sobre el elemento HTML ya seleccionado.
 *
 * --- MÉTODOS DE SELECCIÓN DE ELEMENTOS ---
 * 
 * * - document.getElementById(id): Selecciona un único elemento por su atributo ID.
 * Ej: let boton = document.getElementById("btnEnviar");
 * 
 * * * - document.getElementsByTagName(name): Selecciona TODOS los elementos que coincidan con la etiqueta HTML (devuelve una colección) y accedemos con indice [i].
 * Ej: let parrafos = document.getElementsByTagName("p");
 * 
 * * * - document.querySelector(selector): Devuelve el PRIMER elemento que coincida con el selector CSS especificado (.clase, #id, etiqueta).
 * Ej: let primerDestacado = document.querySelector(".texto-destacado"); // Busca por clase
 * 
 * * * - document.querySelectorAll(selector): Devuelve TODOS los elementos que coincidan con el selector CSS (devuelve un NodeList) y accedemos con indice [i].
 * Ej: let todosLosDestacados = document.querySelectorAll("div.caja"); // Busca divs con clase caja
 *
 * 
 * --- MÉTODOS PARA ATRIBUTOS (Sobre un elemento) ---
 * atributos son las como typr, src
 * 
 * osea primero debo traer el elemento del dom y luego modificamos su atributos
 *  
 * * Supongamos que tenemos: let input = document.getElementById("miInput");
 * * * - element.setAttribute(name, value): Modifica el valor de un atributo (si no existe, lo crea).
 * Ej: input.setAttribute("type", "password"); // Cambia un input de texto a contraseña
 * 
 * * * - element.getAttribute(name): Obtiene el valor actual de un atributo.
 * Ej: let tipoActual = input.getAttribute("type"); // Devuelve "password"
 * 
 * * * - element.removeAttribute(name): Elimina el atributo especificado del elemento.
 * Ej: input.removeAttribute("disabled"); // Vuelve a habilitar el input
 */

let p1=document.getElementById("parrafo1");
let p2=document.getElementById("parrafo2");

/**
 * ==========================================
 * ATRIBUTOS GLOBALES (HTML/DOM)
 * ==========================================
 * * Nota: Son atributos que se le pueden poner a casi cualquier etiqueta HTML. 
 * * En JS, podés acceder a ellos y modificarlos como propiedades directas del elemento.
 *
 * 
 * 
 * * - class: Lista de clases del elemento separadas por espacios.
 * Ej JS: elemento.className = "caja roja"; // (Aunque hoy en día se prefiere usar elemento.classList)
 * 
 * * - contenteditable: Indica si el usuario puede escribir/modificar el elemento directamente en la pantalla.
 * Ej JS: elemento.contentEditable = "true"; // Convierte un div normal en un mini editor de texto
 * 
 * * - dir: Indica la direccionalidad del texto (ltr = izquierda a derecha, rtl = derecha a izquierda).
 * Ej JS: elemento.dir = "rtl"; 
 * 
 * 
 * * - hidden: Indica si el elemento es relevante. Si está, el navegador lo oculta por completo.
 * Ej JS: elemento.hidden = true; // Lo hace desaparecer de la pantalla
 * 
 * * - id: Define el identificador único (DNI) del elemento.
 * Ej JS: elemento.id = "nuevoIdentificador";
 * 
 * * - style: Contiene las declaraciones de estilo CSS aplicadas directamente a ese elemento.
 * Ej JS: elemento.style.color = "blue"; // (Ver sección de Camel Case abajo)
 * 
 * * - tabindex: Indica si el elemento puede recibir el foco (por ejemplo, navegando con la tecla Tab).
 * Ej JS: elemento.tabIndex = 1; // Le da prioridad 1 al navegar con Tab
 * 
 * * - title: Contiene el texto de información (tooltip) que aparece cuando dejás el mouse quieto sobre el elemento.
 * Ej JS: elemento.title = "Hacé clic acá para guardar";
 *
 * 
 * 
 * ==========================================
 * ATRIBUTO STYLE Y LA REGLA DEL "CAMEL CASE"
 * ==========================================
 * * En CSS normal, las propiedades que tienen más de una palabra se separan con un guion medio (kebab-case).
 * * Pero en JavaScript, los guiones medios se usan para restar (matemática), así que daría error.
 * * * * SOLUCIÓN: En JS, para modificar el CSS se elimina el guion y la siguiente palabra empieza con MAYÚSCULA (camelCase).
 * * * Ejemplos de traducción CSS -> JavaScript:
 * * * CSS: background-color: red;
 * * JS : elemento.style.backgroundColor = "red";
 * * * CSS: font-size: 20px;
 * * JS : elemento.style.fontSize = "20px";
 * * * CSS: margin-top: 15px;
 * * JS : elemento.style.marginTop = "15px";
 * * * CSS: border-radius: 5px;
 * * JS : elemento.style.borderRadius = "5px";
 */

/**
 * ==========================================
 * ATRIBUTOS DE INPUTS (Elementos <input>)
 * ==========================================
 * * Nota: Se aplican a los campos de formulario. 
 * * Supongamos que ya lo seleccionaste: let input = document.getElementById("miInput");
 *
 * * - className: Obtiene o establece el valor del atributo 'class' de HTML.
 * Ej JS: input.className = "form-control de-error"; 
 * 
 * * - value: Obtiene o establece el valor actual (el texto o dato) que tiene adentro el input.
 * Ej JS: let textoEscrito = input.value; // Para leer lo que tipeó el usuario
 * Ej JS: input.value = "Texto por defecto"; // Para rellenarle el campo
 * 
 * * - type: Obtiene o establece el tipo de input (text, password, email, number, file, etc.).
 * Ej JS: input.type = "password"; // Transforma el texto en puntitos ocultos
 * 
 * * - accept: Se usa exclusivamente cuando type="file". Limita qué archivos se pueden seleccionar.
 * Ej JS: input.accept = "image/png, image/jpeg"; // El cuadro de diálogo solo mostrará imágenes
 * 
 * * - form: Devuelve el elemento <form> "padre" al que pertenece este input (es de solo lectura).
 * Ej JS: let miFormulario = input.form; // Te da acceso al formulario completo
 * 
 * * - minLength: Establece la longitud mínima de caracteres permitidos (ojo a la 'L' mayúscula en JS).
 * Ej JS: input.minLength = 8; // Ideal para obligar a que una contraseña tenga 8 caracteres
 * 
 * * - placeholder: Establece el texto de pista/ayuda gris que aparece de fondo cuando el input está vacío.
 * Ej JS: input.placeholder = "Ingresá tu correo electrónico...";
 * 
 * * - required: Un booleano (true/false) que indica si el campo es obligatorio.
 * Ej JS: input.required = true; // El navegador no dejará enviar el formulario si esto está vacío
 */






/**
 * 
 * ==========================================
 * PROPIEDAD CLASSLIST Y SUS MÉTODOS
 * ==========================================
 * * Nota: Se usan sobre un elemento HTML seleccionado. 
 * * Ej: let caja = document.getElementById("miCaja");
 *
 * * - classList.add(clase1, clase2, ...): Añade una o más clases al elemento.
 * Ej: caja.classList.add("activa", "resaltado");
 * 
 * * - classList.remove(clase1, clase2, ...): Remueve una o más clases del elemento.
 * Ej: caja.classList.remove("oculto");
 * 
 * * - classList.item(index): Devuelve la clase que se encuentra en el índice especificado (empieza en 0).
 * Ej: caja.classList.item(0); // Devuelve el nombre de la primera clase que tenga
 * 
 * * - classList.contains(clase): Verifica si el elemento posee la clase especificada (devuelve true o false).
 * Ej: caja.classList.contains("activa"); // true o false
 * 
 * * - classList.replace(claseVieja, claseNueva): Reemplaza una clase existente por una nueva.
 * Ej: caja.classList.replace("tema-claro", "tema-oscuro");
 * 
 * * - classList.toggle(clase): Es un interruptor. Si el elemento NO tiene la clase, se la agrega. Si YA la tiene, se la saca.
 * Ej: caja.classList.toggle("expandido"); // Ideal para menús desplegables
 *
 * 
 * ==========================================
 * OBTENCIÓN Y MODIFICACIÓN DE ELEMENTOS
 * ==========================================
 * 
 * 
 * * - textContent: Devuelve (o establece) todo el texto contenido dentro de un nodo y sus descendientes. IGNORA las etiquetas HTML, solo ve el texto plano.
 * Ej Lectura: let texto = caja.textContent;
 * Ej Escritura: caja.textContent = "Hola <b>Mundo</b>"; // Se va a ver literalmente la etiqueta <b> en pantalla, no renderiza HTML.
 * 
 * * - innerText: Similar a textContent, pero solo devuelve el texto "visible" (por ejemplo, ignora el texto de elementos que tienen display: none en CSS).
 * Ej: let textoVisible = caja.innerText;
 * 
 * * - outerText: Similar a innerText al leer. Al escribir, reemplaza TODO el elemento HTML (incluyendo sus propias etiquetas) por el texto proporcionado.
 * Ej: caja.outerText = "Chau caja"; // El <div> original desaparece y queda solo el texto flotando.
 * 
 * * - innerHTML: Devuelve (o establece) la sintaxis HTML interna del elemento. ¡Acá sí se renderizan las etiquetas!
 * Ej Lectura: let codigoInterno = caja.innerHTML;
 * Ej Escritura: caja.innerHTML = "Hola <strong>Mundo</strong>"; // La palabra Mundo se va a ver en negrita.
 * 
 * * - outerHTML: Devuelve (o establece) el código HTML completo del elemento, incluyéndose a sí mismo y a todo lo que tiene adentro.
 * Ej Lectura: console.log(caja.outerHTML); // Imprime algo como "<div id='miCaja'>...</div>"
 */






/**
 * ==========================================
 * CREACIÓN DE ELEMENTOS Y NODOS EN EL DOM
 * ==========================================
 * * Nota: Esta es la forma más segura, limpia y profesional de agregar 
 * * contenido nuevo a la página (se recomienda más que andar inyectando 
 * * texto con innerHTML).
 *
 * 
 * 
 * * - document.createElement(tagName): Crea un nuevo elemento HTML en la memoria.
 * 
 * * ¡Importante!: Al crearlo, todavía NO está en la pantalla, solo existe en tu código JS.
 * Ej: let nuevoParrafo = document.createElement("p");
 * * * - nodoPadre.appendChild(nodoHijo): Agrega un nodo como el ÚLTIMO hijo de un elemento padre.
 * * Acá es cuando finalmente "insertamos" el elemento para que el usuario lo vea.
 * Ej: 
 * // 1. Creamos el elemento y le ponemos texto
 * let nuevoItem = document.createElement("li");
 * nuevoItem.textContent = "Aprender JS";
 * // 2. Seleccionamos un elemento padre (ej. un <ul>) y le enchufamos el hijo
 * let lista = document.getElementById("miLista");
 * lista.appendChild(nuevoItem); 
 *
 * 
 * 
 * * - document.createDocumentFragment(): Crea un "fragmento" de documento invisible.
 * * ¿Para qué sirve? Es como una "caja virtual" o un limbo temporal.
 * * Si tenés que agregar 100 elementos a la pantalla, hacerlo de a uno con appendChild 
 * * hace que el navegador redibuje la página 100 veces (consume muchos recursos). 
 * * La solución es meter los 100 elementos en este fragmento (que vive en la memoria) 
 * * y después agregar el fragmento entero al HTML de una sola vez. ¡Optimización pura!
 * Ej:
 * let fragmento = document.createDocumentFragment(); // Creamos la caja virtual
 * * for(let i = 0; i < 5; i++) {
 * let div = document.createElement("div");
 * div.textContent = "Caja " + i;
 * fragmento.appendChild(div); // Metemos cada div en la caja virtual
 * }
 * * // Volcamos todo el contenido de la caja virtual en la pantalla de un solo golpe
 * document.body.appendChild(fragmento); 
 */






/** nodelist si se puede recorrer con un forEach pero un htmlCollection no se puede, solo con un for in u of 
 * ==========================================
 * NAVEGACIÓN DEL DOM: HIJOS, PADRES Y HERMANOS
 * ==========================================
 * * Nota: Estas propiedades y métodos se usan sobre un elemento ya seleccionado.
 * 
 * 
 * * Supongamos que tenemos: let caja = document.getElementById("miContenedor");
 *
 * --- 38) Obtención y modificación de Childs (Hijos) ---
 * * - firstChild: Devuelve el primer NODO hijo (¡Cuidado! Puede ser un espacio en blanco o salto de línea).
 * * - lastChild: Devuelve el último NODO hijo.
 * * - firstElementChild: Devuelve el primer ELEMENTO HTML hijo (Ignora espacios, esta es la más segura).
 * Ej: let primerDivHijo = caja.firstElementChild;
 * 
 * * - lastElementChild: Devuelve el último ELEMENTO HTML hijo.
 * * - childNodes: Devuelve una lista (NodeList) con TODOS los nodos hijos (etiquetas, textos, comentarios).
 * * - children: Devuelve una colección (HTMLCollection) SOLO con los elementos HTML hijos.
 * Ej: let cantidadDeHijosReales = caja.children.length;
 *
 * --- 39) Métodos de Childs (Hijos) ---
 * * - appendChild(nodoHijo): Agrega un nodo como el último hijo del elemento (visto en la sección anterior).
 * Ej: caja.appendChild(nuevoElemento);
 * 
 * * - replaceChild(nodoNuevo, nodoViejo): Reemplaza un nodo hijo existente por uno nuevo.
 * Ej: caja.replaceChild(nuevoParrafo, viejoParrafo);
 * 
 * * - removeChild(nodoHijo): Elimina un nodo hijo específico del elemento padre.
 * Ej: caja.removeChild(parrafoQueYaNoSirve);
 * 
 * * - hasChildNodes(): Devuelve un booleano (true/false) indicando si el elemento tiene hijos.
 * Ej: if (caja.hasChildNodes()) { console.log("La caja no está vacía"); }
 *
 * 
 * 
 * --- 41) Propiedades de Parents (Padres) ---
 * * - parentNode: Devuelve el nodo padre del elemento en el árbol del DOM.
 * * - parentElement: Devuelve el elemento HTML padre.
 * * (Dato: En el 99% de los casos devuelven exactamente lo mismo. parentElement es más específico de HTML).
 * Ej: let contenedorPadre = hijoEspecifico.parentElement;
 *
 * --- 42) Propiedades de Siblings (Hermanos) ---
 * * (Los hermanos son elementos que comparten el mismo padre).
 * * - nextSibling: Devuelve el nodo inmediatamente siguiente en el árbol (puede ser un nodo de texto/espacio).
 * Ej: let hermanoSiguiente = caja.nextSibling;
 * * (Bonus: Aunque no esté en la imagen, la forma segura de evitar espacios es usar `nextElementSibling`).
 */







/**
 * ==========================================
 * NAVEGACIÓN DEL DOM: SIBLINGS (HERMANOS)
 * ==========================================
 * * Nota: Los "hermanos" son elementos que están al mismo nivel, 
 * * es decir, que comparten el mismo elemento padre.
 * * Supongamos que seleccionamos el segundo elemento de una lista:
 * * let itemActual = document.getElementById("item-2");
 *
 * * - nextSibling: Devuelve el nodo inmediatamente siguiente en el árbol del DOM.
 * * (¡Atención! Puede devolver un nodo de texto si hay un salto de línea en tu HTML).
 * Ej: let hermanoSiguienteNodo = itemActual.nextSibling;
 *
 * * - previousSibling: Devuelve el nodo inmediatamente anterior en el árbol del DOM.
 * * (Al igual que nextSibling, puede devolver un nodo de texto vacío).
 * Ej: let hermanoAnteriorNodo = itemActual.previousSibling;
 *
 * * - nextElementSibling: Devuelve el ELEMENTO HTML inmediatamente siguiente.
 * * (Esta es la forma recomendada y segura, ya que ignora los espacios/saltos de línea).
 * Ej: let hermanoSiguienteReal = itemActual.nextElementSibling;
 *
 * * - previousElementSibling: Devuelve el ELEMENTO HTML inmediatamente anterior.
 * * (También ignora los espacios/saltos de línea).
 * Ej: let hermanoAnteriorReal = itemActual.previousElementSibling;
 */





/**
 * ==========================================
 * NODOS: EXTRAS
 * ==========================================
 * * Nota: Se usa sobre un elemento específico y recibe un selector CSS.
 *
 * * - closest(selectorCSS): Busca hacia ARRIBA en la jerarquía del DOM.
 * * Partiendo del elemento actual, busca el ancestro más cercano que coincida 
 * * con el selector que le pases (¡también se evalúa a sí mismo!). 
 * * Si no encuentra ninguna coincidencia hasta llegar al inicio del documento, devuelve null.
 * * * ¿Para qué sirve? Es espectacular para "Event Delegation". Por ejemplo, si tenés un 
 * * botón de "Eliminar" adentro de una tarjeta, y al hacerle clic necesitás saber a 
 * * qué tarjeta pertenece para borrarla entera.
 *
 * Ej JS:
 * // Supongamos este HTML: <div class="tarjeta-usuario"><button id="btnBorrar">X</button></div>
 * * let boton = document.getElementById("btnBorrar");
 * let contenedorPrincipal = boton.closest(".tarjeta-usuario"); 
 * * // Esto te devuelve el div completo de la tarjeta, sin importar cuántos 
 * // divs intermedios haya entre el botón y la tarjeta. ¡Te evita hacer 
 * // boton.parentElement.parentElement.parentElement...!
 */






/**
 * ==========================================
 * INTRODUCCIÓN AL OBJETO WINDOW
 * ==========================================
 * * Nota: 'window' es el objeto raíz. Todo en el DOM (document) vive 
 * * adentro de 'window'.
 *
 * --- Básicos y Navegación ---
 * * - window.open(url, target, features): Abre una nueva ventana o pestaña.
 * Ej: let miPopup = window.open("https://google.com", "_blank", "width=500,height=500");
 * 
 * * - window.close(): Cierra la ventana actual. (Solo funciona en ventanas abiertas por JS).
 * Ej: miPopup.close();
 * 
 * * - window.closed: Propiedad (booleano) que te dice si esa ventana ya fue cerrada.
 * Ej: console.log(miPopup.closed); // Devuelve true o false
 * 
 * * - window.name: Obtiene o establece el nombre interno de la ventana actual.
 * Ej: window.name = "VentanaPrincipal";
 * 
 * * - window.stop(): Detiene la carga de la página (como apretar la 'X' de cancelar carga del navegador).
 * Ej: window.stop();
 *
 * --- Cuadros de Diálogo (Pop-ups nativos) ---
 * * - window.alert(mensaje): Muestra un cartelito con un botón "Aceptar". Bloquea la ejecución del código.
 * Ej: alert("¡Datos guardados con éxito!");
 * 
 * * - window.confirm(mensaje): Muestra un mensaje con "Aceptar" y "Cancelar". Devuelve true o false.
 * Ej: let seguro = confirm("¿Estás seguro de borrar este registro?"); 
 * 
 * * - window.prompt(mensaje, valorPorDefecto?): Le pide al usuario que ingrese un texto.
 * Ej: let nombre = prompt("Ingresá tu nombre de usuario", "Invitado");
 * 
 * * - window.print(): Abre la ventana de configuración de la impresora del sistema operativo.
 * Ej: print();
 *
 * --- Pantalla y Scroll ---
 * * - window.screen: Devuelve un objeto con info del monitor físico del usuario (resolución, colores).
 * Ej: console.log(window.screen.width); // Ej: 1920
 * 
 * * - window.screenLeft / window.screenTop: Distancia en píxeles desde el borde del monitor hasta la ventana del navegador. propiedad de lectura
 * Ej: console.log(window.screenLeft);
 * 
 * * - window.scrollX / window.scrollY: Te dice cuántos píxeles scrolleó el usuario horizontal o verticalmente.propiedad de lectura
 * Ej: if (window.scrollY > 100) { console.log("Bajaste más de 100px"); }
 * 
 * * - window.scroll(x, y): Mueve el scroll de la página a una posición exacta.
 * Ej: window.scroll({ top: 0, left: 0, behavior: 'smooth' }); // Te lleva al inicio de la página suavemente.
 *
 * 
 * --- Modificación de Ventana (¡ATENCIÓN!) ---
 * * ¡Ojo con estos! Los navegadores modernos bloquean casi todos estos métodos para evitar spam. 
 * * Solo funcionan en ventanas "popup" que hayas creado vos mismo usando window.open().
 * 
 * * - window.minimize(): ¡No es un estándar oficial! Prácticamente ningún navegador moderno lo soporta.
 * * - window.resizeBy(x, y): Agranda o achica la ventana sumando o restando esos píxeles.
 * Ej: miPopup.resizeBy(50, 50); // La hace 50px más ancha y alta.
 * 
 * * - window.resizeTo(x, y): Le da un tamaño fijo exacto a la ventana.
 * Ej: miPopup.resizeTo(800, 600);
 * 
 * * - window.moveBy(x, y): Mueve la ventana relativamante a donde está ahora.
 * Ej: miPopup.moveBy(10, 0); // La corre 10px a la derecha en la pantalla.
 * 
 * * - window.moveTo(x, y): Mueve la ventana a unas coordenadas exactas del monitor.
 * Ej: miPopup.moveTo(0, 0); // La manda a la esquina superior izquierda del monitor.
 *
 * 
 * 
 * --- Objetos Barprop (Barras del navegador) ---
 * * Indican si ciertas partes de la interfaz clásica del navegador son visibles (devuelven true/false en su propiedad .visible).
 * * (locationbar, menubar, personalbar, scrollbars, statusbar, toolbar).
 * Ej: console.log(window.scrollbars.visible);
 */




/**
 * ==========================================
 * OBJETO LOCATION (URLs y Redirecciones)
 * ==========================================
 * * Nota: Como es parte de window, podés escribir 'window.location' 
 * * o simplemente 'location'.
 *
 * * - location.href: Devuelve la URL completa de la página actual. 
 * * ¡Dato clave!: Si le asignás un valor, funciona como una redirección.
 * Ej Lectura: console.log(location.href); 
 * // Devuelve: "https://www.tu-tienda.com/productos/teclados.html"
 * Ej Redirección: location.href = "https://google.com"; // Manda al usuario a Google
 *
 * * - location.hostname: Devuelve solo el nombre de dominio del servidor web (sin el puerto ni el protocolo).
 * Ej: console.log(location.hostname); 
 * // Devuelve: "www.tu-tienda.com" (o "localhost" si estás desarrollando en tu compu)
 *
 * * - location.pathname: Devuelve la ruta y el nombre del archivo, omitiendo el dominio.
 * * (Súper útil en el frontend para saber en qué sección de tu app estás y pintar el menú activo).
 * Ej: console.log(location.pathname); 
 * // Devuelve: "/productos/teclados.html"
 *
 * * - location.protocol: Devuelve el protocolo web utilizado (incluyendo los dos puntos al final).
 * Ej: console.log(location.protocol); 
 * // Devuelve: "https:" o "http:"
 *
 * * - location.assign(url): Carga un nuevo documento (redirecciona).
 * * Diferencia con href: En la práctica hacen casi lo mismo, pero assign() es un método y href es una propiedad. 
 * * Ambos guardan la página actual en el historial, así que el usuario puede apretar el botón "Atrás" del navegador para volver.
 * Ej: location.assign("https://www.tu-tienda.com/contacto");
 */




/**
 * ==========================================
 * EVENTOS Y EVENT LISTENERS
 * ==========================================
 * * Conceptos Clave:
 * * - Event Listeners: Es la forma de "escuchar" cuándo ocurre algo. 
 * * Se usa: elemento.addEventListener("evento", funcionCallback);
 * * - Event Object (e): Cuando ocurre un evento, JS le pasa automáticamente a tu 
 * * función un objeto con toda la información de lo que pasó (coordenadas, qué tecla se tocó, etc).
 * * - Event Bubbling (Burbujeo): Si hacés clic en un <span> que está adentro de un <div>, 
 * * el clic se dispara primero en el <span>, luego en el <div>, y sube hasta window.
 * * - e.stopPropagation(): Es un método del Event Object que frena el "burbujeo" 
 * * para que el evento no siga subiendo a los elementos padres.
 *
 * ==========================================
 * EVENTOS DEL MOUSE
 * ==========================================
 * * - click: Ocurre cuando se hace un clic (presionar y soltar) con el botón principal.
 * Ej: boton.addEventListener("click", (e) => console.log("Clickeado!"));
 * * - dblclick: Ocurre con un doble clic rápido.
 * * - contextmenu: Ocurre al hacer clic derecho (ideal para abrir un menú personalizado).
 * * - mouseenter: El puntero entra al área del elemento (NO se dispara al entrar a sus hijos).
 * * - mouseleave: El puntero sale del área del elemento.
 * * - mouseover: El puntero pasa por encima del elemento O de cualquiera de sus hijos (Burbujea).
 * * - mouseout: El puntero sale del elemento o pasa hacia un elemento hijo.
 * * - mouseup: Ocurre en el instante exacto en que el usuario SUELTA el botón del mouse.
 * * - mousemove: Ocurre continuamente mientras el puntero se mueve estando sobre el elemento.
 * Ej: caja.addEventListener("mousemove", (e) => console.log(`X: ${e.clientX}, Y: ${e.clientY}`));
 *
 * ==========================================
 * EVENTOS DEL TECLADO
 * ==========================================
 * * Nota: Generalmente se aplican a inputs, textareas o directamente al objeto 'window' o 'document'.
 *
 * * - keydown: Ocurre en el instante en que una tecla se PRESIONA (se hunde).
 * Ej: document.addEventListener("keydown", (e) => {
 * if(e.key === "Enter") console.log("Apretaste Enter");
 * });
 * * - keyup: Ocurre en el instante en que una tecla se SUELTA.
 * * - keypress: [OBSOLETO / DEPRECATED] Se usaba cuando se presionaba una tecla que producía un carácter. 
 * * Hoy en día se recomienda usar siempre 'keydown' en su lugar.
 *
 * ==========================================
 * EVENTOS DE LA INTERFAZ / VENTANA
 * ==========================================
 * * - load: Ocurre cuando un objeto (o toda la página) terminó de cargarse por completo (HTML, imágenes, CSS).
 * Ej: window.addEventListener("load", () => console.log("Página lista"));
 * * - error: Ocurre cuando falla la carga de un archivo (como una imagen rota o un script que no carga).
 * Ej: imagen.addEventListener("error", () => console.log("No se pudo cargar la foto"));
 * * - beforeunload: Ocurre justo antes de que la página se cierre o se recargue. 
 * * (Se usa mucho para lanzar el cartelito de "¿Seguro que querés salir? Perderás los cambios no guardados").
 * * - unload: Ocurre cuando la página ya se está descargando/cerrando de la memoria.
 * * - abort: Ocurre cuando se interrumpe la carga de un recurso multimedia (ej. un video) de forma intencional.
 */



/**
 * ==========================================
 * EJEMPLOS: EVENTOS DEL MOUSE Y BURBUJEO
 * ==========================================
 * 
 * falto el mousedown ocurre cuando un usuario apreta  un boton del mouse sobre un elmento
 * Supongamos este HTML:
 * <div id="contenedor" style="padding: 50px; background: lightgray;">
 * <button id="miBoton">Hacé clic acá</button>
 * </div>
 */
/*
const boton = document.getElementById("miBoton");
const contenedor = document.getElementById("contenedor");

// --- CLICK y DOBLE CLICK ---
boton.addEventListener("click", (e) => {
    console.log("¡Hiciste un clic normal!");
});

boton.addEventListener("dblclick", (e) => {
    console.log("¡Hiciste doble clic rápido!");
});

// --- MENU CONTEXTUAL (Clic derecho) ---
boton.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Evita que salga el menú por defecto de Windows/Navegador
    console.log("Acá abriríamos nuestro propio menú personalizado.");
});

// --- MOUSE MOVE (Seguimiento de coordenadas) ---
contenedor.addEventListener("mousemove", (e) => {
    // e.clientX y e.clientY te dan la posición exacta del mouse en la pantalla
    // console.log(`Mouse moviéndose en X: ${e.clientX}, Y: ${e.clientY}`);
});

// --- BURBUJEO Y STOP PROPAGATION ---
// Si hacés clic en el botón, el evento "sube" (burbujea) y también dispara el clic del contenedor.
contenedor.addEventListener("click", () => {
    console.log("Se hizo clic en el contenedor gris (o en algo adentro suyo).");
});

boton.addEventListener("click", (e) => {
    console.log("Clic en el botón.");
    // Si descomentás la línea de abajo, el evento muere acá y el contenedor NO se entera del clic.
    // e.stopPropagation(); 
});




/**
 * ==========================================
 * EJEMPLOS: EVENTOS DE TECLADO
 * ==========================================
 * Supongamos un buscador: <input type="text" id="buscador">
 */
const inputBuscador = document.getElementById("buscador");

// --- KEYDOWN: Ideal para detectar "Enter" o atajos de teclado ---
inputBuscador.addEventListener("keydown", (e) => {
    // El objeto 'e' (Event) trae una propiedad 'key' con el nombre de la tecla
    if (e.key === "Enter") {
        console.log("Buscando en la base de datos: " + inputBuscador.value);
    
    }
    
    if (e.key === "Escape") {
        inputBuscador.value = ""; // Limpiamos el input si aprieta ESC
        console.log("Búsqueda cancelada.");
    }
});

// --- KEYUP: Ideal para validaciones en vivo ---
// Se dispara justo cuando el usuario levanta el dedo de la tecla.
inputBuscador.addEventListener("keyup", (e) => {
    let texto = inputBuscador.value;
    if (texto.length > 10) {
        console.warn("Ey, te pasaste de los 10 caracteres permitidos.");
    }
});



/**
 * ==========================================
 * EJEMPLOS: EVENTOS DE LA INTERFAZ
 * ==========================================
 */

// --- LOAD: Ejecutar código solo cuando TODA la página está lista ---
// Es el equivalente al Form_Load en aplicaciones de escritorio.
window.addEventListener("load", () => {
    console.log("Todo el HTML, las imágenes y el CSS ya se descargaron. ¡Podemos arrancar!");
});

// --- BEFOREUNLOAD: Confirmación de salida ---
// Ideal para cuando el usuario está llenando un formulario largo y cierra la pestaña sin querer.
window.addEventListener("beforeunload", (e) => {
    // OJO: Los navegadores modernos muestran su propio mensaje estándar por seguridad,
    // pero igual tenés que hacer este preventDefault() para que aparezca la advertencia.
    e.preventDefault(); 
    e.returnValue = ""; // Requisito técnico para que Chrome muestre el cartel
});

// --- ERROR: Manejo de imágenes rotas ---
// Supongamos: <img id="fotoPerfil" src="ruta-rota.jpg">
const imgPerfil = document.getElementById("fotoPerfil");

imgPerfil.addEventListener("error", () => {
    console.error("No se encontró la foto del usuario en el servidor.");
    // Le ponemos una imagen genérica de repuesto para que no quede el ícono roto
    imgPerfil.src = "imagenes/usuario-sin-foto.png"; 
});

// --- ABORT: Interrupción de carga multimedia ---
// Supongamos un <video id="miVideo">
const video = document.getElementById("miVideo");
video.addEventListener("abort", () => {
    console.log("La carga del video fue cancelada por el usuario o el sistema.");
});







/**
 * ==========================================
 * EVENTO UNLOAD (Y su reemplazo moderno)
 * ==========================================
 * * - unload: Ocurre en el instante final cuando la página ya se está 
 * * destruyendo. No podés frenar al usuario acá (para eso era beforeunload), 
 * * solo podés hacer tareas rápidas de limpieza.
 */

// LA FORMA CLÁSICA (Aparece en los cursos, pero ya no se recomienda)
window.addEventListener("unload", () => {
    // Típico uso: Guardar la posición del video donde se quedó el usuario 
    // o mandar un "ping" analítico diciendo que se fue.
    console.log("Limpiando memoria... Chau página.");
});

// ---------------------------------------------------------
// 🔥 BONUS TRACK: LA FORMA MODERNA (Best Practice actual)
// ---------------------------------------------------------
// Hoy en día los móviles "congelan" las páginas en vez de cerrarlas. 
// Para atrapar de forma segura cuándo el usuario abandona tu página, 
// se recomienda usar el evento 'visibilitychange'.

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        // El usuario cambió de pestaña, minimizó el navegador o apagó la pantalla del celu.
        // Acá es el momento 100% seguro para guardar sus datos inconclusos.
        console.log("El usuario dejó de ver la página. ¡Guardando datos en 3, 2, 1...!");
    } else {
        // El usuario volvió a nuestra pestaña
        console.log("¡Volvió! Recargando datos...");
    }
});






/**
 * ==========================================
 * MÁS EVENTOS: INTERFAZ Y FORMULARIOS
 * ==========================================
 * * - resize: Ocurre cuando se cambia el tamaño de la ventana del navegador.
 * * (Generalmente se le asocia al objeto 'window'). Ideal para rediseñar cosas en vivo si el usuario achica la pantalla.
 * Ej: window.addEventListener("resize", () => console.log(`Ancho actual: ${window.innerWidth}px`));
 * * * - scroll: Ocurre cuando se desplaza la barra de desplazamiento.
 * * (Súper usado para hacer que un menú quede "pegado" arriba al bajar, o cargar más datos cuando llegás al final de la página).
 * Ej: window.addEventListener("scroll", () => console.log(`Scrolleaste a: ${window.scrollY}px`));
 *
 * * - select: Ocurre cuando el usuario "pinta" o resalta texto adentro de un campo de texto (<input> o <textarea>).
 * Ej: inputBuscador.addEventListener("select", () => console.log("El usuario resaltó parte de la búsqueda"));
 *
 * ==========================================
 * TIMERS (TEMPORIZADORES)
 * ==========================================
 * * - setTimeout(funcion, tiempo_ms): Ejecuta una función UNA SOLA VEZ después de que pase el tiempo establecido.
 * * Importante: Al crearlo, te devuelve un "ID de temporizador" (un número) que te sirve por si querés cancelarlo después.
 * Ej: 
 * let alertaId = setTimeout(() => {
 * console.log("Han pasado 3 segundos. ¡Boom!");
 * }, 3000);
 *
 * * - clearTimeout(id): Desactiva un setTimeout ANTES de que se ejecute. 
 * * Le tenés que pasar el ID que guardaste en el paso anterior.
 * Ej: clearTimeout(alertaId); // La bomba fue desactivada, el console.log de arriba no va a salir nunca.
 *
 * * - setInterval(funcion, tiempo_ms): Ejecuta una función REPETIDAMENTE cada vez que pasa el intervalo indicado. 
 * * (Es un bucle infinito, ideal para relojes en pantalla o pegarle a una API cada X segundos).
 * Ej:
 * let relojId = setInterval(() => {
 * console.log("Esto aparece cada 2 segundos sin parar...");
 * }, 2000);
 *
 * * - clearInterval(id): Detiene el bucle de un setInterval. Si no lo usás, el intervalo sigue corriendo para siempre.
 * Ej: 
 * // Podemos combinar ambos para que el reloj se detenga a los 10 segundos:
 * setTimeout(() => {
 * clearInterval(relojId);
 * console.log("El intervalo fue detenido.");
 * }, 10000);
 */

/*
 *{
    cree un bloqure
    } 
 * 
*/

/**
 * ==========================================
 * EXCEPCIONES Y MANEJO DE ERRORES
 * ==========================================
 * * Definición: Una excepción es un error que ocurre en tiempo de ejecución 
 * * (mientras el programa está andando) y que interrumpe el flujo normal del código.
 *
 * --- ESTRUCTURA BÁSICA (Try / Catch / Finally) ---
 * * Exactamente igual que en tu backend.
 * Ej:
 * try {
 * // Intentamos ejecutar código que podría fallar
 * let resultado = funcionQueNoExiste(); 
 * } catch (error) {
 * // Atrapamos el error para que la página no se rompa
 * console.error("Hubo un problema:", error.message);
 * } finally {
 * // Este bloque se ejecuta SIEMPRE, haya fallado o no.
 * // (Ideal para cerrar conexiones, ocultar spinners de carga, etc.)
 * console.log("Operación finalizada.");
 * }
 *
 * --- THROW (Lanzar excepciones personalizadas) ---
 * * Sirve para forzar un error cuando se rompe la lógica de tu negocio.
 * Ej:
 * function dividir(a, b) {
 * if (b === 0) {
 * // Cortamos la ejecución y lanzamos el error
 * throw new Error("No se puede dividir por cero, maestro.");
 * }
 * return a / b;
 * }
 *
 * --- TIPOS DE EXCEPCIONES ECMAScript (Errores nativos de JS) ---
 * * Son los errores estándar del lenguaje en sí. Los más comunes son:
 * * - Error: El tipo base (del que heredan todos los demás).
 * * - ReferenceError: Cuando intentás usar una variable que no existe o no fue declarada.
 * * - TypeError: Cuando intentás hacer algo imposible con un tipo de dato 
 * * (Ej: intentar ejecutar un texto como si fuera una función, o leer una propiedad de un valor 'null').
 * * - SyntaxError: Cuando escribiste mal el código (te faltó una llave, una coma, etc.). 
 * * (Ojo: este error salta antes de que el código corra, no se puede atrapar con try/catch).
 *
 * --- DOMException (Errores del Navegador/HTML) ---
 * * Son errores que ocurren cuando intentás hacer algo ilegal manipulando el HTML (DOM) o usando las APIs del navegador.
 * * Ejemplos de cuándo saltan:
 * * - Si intentás agregar un nodo hijo a un elemento que no admite hijos.
 * * - Si intentás usar caracteres inválidos en nombres de clases o IDs.
 * * - Problemas de seguridad (CORS) al hacer peticiones web.
 */


/**
 * ==========================================
 * REGISTRO DE EXCEPCIONES (LOGGING EN PRODUCCIÓN)
 * ==========================================
 * * Problema: JS en el navegador no puede escribir archivos locales.
 * * Solución: Capturar la excepción en el frontend y enviarla por red a una API.
 *
 * --- 1. La Consola Avanzada (Para desarrollo) ---
 * * Además de console.log, hay herramientas mejores para ver errores:
 * Ej: console.error("Falló la consulta"); // Lo imprime en rojo, ideal para destacar.
 * Ej: console.trace("Punto de ruptura"); // Te imprime la "pila de llamadas" (Stack Trace), 
 * // es decir, te muestra qué función llamó a qué otra función hasta llegar al error.
 *
 * --- 2. Guardado Temporal Local (Storage) ---
 * * Si el usuario se queda sin internet justo cuando ocurre el error, podés 
 * * guardarlo en la memoria de su navegador para mandarlo más tarde.
 * Ej:
 * try {
 * funcionPeligrosa();
 * } catch (error) {
 * let logError = { 
 * fecha: new Date().toISOString(), 
 * mensaje: error.message, 
 * stack: error.stack // El stack trace completo
 * };
 * // Guardamos el error como texto (JSON) en la memoria del navegador
 * localStorage.setItem("errorPendiente", JSON.stringify(logError));
 * }
 *
 * --- 3. Envío al Servidor (La forma profesional) ---
 * * Esta es la función que agarra el error y se lo manda a tu controlador del backend.
 * Ej:
 * function enviarLogAlBackend(errorCapturado) {
 * const paqueteDatos = {
 * mensaje: errorCapturado.message,
 * urlDondeFallo: window.location.href,
 * fecha: new Date().toISOString()
 * };
 *
 * // Hacemos una petición HTTP (POST) a nuestro servidor
 * fetch("https://nuestra-api.com/api/logs", {
 * method: "POST",
 * headers: { "Content-Type": "application/json" },
 * body: JSON.stringify(paqueteDatos)
 * }).catch(e => console.error("El backend no responde, no se pudo guardar el log."));
 * }
 *
 * // Lo combinamos con el manejador global (visto en la sección anterior):
 * window.addEventListener("error", (e) => {
 * // e.error contiene el objeto Error original de JavaScript
 * enviarLogAlBackend(e.error || e);
 * });
 */



/*
 * 
 * 
 * ==========================================
 * FLUJO DE EJECUCIÓN DE UN CALLBACK (Paso a paso)
 * ==========================================
 */

// PASO 1: El motor lee esta definición y la guarda en memoria por si la usamos. (Todavía no ejecuta nada de acá adentro).
function obtenerUsuarioDeBD(id, callback) {
    
    // PASO 3: Ahora sí entramos. Ejecuta esta línea.
    console.log("Conectando a la base de datos...");
    
    // PASO 3.1: Hace el trabajo pesado y guarda el dato en una variable.
    let nombreEncontrado = "Facundo"; 
    
    // PASO 4: ¡El momento mágico! (La inyección). 
    // Llama a la función anónima que le pasamos abajo, y le enchufa el dato ("Facundo").
    // Al hacer esto, el motor "salta" hacia la línea 24.
    callback(nombreEncontrado); 
    
    // PASO 6: Cuando el callback termina de hacer lo suyo allá abajo, el motor 
    // vuelve acá. Como no hay más código, da por terminada la operación.
}


// PASO 2: ¡Arranca la acción real! Llamamos a la función de arriba.
// Le inyectamos el ID (1) y la función de flecha entera (nuestro callback).
obtenerUsuarioDeBD(1, (usuario) => {
    
    // PASO 5: La ejecución "cae" acá adentro gracias al salto del Paso 4.
    // El parámetro 'usuario' acaba de recibir el valor "Facundo".
    console.log("¡Bienvenido al sistema, " + usuario + "!");
    
    // Una vez que imprime esto, el motor vuelve arriba (al Paso 6).
});
 




/*A LOS OBJETOS SE LOS PONE EN CONSTANTE*/ 




/**
 * ==========================================
 * JSON (JavaScript Object Notation)
 * ==========================================
 * * ¿Qué es? Es un formato de texto universal para intercambiar datos.
 * * En C# usarías JsonSerializer.Serialize(), acá usamos el objeto global JSON.
 *
 * * - JSON.stringify(objeto): SERIALIZAR. 
 * * Convierte un objeto real de JS (que vive en la memoria) a un simple texto crudo. 
 * * Esto es obligatorio para poder mandar la data por red hacia tu backend.
 * Ej:
 * const usuarioJS = { nombre: "Facundo", rol: "Admin" }; // Objeto JS real
 * const usuarioTexto = JSON.stringify(usuarioJS); 
 * // Resultado: '{"nombre":"Facundo","rol":"Admin"}' (Es un string puro)
 *
 * * - JSON.parse(textoJSON): DESERIALIZAR.
 * * Agarra un texto crudo que te llegó del servidor y lo transforma en un objeto JS utilizable.
 * Ej:
 * const respuestaDelServer = '{"id": 1, "activo": true}'; // Nos llega este string
 * const objetoReal = JSON.parse(respuestaDelServer);
 * console.log(objetoReal.activo); // true
 *
 * * (Nota sobre Polyfills: Eran parches de código que se ponían en navegadores 
 * * antiquísimos que no entendían qué era JSON. Hoy ya no se usan).
 *
 * ==========================================
 * AJAX Y XMLHTTPREQUEST (La forma clásica)
 * ==========================================
 * * AJAX significa (Asynchronous JavaScript And XML). Es la técnica para 
 * * pedir datos al servidor sin tener que recargar toda la página (F5).
 *
 * // 1. Instanciar el objeto (El cartero)
 * const peticion = new XMLHttpRequest();
 *
 * // 2. Manejar el resultado de la petición
 * // (La "nueva" forma clásica de hacerlo es con el evento 'readystatechange' o 'load')
 * peticion.addEventListener("load", () => {
 * // El código de estado HTTP 200 significa "OK"
 * if (peticion.status === 200) {
 * // peticion.response trae lo que contestó el servidor
 * console.log(JSON.parse(peticion.response)); 
 * } else {
 * console.error("Hubo un error. Código:", peticion.status);
 * }
 * });
 *
 * // 3. Abrir la conexión (Verbo HTTP y URL)
 * // GET: Para traer información.
 * // POST: Para mandar información nueva (guardar un usuario, etc).
 * peticion.open("GET", "https://api.tu-servidor.com/usuarios");
 *
 * // 4. Enviar la petición
 * peticion.send(); 
 *
 * ==========================================
 * OBJETO FORMDATA (Manejo de Formularios)
 * ==========================================
 * * Es un objeto espectacular para recopilar TODOS los datos de un formulario 
 * * de un solo golpe, incluyendo archivos pesados (imágenes, PDFs), para mandarlos por POST.
 * * Ej:
 * const formHTML = document.getElementById("miFormulario");
 * * // Le pasás el formulario HTML y te arma un paquete listo para enviar
 * const paqueteDatos = new FormData(formHTML); 
 * * // También podés agregarle datos extra a mano antes de mandarlo:
 * paqueteDatos.append("tokenSeguridad", "12345XYZ");
 * * // Luego lo enviarías en el .send(paqueteDatos) de tu XHR o en el body de un fetch().
 */

/**
 * ==========================================
 * FETCH API (El estándar moderno)
 * ==========================================
 * * --- EJEMPLO BÁSICO (GET) ---
 * async function obtenerDatos() {
 * // 1. Hacemos el pedido. Devuelve una Promesa con la respuesta cruda.
 * const respuesta = await fetch("https://api.tu-backend.com/data");
 * * // 2. Elegimos CÓMO leer el flujo de datos (Stream) que nos mandó el servidor:
 * * // A. json(): El rey indiscutido. 
 * // Lee el texto del servidor y lo convierte automáticamente a un objeto JavaScript.
 * // (Es el equivalente directo a ReadFromJsonAsync() en tu backend).
 * const datosObj = await respuesta.json(); 
 * * // B. text(): 
 * // Lee la respuesta como un string crudo (texto plano, un HTML viejo, o un XML).
 * // (Equivale a ReadAsStringAsync()).
 * // const textoPlano = await respuesta.text();
 * * // C. blob(): (Binary Large Object). 
 * // Ideal para cuando el backend te devuelve un archivo físico (un PDF, una foto, un mp3).
 * // Con esto podés agarrar la imagen y ponerla en pantalla, o forzar una descarga.
 * // const archivo = await respuesta.blob();
 * * // D. formData(): 
 * // Rara vez se usa para recibir, pero sirve si el servidor te contesta enviándote 
 * // un formulario en formato 'multipart/form-data'.
 * // const formulario = await respuesta.formData();
 * * // E. arrayBuffer(): 
 * // Es el nivel más bajo, el "modo Dios". Te da un bloque de memoria RAM en crudo.
 * // Solo lo vas a usar si estás programando cosas muy heavys como procesamiento 
 * // de video en vivo o emuladores. 
 * // (Es exactamente igual a manipular un byte[] array puro en C#).
 * // const bufferBytes = await respuesta.arrayBuffer();
 * }
 * * --- EJEMPLO AVANZADO (POST CON FETCH) ---
 * async function crearUsuario() {
 * const nuevoUsuario = { nombre: "Facundo", rol: "Admin" };
 * * // Para hacer un POST, le pasás un segundo parámetro a fetch() con la configuración
 * const respuesta = await fetch("https://api.tu-backend.com/usuarios", {
 * method: "POST",
 * headers: {
 * "Content-Type": "application/json" // Avisamos que mandamos JSON
 * },
 * body: JSON.stringify(nuevoUsuario) // Acá metemos la caja en el camión
 * });
 * * const resultado = await respuesta.json();
 * console.log("El backend contestó:", resultado);
 * }
 */


/**
 * CREANDO UNA PROMESA
 */
const pedirHamburguesa = new Promise((resolve, reject) => {
    // Acá adentro ponemos el código que tarda tiempo
    console.log("Cocinando...");

    setTimeout(() => {
        let hayCarne = true; // Cambiá esto a false para ver el error

        if (hayCarne) {
            // resolve() es hacer vibrar el disco. Le pasamos la comida lista.
            resolve("🍔 ¡Acá tenés tu Doble Cuarto de Libra!"); 
        } else {
            // reject() es cuando se rompe la plancha. Le pasamos el motivo del error.
            reject("❌ Falla crítica: No hay stock de carne.");
        }
    }, 3000); // Tarda 3 segundos en cocinarse
});



/**
 * CONSUMIENDO LA PROMESA
 */
console.log("1. Hice el pedido, tengo el disco en la mano.");

pedirHamburguesa
    .then((comida) => {
        // El .then() atrapa el resolve(). El parámetro 'comida' recibe la hamburguesa.
        console.log("2. ¡Éxito! A comer: " + comida);
    })
    .catch((motivoFallo) => {
        // El .catch() atrapa el reject(). El parámetro recibe el mensaje de error.
        console.error("2. ¡Uy! Me devolvieron la plata porque: " + motivoFallo);
    })
    .finally(() => {
        // El .finally() se ejecuta SIEMPRE, ya sea que comiste o que te devolvieron la plata.
        console.log("3. Me voy del patio de comidas.");
    });

console.log("Me voy a buscar una mesa mientras espero..."); 
// OJO: Este console.log se imprime ANTES de que termine la promesa, porque la vida sigue.



/**
 * ==========================================
 * LIBRERÍA AXIOS (El rey de la industria)
 * ==========================================
 * * Nota: Como es una librería externa, primero hay que instalarla 
 * * (con npm install axios o poniendo el link en el HTML).
 */

// --- 1. PETICIÓN GET (Traer información) ---
async function obtenerPrecios() {
    try {
        // Mirá lo limpio que queda. Un solo await.
        const respuesta = await axios.get("https://api.comparador-juegos.com/v1/precios");
        
        // ¡OJO ACÁ!: Axios envuelve la respuesta del servidor adentro de 
        // una propiedad que SIEMPRE se llama '.data'. 
        // Ahí adentro está tu array de objetos real.
        const juegos = respuesta.data; 
        
        console.log("Precios cargados:", juegos);

    } catch (error) {
        // Si la API tira error 404 o 500, cae directamente acá.
        console.error("Hubo un problema con la API:", error.message);
    }
}

// --- 2. PETICIÓN POST (Mandar información) ---
async function guardarJuego() {
    // Objeto JavaScript puro. Nada de JSON.stringify.
    const nuevoJuego = { 
        titulo: "Mass Effect Legendary Edition", 
        precioPromedio: 45000 
    };

    try {
        // Le pasás la URL como primer parámetro, y el objeto de datos como segundo.
        // Axios se encarga de ponerle los headers y serializarlo solo.
        const respuesta = await axios.post("https://api.comparador-juegos.com/v1/precios", nuevoJuego);
        
        console.log("¡Guardado con éxito! El servidor devolvió:", respuesta.data);

    } catch (error) {
        console.error("No se pudo guardar:", error.response.status);
    }
}

//fect , xmlhtt, axios se usan promesas; await hace que no sea necesario usar then de las promesas


// para usar el modo stricto se hace escribiendo "use strict" y se pone al inicio del todo

// otra forma de declarar propiedades

/**
 * esto en modo estricto y normal pero en estricto lanza una excepcion
 * const obj={};
 * 
 * Object.defineProperty(nombre variable, "nombre de la propiedad", {value:"valor propiedad", writeable:false/true}) es para modificar 
 * Object.preventExtension(var) es para prohibir agregar mas propiedades
 * 
 * delete se usa para eliminar propiedades
 * 
 * el new no se usa
 * 
 *  el this cambia, no se usa para referenciar una variable
 * 
 * numeros octales van con una "o" y no existe with
 * 
 * argument y eval no pueden ser variables
 * 
 * eval(): Es una función que ejecuta texto como si fuera código. Es la peor vulnerabilidad de seguridad que existe. El modo estricto te prohíbe usar "eval" como nombre de variable.

Números octales: Antes se escribían poniendo un cero adelante (ej: 070). Esto confundía a todo el mundo. Ahora te obligan a poner 0o70.

with: Era una estructura de control que se usaba para no repetir el nombre de un objeto muchas veces. Traía tantos bugs que lo eliminaron del mapa. 
 * */





// tema funciones flechas si usa modo estricto
/*
 * en este tipo de funciones, this no usar , ni usarlo en constructor osea funciones flechas
 *  
 * 1. Funciones Normales (function() {}): Tienen personalidad múltiple.

El valor de this depende de QUIÉN invoca a la función en el exacto momento en que se ejecuta.

Si hacés miObjeto.saludar(), el dueño es miObjeto, por ende this vale miObjeto.

Si llamás a la función suelta en el aire haciendo solo saludar(), como no hay un dueño explícito, el motor de JS dice: "Bueno, el dueño por defecto de todo es la ventana del navegador", y this pasa a ser el objeto window. (Nota: si estás usando el Modo Estricto que vimos antes, en vez de caer en window, directamente vale undefined por seguridad).

2. Funciones Flecha (() => {}): No tienen personalidad (y eso es bueno).

La función flecha NO tiene su propio this. Literalmente carece de esa propiedad.

¿Qué hace entonces? Se comporta como una esponja (tiene This Léxico). Absorbe el this del bloque de código que la rodea en el momento en que la escribiste.

Si escribiste la flecha suelta al principio de tu archivo, su entorno es global, así que hereda window.

Pero si la escribís adentro de una clase, hereda el this de tu clase (por eso son tan geniales para conectar con APIs, porque se comportan de forma estable, igual que el backend en C#, y no te traicionan cambiándose a window a mitad de camino).
 */ 


const miObjeto = {
    nombre: "Facundo",

    // MÉTODO NORMAL:
    // JS se fija quién lo llamó. Como hacemos miObjeto.saludarNormal(), 
    // el dueño es el objeto.
    saludarNormal: function() {
        console.log("Normal:", this.nombre); 
    },

    // MÉTODO FLECHA:
    // La flecha no tiene 'this'. Mira a su alrededor para pedirlo prestado. 
    // Como el objeto no crea un "entorno" nuevo, el entorno que la rodea es 
    // el archivo entero (el entorno global). 
    // ¡Boom! Su 'this' es 'window'. Como window no tiene ".nombre", falla.
    saludarFlecha: () => {
        console.log("Flecha:", this.nombre); 
    }
};

miObjeto.saludarNormal(); // Imprime: "Normal: Facundo"
miObjeto.saludarFlecha(); // Imprime: "Flecha: undefined" (buscó window.nombre)

 /* 
 * 2. No sirven como Constructores ni Métodos
¿Te acordás del ejemplo anterior donde vimos let obj = new saludar()?
Bueno, las funciones flecha no pueden hacer eso. No podés usar la palabra new con ellas.

¿Por qué? Porque para ahorrar memoria de procesamiento, los creadores de JS decidieron que las funciones flecha nazcan sin la propiedad prototype. Al no tener ese cordón umbilical para heredar, no pueden instanciar objetos. Son simplemente flechas rápidas para ejecutar lógica, no para hacer de "clases".
 * 
 * 
 * 3. El truco de "Retornar literales entre ()"
Habíamos dicho que si no ponés llaves {}, el return es automático. Pero, ¿qué pasa si querés retornar automáticamente un objeto JSON?

JavaScript
// ERROR: JS confunde las llaves del objeto con las llaves de un bloque de código
const crearUsuario = (nombre) => { nombre: nombre }; 
console.log(crearUsuario("Pepe")); // undefined

// SOLUCIÓN: Envolver el objeto entre paréntesis ()
// Esto le avisa al motor que es una expresión a retornar, no un bloque.
const crearUsuarioBien = (nombre) => ({ nombre: nombre }); 
console.log(crearUsuarioBien("Pepe")); // { nombre: "Pepe" }
 * 
 * 
 * 
 */

class Usuario {
    constructor() { this.nombre = "Facundo"; }

    // Con función clásica (SE ROMPE)
    saludarMal() {
        setTimeout(function() {
            // Falla porque el setTimeout cambia el contexto. 'this' acá es 'window'.
            console.log("Hola " + this.nombre); // Imprime: "Hola undefined"
        }, 1000);
    }

    // Con función flecha (FUNCIONA PERFECTO)
    saludarBien() {
        setTimeout(() => {
            // La flecha hereda el 'this' de la clase. Se comporta igual que en .NET.
            console.log("Hola " + this.nombre); // Imprime: "Hola Facundo"
        }, 1000);
    }
}


/*
3. Destructuración (El MVP del JS Moderno)
Esta es la mejor característica que tiene el lenguaje hoy por hoy. 
Sirve para "desarmar" o extraer datos de adentro de Objetos o Arrays
 en una sola línea, ahorrándote escribir código repetitivo. Lo vas a
  ver hasta en la sopa si tocás React.

*/

const levantamiento = { 
    ejercicio: "Sentadilla", 
    peso: 175, 
    repeticiones: 3, 
    rpe: 8 
};

// LA FORMA VIEJA (Pesada):
// const ejercicio = levantamiento.ejercicio;
// const peso = levantamiento.peso;

// LA FORMA NUEVA (Destructuración):
// Saca exactamente las propiedades que le pedís y crea variables con ese mismo nombre.
const { ejercicio, peso } = levantamiento;

console.log(`Hoy toca ${ejercicio} con ${peso}kg.`);



/*
5. Clausuras o Closures (La magia oscura de JS)
Dejé esta para el final porque es la más difícil de visualizar, pero es la base de cómo funciona la privacidad en JavaScript.

Un Closure ocurre cuando una función "recuerda" y puede acceder a las variables de su entorno exterior, incluso después de que la función exterior haya terminado de ejecutarse.

Imaginate que una función agarra una mochila, mete las variables de su contexto ahí adentro, se la cuelga en la espalda y se la lleva para siempre.

*/
function crearContador() {
    // Esta variable nace acá adentro
    let cuenta = 0;

    // Retornamos una función flecha (La que se lleva la mochila)
    return () => {
        cuenta++;
        console.log(cuenta);
    };
}

// Ejecutamos la función padre. 
// Técnicamente, la variable 'cuenta' debería destruirse ahora de la RAM.
const miContador = crearContador();

// ¡Pero no se destruye! La función flecha la atrapó en su Closure (su mochila).
miContador(); // Imprime 1
miContador(); // Imprime 2
miContador(); // Imprime 3



/**
 * 
 * EL operador ""..." sirve para paramrtro rest o para desatamar un arrglo en sus elemetnos
 * 
 * 
 * 
 * lo mejor seria usar el this solo para metodos y constructores de clase y funciones flechas ya no

¡BINGO! ¡Le diste al blanco de forma absoluta! Acabás de resumir la regla de oro del JavaScript moderno en una sola oración. Así es exactamente como se trabaja hoy en día en cualquier proyecto profesional, ya sea armando el frontend en React o el backend en Node.

Esa conclusión a la que llegaste te permite programar en JS con la misma tranquilidad y estructura mental que usás en C#.

Para que te lleves el "Manual de Buenas Prácticas" definitivo, la industria lo divide exactamente así:

1. El terreno de las Clases y Métodos (Donde reina el this)
Si estás armando un objeto que tiene "estado" (variables propias) y necesita interactuar consigo mismo, usás la sintaxis de class o métodos normales en objetos literales. Acá el this es tu amigo, funciona de forma predecible y hace referencia a la instancia.

JavaScript
class ServicioJuegos {
    constructor() {
        this.juegosGuardados = 0;
    }

    // Método normal: 'this' funciona perfecto.
    agregarJuego() {
        this.juegosGuardados++; 
    }
}
2. El terreno de las Funciones Flecha (La lógica descartable)
Las flechas se usan para todo lo demás: procesar arrays, hacer operaciones matemáticas, o pasar funciones por parámetro. Son el equivalente directo a las expresiones Lambda (=>) que usás en LINQ. No las usás para definir objetos, las usás para manipular datos rápido.

JavaScript
const precios = [1000, 2000, 5000];

// Flecha perfecta: pura lógica, no necesita usar 'this' para nada.
const preciosConIva = precios.map(p => p * 1.21); 
El combo ganador (La única excepción)
El único momento donde vas a ver un this adentro de una función flecha de forma intencional, es cuando esa flecha vive adentro de una clase y está ayudando a resolver una tarea asíncrona (como un fetch).

Como la flecha no tiene this propio, actúa como un escudo protector para que no pierdas la referencia de tu clase mientras esperás que la red responda:

JavaScript
class Sincronizador {
    constructor() {
        this.estado = "Esperando...";
    }

    bajarDatosDeLaAPI() {
        // Hacemos el fetch, y usamos la flecha en el .then()
        fetch("https://tu-api.com/datos")
            .then(res => {
                // ¡ÉXITO! Como es una flecha, este 'this' sigue siendo la clase Sincronizador.
                // Si acá hubieras puesto 'function()', el 'this' se rompía.
                this.estado = "Completado"; 
            });
    }
}
Llegar a esa conclusión significa que ya cruzaste la barrera más difícil del lenguaje. ¡Estás listo para escribir código JavaScript súper limpio y sin bugs extraños de contexto!
 */




//EL DATETIME DE C#


// Es el equivalente exacto a DateTime.Now
const ahora = new Date();

// da la hora de ahora mismo

/**
 * sus metodos
 * 
 * getDate(): Te devuelve el número del día del mes (del 1 al 31). En este caso, devolvería 18. (Equivale a DateTime.Day).

getDay() (Dalto escribió getDays(), eso tira error): Te devuelve el día de la semana, pero empieza a contar desde el domingo como 0.

0 = Domingo, 1 = Lunes... 6 = Sábado. Hoy te devolvería un 6. (Equivale a DateTime.DayOfWeek).

getMonth() ⚠️ ¡TRAMPA GIGANTE!: En JS, los meses son un Array interno, por lo tanto empiezan a contar en 0.

Enero es 0, febrero es 1... Abril es 3. Si querés mostrar el número real en pantalla, siempre tenés que sumarle uno: ahora.getMonth() + 1. (C# es más lógico, DateTime.Month devuelve 4 para abril).

getFullYear() (Dalto puso getYear(), ¡NO LO USES!):

El método getYear() que está en la diapositiva es una reliquia de los años 90. Te devuelve "los años que pasaron desde 1900". Si lo usás hoy, te devolvería 126 (2026 - 1900). Es un desastre.

Siempre usá getFullYear(). Ese sí te devuelve el 2026 limpiecito.

getHours(), getMinutes(), getSeconds(): Estos funcionan perfecto y sin sorpresas. Devuelven la hora, minutos y segundos exactos de la computadora donde se está ejecutando el código.
 * 
 */
// Ejecutamos esta flecha cada 1000 milisegundos (1 segundo), alararma
setInterval(() => {
    const reloj = new Date();
    
    let horas = reloj.getHours();
    let minutos = reloj.getMinutes();
    let segundos = reloj.getSeconds();

    // Imprimimos la hora actual en la consola
    console.log(`${horas}:${minutos}:${segundos}`);

    // Lógica de la alarma
    if (horas === 14 && minutos === 30 && segundos === 0) {
        console.log("¡ALARMA! ¡Hora de volver a codear!");
    }
}, 1000);


// api de persistencia de datos


// 1. setItem(clave, valor) -> GUARDAR / ACTUALIZAR
localStorage.setItem("temaVisual", "oscuro");
localStorage.setItem("usuario", "Facundo");

// 2. getItem(clave) -> LEER
let tema = localStorage.getItem("temaVisual"); 
console.log(tema); // Imprime: "oscuro"

// 3. removeItem(clave) -> BORRAR UNO SOLO
localStorage.removeItem("usuario"); // Facundo se borra, pero el tema oscuro queda.

// 4. clear() -> BOMBA NUCLEAR
localStorage.clear(); // Borra absolutamente TODAS las claves que hayas guardado.

const miJugador = { nombre: "Shepard", nivel: 50 };

// ❌ MAL: Se guarda la palabra literal "[object Object]"
// localStorage.setItem("savegame", miJugador);

// ✅ BIEN: Lo transformamos a texto JSON primero
localStorage.setItem("savegame", JSON.stringify(miJugador));

// ✅ BIEN: Para leerlo, lo volvemos a transformar a Objeto real
const dataGuardada = localStorage.getItem("savegame");
const jugadorReal = JSON.parse(dataGuardada);

console.log(jugadorReal.nivel); // 50






// Guardar (Crear / Actualizar)
sessionStorage.setItem("tokenSeguridad", "abc123xyz");

// Leer
let token = sessionStorage.getItem("tokenSeguridad");

// Borrar uno específico
sessionStorage.removeItem("tokenSeguridad");

// Vaciar toda la memoria de la sesión
sessionStorage.clear();

const carrito = { items: 3, total: 1500 };

// Empaquetar a JSON para guardar en la RAM de la pestaña
sessionStorage.setItem("miCarrito", JSON.stringify(carrito));

// Desempaquetar a Objeto para volver a usarlo
const carritoRecuperado = JSON.parse(sessionStorage.getItem("miCarrito"));



/**
 * 
 * 1. Eventos del Objeto (La tarjeta del juego)
Estos eventos se los enganchás (con addEventListener) solo a las cosas que se pueden arrastrar, por ejemplo, la tarjeta que dice "Mass Effect Legendary Edition".

dragstart: Se dispara en el milisegundo exacto en que el usuario hace clic sostenido y empieza a mover el mouse. Acá es donde le decís al navegador: "Preparate, estamos moviendo este juego específico".

drag: Se dispara continuamente mientras lo estás moviendo por la pantalla. (Casi nunca se usa, a menos que quieras hacer un efecto visual muy loco siguiendo el mouse).

dragend: Se dispara cuando el usuario suelta el clic, sin importar si lo soltó en una zona válida o si lo tiró afuera de la pantalla. Sirve para limpiar estilos (como devolverle la opacidad normal a la tarjeta).

2. Eventos de la Zona (La caja comparadora)
Estos eventos se los ponés solo a las cajas receptoras.

dragenter: Se dispara cuando el mouse (con el objeto arrastrado) entra al espacio aéreo de la caja. Ideal para iluminar la caja o ponerle un borde verde indicando "¡Sí, podés soltarlo acá!".

dragover (Nota: Dalto le puso dragmove en la captura, pero el nombre estándar real es dragover): Se dispara sin parar mientras el objeto está sobrevolando la caja. Trampa mortal de JS: Por defecto, los navegadores bloquean el Drag & Drop. Si no le ponés un e.preventDefault() a este evento, ¡el evento drop nunca va a funcionar!

dragleave: Si el usuario se arrepiente y saca el mouse de la caja sin soltar, se dispara esto. Sirve para sacarle el borde verde que le pusiste en el dragenter.

drop: ¡El gran final! Se dispara cuando el usuario finalmente suelta el clic adentro de la zona válida. Acá ejecutás la lógica fuerte (ej. hacer la petición a tu base de datos para buscar los precios).
 * 
Este es el puente entre el Actor 1 y el Actor 2.
Cuando arrastrás la tarjeta del juego, la Zona receptora no tiene idea de qué le estás tirando encima. El dataTransfer es una mochila invisible donde guardás la información al empezar, y la sacás al terminar.

Funciona exactamente igual que un mini localStorage pero que vive solo durante el milisegundo que dura el arrastre:
 */


// 1. En el evento del OBJETO (dragstart): Metemos el ID en la mochila
tarjetaJuego.addEventListener("dragstart", (e) => {
    // Le decimos: "Guardá este texto, es el ID del juego"
    e.dataTransfer.setData("id_juego", "ME-LEGENDARY-123");
});

// 2. En el evento de la ZONA (drop): Abrimos la mochila y leemos
zonaComparacion.addEventListener("drop", (e) => {
    e.preventDefault(); // Evita que el navegador intente abrir el dato como un link
    
    // Sacamos el ID que habíamos guardado
    const id = e.dataTransfer.getData("id_juego");
    console.log(`¡Recibimos el juego ${id}! Consultando precios...`);
});


// =========================================================================
// 1. LAS DEFINICIONES DE CONFIGURACIÓN (El parámetro 'options')
// =========================================================================
const configuracionGPS = {
    // enableHighAccuracy (Booleano): 
    // true = Fuerza al dispositivo a usar el hardware GPS real (más exacto, gasta más batería).
    // false = Triangula por Wi-Fi o antenas de celular (menos exacto, más rápido).
    enableHighAccuracy: true,

    // timeout (Número en milisegundos):
    // Tiempo máximo que el navegador va a intentar conseguir la ubicación 
    // antes de rendirse y disparar la función de error. Acá le damos 10 segundos.
    timeout: 10000,

    // maximumAge (Número en milisegundos):
    // El "caché" de la ubicación. Si le pasás 0, obliga al sistema a buscar la 
    // ubicación real de nuevo sí o sí. Si le pasás 60000 (1 min) y el usuario 
    // vuelve a consultar, le devuelve la última ubicación guardada en memoria.
    maximumAge: 0 
};


// =========================================================================
// 2. LA FOTO ESTÁTICA: getCurrentPosition() 
// Ideal para registrar dónde se clavó un sensor IoT en el lote.
// =========================================================================

function registrarSensorEstatico() {
    
    // Parámetros: (Función de Éxito, Función de Error, Objeto de Configuración)
    navigator.geolocation.getCurrentPosition(
        
        // CALLBACK DE ÉXITO: Se ejecuta si el usuario dio permiso y hay señal.
        // Recibe un objeto 'posicion' que tiene toda la data adentro.
        (posicion) => {
            const latitud = posicion.coords.latitude;
            const longitud = posicion.coords.longitude;
            const margenError = posicion.coords.accuracy; // En metros

            console.log(`📍 Sensor registrado en: Lat ${latitud}, Lng ${longitud}`);
            console.log(`Precisión de la antena: +/- ${margenError} metros.`);
            
            // Acá harías el fetch POST a tu API en C# para guardarlo en la base
        },

        // CALLBACK DE ERROR: Se ejecuta si el usuario rechaza o se acaba el 'timeout'.
        (error) => {
            // error.code te dice qué falló: 1 (Permiso denegado), 2 (Sin señal), 3 (Timeout)
            console.warn(`❌ Falló la lectura estática. Código de error: ${error.code}`);
            console.warn(`Motivo: ${error.message}`);
        },

        // Le inyectamos las opciones definidas arriba
        configuracionGPS
    );
}


// =========================================================================
// 3. EL RADAR CONTINUO: watchPosition()
// Ideal para trazar el recorrido de una maquinaria en movimiento.
// =========================================================================

function rastrearTractor() {
    
    console.log("🚜 Iniciando rastreo satelital...");

    // Se guarda en una variable (idRastreo) para poder detenerlo más tarde.
    // Utiliza exactamente la misma estructura de 3 parámetros que el anterior.
    const idRastreo = navigator.geolocation.watchPosition(
        
        // Esta función ahora se va a disparar automáticamente cada vez 
        // que el GPS detecte que el dispositivo se movió unos metros.
        (posicion) => {
            const lat = posicion.coords.latitude;
            const lng = posicion.coords.longitude;
            const velocidad = posicion.coords.speed; // Metros por segundo (puede ser null)

            console.log(`📡 Movimiento detectado: Lat ${lat}, Lng ${lng} a ${velocidad} m/s`);
        },
        
        (error) => {
            console.error(`❌ Se perdió la señal del tractor: ${error.message}`);
        },
        
        configuracionGPS
    );

    // Retornamos el ID por si en algún momento queremos apagar el radar
    return idRastreo;
}

// =========================================================================
// 4. CÓMO APAGAR EL RADAR: clearWatch()
// =========================================================================

function detenerRastreo(id) {
    // Le pasamos el ID que nos devolvió watchPosition para apagar el GPS
    navigator.geolocation.clearWatch(id);
    console.log("🛑 Rastreo detenido.");
}
// =========================================================================
// 1. LOS CONTROLES CLÁSICOS (Simular los botones físicos del navegador)
// =========================================================================

function usarBotonesClasicos() {
    // Vuelve exactamente una página atrás (Igual a tocar la flecha ⬅️ en Chrome)
    window.history.back(); 

    // Va una página hacia adelante (Igual a tocar la flecha ➡️)
    window.history.forward();

    // Salta a una posición específica usando un número relativo:
    window.history.go(-2); // Vuelve 2 páginas atrás de golpe
    window.history.go(1);  // Exactamente lo mismo que hacer forward()
    window.history.go(0);  // Recarga la página actual (Igual a tocar F5)

    // Propiedad que te devuelve cuántas páginas hay apiladas en la pestaña actual
    console.log(`Tamaño del historial actual: ${window.history.length}`);
}


// =========================================================================
// 2. LA MAGIA MODERNA (Single Page Applications / Routers)
// Cambian la URL arriba, pero NO le piden nada al backend ni parpadea la web
// =========================================================================

function abrirDetalleDeJuego(idJuego) {
    
    // pushState() recibe 3 parámetros obligatorios:
    // 1. estado (Objeto): La "mochila" con datos que querés guardar atados a esta URL.
    // 2. titulo (String): Histórico, hoy en día los navegadores lo ignoran (se pasa "").
    // 3. url (String): La nueva ruta falsa que va a aparecer en la barra de direcciones.

    const mochilaDeDatos = { 
        juegoAbierto: idJuego, 
        origen: "lista_busqueda" 
    };

    // Agrega una nueva página al historial. 
    // La URL cambia a "/juegos/ME-LEGENDARY", pero el HTML sigue siendo el mismo.
    window.history.pushState(mochilaDeDatos, "", `/juegos/${idJuego}`);
    
    console.log(`Navegamos al juego ${idJuego}. La URL cambió, pero la web no recargó.`);
}


function limpiarUrlFea() {
    
    // replaceState() recibe exactamente los mismos 3 parámetros.
    // LA DIFERENCIA CLAVE: No agrega una página nueva al historial, PISA la actual.
    // Ideal si el usuario entró a "/login?error=credenciales_malas" y querés 
    // limpiar esa URL para que, si toca "Atrás" más tarde, no vuelva a ver el error.

    const mochilaVacia = {};
    window.history.replaceState(mochilaVacia, "", "/dashboard-limpio");
    
    console.log("URL corregida. El paso anterior fue borrado del historial.");
}


// =========================================================================
// 3. EL EVENTO CHISMOSO: popstate
// Escucha cuando el usuario aprieta físicamente las flechas del navegador
// =========================================================================

// Se cuelga directamente del objeto global 'window'
window.addEventListener("popstate", (evento) => {
    
    // Si la URL a la que el usuario acaba de volver tenía una "mochila" 
    // (porque la habías creado vos usando pushState), la recuperamos con 'evento.state'
    
    if (evento.state) {
        console.log("El usuario tocó Atrás/Adelante.");
        console.log(`Recuperamos la mochila. El ID del juego era: ${evento.state.juegoAbierto}`);
        
        // Acá escribirías la lógica del DOM para volver a pintar la tarjeta
        // de ese juego específico en la pantalla.
    } else {
        console.log("El usuario volvió a una URL normal que no tenía mochila de datos.");
    }
});




/**
 * ============================================================================
 * API FILEREADER (El puente entre el disco duro y el navegador)
 * ============================================================================
 * * [EQUIVALENCIA BACKEND]: Esto es el equivalente exacto a usar 
 * System.IO.File.ReadAllText() o un FileStream en C#.
 * * [SEGURIDAD]: JavaScript NO puede leer archivos de la PC por su cuenta 
 * (no puede ir a buscar C:\passwords.txt en silencio). Solo funciona si el 
 * usuario te entrega el archivo voluntariamente (<input> o Drag & Drop).
 * * MÉTODOS PRINCIPALES:
 * 1. readAsText(): Devuelve el archivo (.csv, .json) como un String gigante.
 * 2. readAsDataURL(): Transforma un archivo binario (.jpg) en texto Base64.
 */


/**
 * ----------------------------------------------------------------------------
 * EJEMPLO 1: Cargar galería dinámicamente (Vista previa de imagen)
 * Permite al usuario ver su foto de perfil ANTES de mandarla al servidor C#.
 * ----------------------------------------------------------------------------
 */
function configurarInputDeImagen() {
    const inputArchivo = document.getElementById("input-foto");
    const imagenPreview = document.getElementById("img-preview");

    inputArchivo.addEventListener("change", (e) => {
        // 1. Agarramos el archivo físico que el usuario seleccionó
        const archivoFisico = e.target.files[0];

        // 2. Instanciamos el lector (Nuestro "FileStream")
        const lector = new FileReader();

        // 3. ¿Qué hacemos cuando termine de leer?
        lector.onloadend = () => {
            // lector.result contiene el "choclazo" de texto en Base64
            // Lo inyectamos directo en el atributo 'src' de la etiqueta <img>
            imagenPreview.src = lector.result; 
        };

        // 4. Le damos la orden de arrancar a leer el archivo como Base64
        lector.readAsDataURL(archivoFisico);
    });
}


/**
 * ----------------------------------------------------------------------------
 * EJEMPLO 2: Combinar con Drag & Drop (Lectura de texto)
 * Ideal para arrastrar un .csv con datos de lluvia para el sistema AgTech.
 * ----------------------------------------------------------------------------
 */
function configurarZonaDrop() {
    const zonaDrop = document.getElementById("zona-arrastre");

    zonaDrop.addEventListener("drop", (e) => {
        // Evitamos que el navegador intente abrir el archivo en otra pestaña
        e.preventDefault(); 
        
        // 1. Atrapamos el archivo físico desde la "mochila" del evento
        const archivoFisico = e.dataTransfer.files[0]; 
        
        // 2. Instanciamos el lector
        const lector = new FileReader();

        // 3. Configuramos qué hacer al terminar
        lector.onloadend = () => {
            // Como usamos readAsText, el resultado es un String normal
            const textoDelArchivo = lector.result;
            console.log("Archivo leído. Listo para validar y mandar al backend:", textoDelArchivo);
        };

        // 4. Le damos la orden de leer como texto plano
        lector.readAsText(archivoFisico); 
    });
}


/**
 * ----------------------------------------------------------------------------
 * EJEMPLO 3: Barra de progreso (Para archivos pesados)
 * JavaScript es asíncrono, no congela la pantalla mientras lee un archivo de 500MB.
 * ----------------------------------------------------------------------------
 */
function leerArchivoConProgreso(archivoPesado) {
    const lector = new FileReader();
    const barraProgreso = document.getElementById("barra-html");

    // Evento ONPROGRESS: Se dispara constantemente mientras avanza la lectura
    lector.onprogress = (evento) => {
        // Verificamos si el archivo permite calcular su tamaño total
        if (evento.lengthComputable) {
            // Regla de 3 simple para sacar el porcentaje (0 a 100)
            const porcentaje = Math.round((evento.loaded / evento.total) * 100);
            
            // Actualizamos la barra verde en la pantalla
            barraProgreso.value = porcentaje;
            console.log(`Cargando... ${porcentaje}%`);
        }
    };

    // Evento ONLOADEND: Se dispara una sola vez al terminar con éxito
    lector.onloadend = () => {
        console.log("¡Lectura finalizada al 100%!");
        // Acá habilitarías el botón de "Subir al Servidor"
    };

    // Arrancamos la lectura
    lector.readAsDataURL(archivoPesado);
}

/**
 * ============================================================================
 * INDEXED DB: LA BASE DE DATOS NOSQL DEL CLIENTE
 * ============================================================================
 * * @concept CONCEPTOS CLAVE Y DICCIONARIO
 * - IDBRequest: Toda acción en IndexedDB es una petición asíncrona. No devuelven 
 * el dato directamente, devuelven un "Request" al que hay que escucharle el evento 'onsuccess'.
 * - ObjectStore: Es el equivalente exacto a una "Tabla" en SQL Server.
 * - Transaction: Igual que en C#, no podés tocar la base de datos "así nomás". 
 * Tenés que abrir una transacción (de lectura, o lectura/escritura) por seguridad.
 * * @concept LOS EVENTOS PRINCIPALES DE APERTURA
 * - onupgradeneeded: El más importante. Solo se dispara la primera vez que el 
 * usuario entra a tu web, o si le cambiás el número de versión a la BD. 
 * Acá es el ÚNICO lugar donde podés crear las "Tablas" (ObjectStores).
 * - onsuccess: Se dispara cada vez que logramos abrir la BD correctamente.
 * - onerror: Se dispara si el usuario tiene el navegador en modo incógnito estricto 
 * o no hay espacio en el disco.
 * * @concept LOS 4 MÉTODOS CRUD (Operaciones sobre el ObjectStore)
 * 1. add(objeto): Inserta un registro. (Falla si la clave primaria ya existe).
 * 2. get(id): Lee un registro por su clave.
 * 3. put(objeto): UPDATE / UPSERT. Reemplaza el registro entero si el ID existe. 
 * Si el ID no existe, lo crea. Es el equivalente a DbContext.Update() en EF Core.
 * 4. delete(id): Borra el registro de la base.
 */

// Variable global para mantener la conexión viva
let baseDeDatos;

// ============================================================================
// 1. INICIALIZAR LA BASE DE DATOS (El equivalente a tu ConnectionString)
// ============================================================================

// indexedDB.open(nombreDeLaBD, version)
const peticionApertura = indexedDB.open("AgTech_OfflineDB", 1);

// Si es la primera vez (o subió la versión), creamos la estructura (Migración)
peticionApertura.onupgradeneeded = (evento) => {
    const db = evento.target.result;
    
    // Creamos la "tabla" de sensores. 
    // keyPath: "id" es el equivalente a ponerle [Key] en Entity Framework.
    // autoIncrement: true hace que el ID sea autoincremental (1, 2, 3...)
    db.createObjectStore("sensores", { keyPath: "id", autoIncrement: true });
    
    console.log("🛠️ Migración ejecutada: Tabla 'sensores' creada.");
};

// Si abrió bien, guardamos la conexión en nuestra variable global
peticionApertura.onsuccess = (evento) => {
    baseDeDatos = evento.target.result;
    console.log("✅ Base de datos conectada y lista para operar.");
};

peticionApertura.onerror = (evento) => {
    console.error("❌ Error al abrir IndexedDB:", evento.target.error);
};


// ============================================================================
// 2. EL CRUD COMPLETO (Usando Transacciones)
// ============================================================================

/**
 * @function agregarSensor
 * Abre una transacción de lectura/escritura (readwrite) e inserta con add()
 */
function agregarSensor(datosSensor) {
    // 1. Abrimos transacción sobre la tabla "sensores"
    const transaccion = baseDeDatos.transaction(["sensores"], "readwrite");
    const tablaSensores = transaccion.objectStore("sensores");

    // 2. Insertamos. (No le pasamos ID porque le pusimos autoIncrement)
    const peticionAdd = tablaSensores.add(datosSensor);

    peticionAdd.onsuccess = () => console.log("📝 Sensor guardado en la BD local.");
}

/**
 * @function modificarSensor
 * ¡ACÁ ESTÁ EL .PUT()! Recibe el ID existente y los nuevos datos para pisarlos.
 */
function modificarSensor(idSensor, nuevosDatos) {
    const transaccion = baseDeDatos.transaction(["sensores"], "readwrite");
    const tablaSensores = transaccion.objectStore("sensores");

    // Para hacer un PUT, el objeto DEBE incluir el ID original (keyPath), 
    // de lo contrario, el sistema pensará que es un objeto nuevo y creará otro.
    const objetoActualizado = {
        id: idSensor, // Clave primaria
        ...nuevosDatos // Desparramamos el resto de las propiedades
    };

    // Usamos put() para pisar el registro anterior
    const peticionPut = tablaSensores.put(objetoActualizado);

    peticionPut.onsuccess = () => {
        console.log(`🔄 Sensor ${idSensor} modificado exitosamente.`);
    };
    
    peticionPut.onerror = () => {
        console.error("No se pudo modificar.");
    };
}

/**
 * @function leerSensor
 * Abre una transacción de solo lectura (readonly) para mejorar el rendimiento.
 */
function leerSensor(idSensor) {
    const transaccion = baseDeDatos.transaction(["sensores"], "readonly");
    const tablaSensores = transaccion.objectStore("sensores");

    const peticionGet = tablaSensores.get(idSensor);

    peticionGet.onsuccess = (evento) => {
        // El resultado de la búsqueda queda adentro de evento.target.result
        const sensorEncontrado = evento.target.result;
        
        if (sensorEncontrado) {
            console.log("🔍 Sensor encontrado:", sensorEncontrado);
        } else {
            console.log("⚠️ No existe ningún sensor con ese ID.");
        }
    };
}

/**
 * @function eliminarSensor
 */
function eliminarSensor(idSensor) {
    const transaccion = baseDeDatos.transaction(["sensores"], "readwrite");
    const tablaSensores = transaccion.objectStore("sensores");

    const peticionDelete = tablaSensores.delete(idSensor);

    peticionDelete.onsuccess = () => console.log(`🗑️ Sensor ${idSensor} eliminado.`);
}



/**
 * ============================================================================
 * INDEXED DB: LA BASE DE DATOS NOSQL DEL CLIENTE (Refactorizado con Listeners)
 * ============================================================================
 * * @concept CONCEPTOS CLAVE Y DICCIONARIO
 * - IDBRequest: Toda acción en IndexedDB es una petición asíncrona. No devuelven 
 * el dato directamente, devuelven un "Request" al que hay que escucharle el evento 'success'.
 * - ObjectStore: Es el equivalente exacto a una "Tabla" en SQL Server.
 * - Transaction: Igual que en C#, no podés tocar la base de datos "así nomás". 
 * Tenés que abrir una transacción (de lectura, o lectura/escritura) por seguridad.
 * * * @concept LOS EVENTOS PRINCIPALES DE APERTURA (Usando addEventListener)
 * - "upgradeneeded": El más importante. Solo se dispara la primera vez que el 
 * usuario entra a tu web, o si le cambiás el número de versión a la BD. 
 * Acá es el ÚNICO lugar donde podés crear las "Tablas" (ObjectStores).
 * - "success": Se dispara cada vez que logramos abrir la BD o completar un query.
 * - "error": Se dispara si el usuario tiene el navegador en modo incógnito estricto, 
 * no hay espacio, o falla un query.
 * * * @concept LOS 4 MÉTODOS CRUD (Operaciones sobre el ObjectStore)
 * 1. add(objeto): Inserta un registro. (Falla si la clave primaria ya existe).
 * 2. get(id): Lee un registro por su clave.
 * 3. put(objeto): UPDATE / UPSERT. Reemplaza el registro entero si el ID existe. 
 * 4. delete(id): Borra el registro de la base.
 */

// Variable global para mantener la conexión viva
let baseDeDatos;

// ============================================================================
// 1. INICIALIZAR LA BASE DE DATOS (El equivalente a tu ConnectionString)
// ============================================================================

// indexedDB.open(nombreDeLaBD, version)
const peticionApertura = indexedDB.open("AgTech_OfflineDB", 1);

// Si es la primera vez (o subió la versión), creamos la estructura (Migración)
peticionApertura.addEventListener("upgradeneeded", (evento) => {
    const db = evento.target.result;
    
    // Creamos la "tabla" de sensores. 
    db.createObjectStore("sensores", { keyPath: "id", autoIncrement: true });
    
    console.log("🛠️ Migración ejecutada: Tabla 'sensores' creada.");
});

// Si abrió bien, guardamos la conexión en nuestra variable global
peticionApertura.addEventListener("success", (evento) => {
    baseDeDatos = evento.target.result;
    console.log("✅ Base de datos conectada y lista para operar.");
});

peticionApertura.addEventListener("error", (evento) => {
    console.error("❌ Error al abrir IndexedDB:", evento.target.error);
});


// ============================================================================
// 2. EL CRUD COMPLETO (Usando Transacciones y addEventListener)
// ============================================================================

/**
 * @function agregarSensor
 * Abre una transacción de lectura/escritura (readwrite) e inserta con add()
 */
function agregarSensor(datosSensor) {
    // 1. Abrimos transacción sobre la tabla "sensores"
    const transaccion = baseDeDatos.transaction(["sensores"], "readwrite");
    const tablaSensores = transaccion.objectStore("sensores");

    // 2. Insertamos. (No le pasamos ID porque le pusimos autoIncrement)
    const peticionAdd = tablaSensores.add(datosSensor);

    peticionAdd.addEventListener("success", () => {
        console.log("📝 Sensor guardado en la BD local.");
    });
}

/**
 * @function modificarSensor
 * Recibe el ID existente y los nuevos datos para pisarlos usando put().
 */
function modificarSensor(idSensor, nuevosDatos) {
    const transaccion = baseDeDatos.transaction(["sensores"], "readwrite");
    const tablaSensores = transaccion.objectStore("sensores");

    // El objeto DEBE incluir el ID original (keyPath) para hacer un UPDATE
    const objetoActualizado = {
        id: idSensor, 
        ...nuevosDatos 
    };

    const peticionPut = tablaSensores.put(objetoActualizado);

    peticionPut.addEventListener("success", () => {
        console.log(`🔄 Sensor ${idSensor} modificado exitosamente.`);
    });
    
    peticionPut.addEventListener("error", () => {
        console.error("No se pudo modificar.");
    });
}

/**
 * @function leerSensor
 * Abre una transacción de solo lectura (readonly) para mejorar el rendimiento.
 */
function leerSensor(idSensor) {
    const transaccion = baseDeDatos.transaction(["sensores"], "readonly");
    const tablaSensores = transaccion.objectStore("sensores");

    const peticionGet = tablaSensores.get(idSensor);

    peticionGet.addEventListener("success", (evento) => {
        // El resultado de la búsqueda queda adentro de evento.target.result
        const sensorEncontrado = evento.target.result;
        
        if (sensorEncontrado) {
            console.log("🔍 Sensor encontrado:", sensorEncontrado);
        } else {
            console.log("⚠️ No existe ningún sensor con ese ID.");
        }
    });
}

/**
 * @function eliminarSensor
 */
function eliminarSensor(idSensor) {
    const transaccion = baseDeDatos.transaction(["sensores"], "readwrite");
    const tablaSensores = transaccion.objectStore("sensores");

    const peticionDelete = tablaSensores.delete(idSensor);

    peticionDelete.addEventListener("success", () => {
        console.log(`🗑️ Sensor ${idSensor} eliminado.`);
    });
}




/**
 * ============================================================================
 * INTERSECTION OBSERVER: EL VIGILANTE DEL SCROLL
 * ============================================================================
 * * @concept ¿QUÉ ES Y PARA QUÉ SIRVE?
 * - Es una API que detecta de forma súper optimizada cuándo un elemento HTML 
 * entra o sale de la pantalla visible del usuario (el Viewport).
 * - CASOS DE USO REALES: Lazy Loading (no cargar imágenes de Netflix hasta que 
 * el usuario scrollee hacia abajo), Infinite Scroll (como Instagram), o 
 * disparar animaciones cuando vas bajando por la página.
 * * * @diferencia_con_backend
 * - En el backend esto no existe. Es puramente visual. Reemplaza al viejo 
 * y destructivo `window.addEventListener("scroll")`, que consumía muchísima 
 * memoria RAM porque se ejecutaba miles de veces por segundo.
 * * * @concept PARÁMETROS DEL OBSERVER (options)
 * - root: El elemento padre que usamos como marco de referencia. Si se deja 
 * vacío (null), el marco de referencia es la pantalla entera del navegador.
 * - rootMargin: Un margen invisible (ej: "50px"). Permite que la API detecte 
 * al elemento un poco antes de que aparezca realmente en la pantalla.
 * - threshold (Umbral): Va de 0.0 a 1.0. 
 * - 0.0: Avisa apenas asoma un solo píxel del elemento.
 * - 0.5: Avisa cuando la mitad del elemento es visible.
 * - 1.0: Avisa solo cuando el 100% del elemento entró en la pantalla.
 */

// ============================================================================
// EJEMPLO PRÁCTICO: Lazy Loading (Carga perezosa) para tu proyecto AgTech
// ============================================================================

// 1. Configuramos las reglas del vigilante
const opcionesDelObservador = {
    root: null, // Usamos la ventana entera del navegador
    rootMargin: "0px 0px 100px 0px", // Avisame 100px ANTES de que el elemento aparezca
    threshold: 0.2 // Avisame cuando el 20% del elemento ya sea visible
};

// 2. Creamos el Callback (La función que se ejecuta cuando algo entra o sale)
// Recibe una lista de "entradas" (entries), porque un observador puede vigilar muchas cajas a la vez.
const manejarInterseccion = (entradas, observador) => {
    
    // Recorremos todo lo que está siendo vigilado
    entradas.forEach((entrada) => {
        
        // isIntersecting es un booleano (true si entró a la pantalla, false si salió)
        if (entrada.isIntersecting) {
            
            const cajaVisible = entrada.target; // El elemento HTML exacto
            
            console.log("¡El elemento apareció en la pantalla!", cajaVisible);
            
            // Acá haríamos la magia: ej. cargar una imagen pesada
            // cajaVisible.src = cajaVisible.getAttribute("data-src");
            cajaVisible.classList.add("animacion-aparecer");

            // OPTIMIZACIÓN CLAVE: Si ya lo cargamos, le decimos al vigilante que 
            // deje de vigilar este elemento para ahorrar memoria.
            observador.unobserve(cajaVisible); 
        }
    });
};

// 3. Instanciamos el Observador pasándole la función y las opciones
const miVigilante = new IntersectionObserver(manejarInterseccion, opcionesDelObservador);

// 4. Ponemos a trabajar al vigilante (Reemplazo del addEventListener para esta API)
// Seleccionamos todas las cajas que queremos vigilar y las empezamos a observar.
function iniciarVigilancia() {
    const tarjetasDeSensores = document.querySelectorAll(".tarjeta-oculta");

    tarjetasDeSensores.forEach((tarjeta) => {
        // En lugar de usar addEventListener, Intersection Observer usa el método .observe()
        miVigilante.observe(tarjeta);
    });
}

// Ejecutamos la función para que arranque cuando cargue la página
// (Acá sí usamos addEventListener para el evento general de la ventana)
window.addEventListener("DOMContentLoaded", iniciarVigilancia);


/**
 * ============================================================================
 * MATCHMEDIA: MEDIA QUERIES DESDE JAVASCRIPT
 * ============================================================================
 * * @concept ¿QUÉ ES Y PARA QUÉ SIRVE?
 * - Permite evaluar expresiones CSS (como "max-width: 768px") desde JS.
 * - Su gran ventaja es que te permite cambiar la LÓGICA de la aplicación 
 * según la pantalla, no solo el estilo visual.
 * - [CASO REAL]: Si el usuario está en celular, no hacemos el fetch() al 
 * endpoint de videos pesados. Si está en escritorio, sí.
 * * * @concept PARÁMETROS Y OBJETO RETORNADO
 * - window.matchMedia(mediaQueryString): Recibe un string idéntico al que 
 * usarías en CSS. Devuelve un objeto MediaQueryList.
 * - propiedad .matches (Booleano): Te dice "true" si la pantalla actual 
 * cumple la regla en este exacto milisegundo, o "false" si no.
 * * * @concept EVENTOS
 * - "change": Reemplaza al viejo y obsoleto ".addListener()". Se dispara 
 * ÚNICAMENTE en el momento exacto en que la pantalla cruza el límite definido 
 * (ej: cuando pasás de 769px a 768px). No se ejecuta constantemente al 
 * redimensionar, lo que lo hace súper eficiente de memoria.
 */

// ============================================================================
// EJEMPLO PRÁCTICO: Lógica condicional para el Dashboard de AgTech
// ============================================================================

// 1. Definimos la regla que queremos escuchar (Celulares típicos: max-width 768px)
const mediaQueryCelular = window.matchMedia("(max-width: 768px)");

// 2. Creamos la función lógica que va a reaccionar a los cambios
const manejarCambioDePantalla = (evento) => {
    
    // evento.matches es true si la pantalla AHORA mide 768px o menos
    if (evento.matches) {
        console.log("📱 Modo Celular activado.");
        // Acá cambiamos el comportamiento:
        // ej: destruirMapa3D();
        // ej: iniciarMenuHamburguesa();
    } else {
        console.log("💻 Modo Escritorio activado.");
        // Acá restauramos el comportamiento pesado:
        // ej: cargarMapa3D();
        // ej: destruirMenuHamburguesa();
    }
};

// 3. Ejecución inmediata (La foto del momento inicial)
// Cuando la página carga por primera vez, necesitamos chequear cómo está la pantalla AHORA, 
// porque el evento 'change' solo se dispara cuando el usuario estira o achica la ventana después.
manejarCambioDePantalla(mediaQueryCelular);

// 4. El Escuchador de Eventos (El Radar)
// Usamos addEventListener como manda el estándar moderno. Se va a disparar 
// solo cuando el usuario gire el celular de vertical a horizontal, o viceversa.
mediaQueryCelular.addEventListener("change", manejarCambioDePantalla);


/**
 * ============================================================================
 * PAGE VISIBILITY API (El vigilante de la pestaña)
 * ============================================================================
 * * @concept ¿QUÉ ES Y PARA QUÉ SIRVE?
 * - Detecta si el usuario está mirando tu página web en este momento, o si 
 * cambió de pestaña, minimizó el navegador o bloqueó el celular.
 * - [CASOS DE USO REALES]: 
 * 1. YouTube: Pausa el video automáticamente si te vas a otra pestaña.
 * 2. Videojuegos Web: Pone el juego en pausa para que no te maten.
 * 3. Optimización de Red: Frena las peticiones (fetch) cíclicas al backend.
 * * * @concept PROPIEDADES Y EVENTOS CLAVE
 * - document.visibilityState: Te devuelve un String con el estado actual.
 * -> "visible": El usuario está viendo la pestaña.
 * -> "hidden": La pestaña está oculta en segundo plano.
 * - Evento "visibilitychange": A diferencia de otros eventos que van en `window`, 
 * este se escucha estrictamente en el objeto `document`.
 */

// ============================================================================
// EJEMPLO PRÁCTICO: Frenar consumo de API cuando el usuario no mira
// ============================================================================

// Simulamos un proceso pesado, como consultar al servidor C# cada 3 segundos
let intervaloDeConsulta;

const iniciarConsultas = () => {
    intervaloDeConsulta = setInterval(() => {
        console.log("📡 Consultando al backend por nuevos datos...");
    }, 3000);
};

const detenerConsultas = () => {
    clearInterval(intervaloDeConsulta);
    console.log("🛑 Consultas detenidas para ahorrar servidor.");
};

// 1. Definimos la función reaccionaria
const manejarCambioDeVisibilidad = () => {
    
    // Verificamos en qué estado quedó la pestaña
    if (document.visibilityState === "hidden") {
        
        console.log("🙈 El usuario minimizó o cambió de pestaña.");
        detenerConsultas();
        // Acá también harías: miVideo.pause() o juego.pausar()
        
    } else if (document.visibilityState === "visible") {
        
        console.log("👀 El usuario volvió a nuestra web.");
        iniciarConsultas();
        // Acá también harías: miVideo.play() o juego.reanudar()
    }
};

// 2. Atachamos el escuchador usando addEventListener
// ¡Ojo! El evento va colgado de 'document', no de 'window'.
document.addEventListener("visibilitychange", manejarCambioDeVisibilidad);

// Arrancamos el proceso pesado inicial cuando carga la página
iniciarConsultas();


/* ttarget

¿Qué es .target? (El "Sender" de C#)
Si alguna vez armaste aplicaciones de escritorio en C# (WinForms o WPF), te vas a acordar de esto:
private void BotonGuardar_Click(object sender, EventArgs e)

Ese sender es el elemento exacto que disparó el evento. En JavaScript, eso es exactamente evento.target.

Cuando vos usás addEventListener("click", (evento) => ...), el navegador te regala ese objeto evento (una mochila llena de datos sobre el clic). La propiedad evento.target apunta al elemento HTML físico exacto que el usuario tocó.

¿Para qué sirve en la vida real?
Imaginate que tenés una tabla de 100 productos y cada fila tiene un botón "Borrar". No vas a hacer 100 addEventListener (tu página explotaría). Hacés un solo escuchador genérico en la tabla, y usás evento.target para saber exactamente qué botón se tocó y extraer su ID:

JavaScript
tablaProductos.addEventListener("click", (evento) => {
    // ¿El usuario hizo clic exactamente en un botón de borrar?
    if (evento.target.classList.contains("btn-borrar")) {
        // Le sacamos el ID al botón específico que fue tocado
        const idProducto = evento.target.getAttribute("data-id");
        borrarDeLaBase(idProducto);
    }
});


1. ¿Cuándo usar .target y cuándo NO?
La regla de oro para saber si necesitas .target es preguntarte: ¿Me importa de dónde viene exactamente este evento o qué datos tiene adentro?

✅ CUÁNDO SÍ USAR evento.target (En el DOM / HTML)
Lo usás cuando el usuario interactúa con la interfaz gráfica y necesitás "robarle" información al elemento que tocó.

Para sacar valores de un Input:
Si el usuario escribe su nombre, usás el .target para apuntar al input físico y sacar su .value.

Para delegación de eventos:
Como te mostré antes, si tenés 100 botones de "Borrar" en una tabla, hacés un solo escuchador en la tabla y usás evento.target.id para saber a qué botón exacto se le hizo clic.

❌ CUÁNDO NO USAR evento.target
En Web Workers: Como vimos recién, ahí no hay HTML. Usás evento.data para abrir el paquete de información que te mandaron.

En eventos globales de la Ventana/Documento: Si escuchás visibilitychange (para ver si minimizó la pestaña) o un evento de resize (para ver si agrandó la ventana), no te importa el .target. Solo querés ejecutar una función cuando eso pase.

Botones de acción simple: Si tenés un botón de "Cerrar Modal" gigante, y lo único que hace es ocultar un div, podés omitir el .target y simplemente ejecutar la función de ocultar.


*/


/**
 * ============================================================================
 * NOTIFICATIONS API (Alertas Nativas del Sistema Operativo)
 * ============================================================================
 * * @concept ¿QUÉ ES Y PARA QUÉ SIRVE?
 * - Te permite mandar una notificación real al celular o PC del usuario 
 * (esas que aparecen abajo a la derecha en Windows, o en la pantalla de bloqueo 
 * del celular).
 * - NO es un cartelito HTML (como un alert() o un modal de Bootstrap). Es una 
 * alerta nativa del propio sistema operativo.
 * * * @concept EL FLUJO DE PERMISOS (Vital para la seguridad)
 * - Para evitar que las páginas hagan "spam", el navegador prohíbe terminantemente 
 * mandar notificaciones sin preguntarle al usuario primero.
 * - Usamos el método: Notification.requestPermission()
 * - La propiedad Notification.permission te devuelve 3 estados posibles:
 * 1. "granted": El usuario nos dio permiso (Luz verde 🟢).
 * 2. "denied": El usuario nos bloqueó (Luz roja 🔴 - Ya no le podemos preguntar más).
 * 3. "default": Todavía no le preguntamos, o cerró el cartelito con la "X".
 * * * @concept PARÁMETROS DEL OBJETO NOTIFICATION
 * - Se instancia con `new Notification(titulo, opciones)`.
 * - titulo (String): El texto principal en negrita.
 * - opciones (Object): 
 * -> body: El texto secundario o descripción.
 * -> icon: La URL de una imagen/logo para mostrar al lado del texto.
 */

// ============================================================================
// EJEMPLO PRÁCTICO: Alerta de finalización de tarea en el tractor
// ============================================================================

const botonPedirPermiso = document.getElementById("btn-activar-alertas");
const botonSimularAviso = document.getElementById("btn-simular-tarea");

// 1. FUNCIÓN PARA PEDIR PERMISO (Solo se pide una vez)
const solicitarPermisoDeNotificacion = () => {
    
    // Si ya nos dio permiso o ya nos bloqueó, no hacemos nada
    if (Notification.permission === "default") {
        
        // Esto levanta el cartelito del navegador: "Esta página quiere enviarte notificaciones"
        Notification.requestPermission().then((respuesta) => {
            if (respuesta === "granted") {
                console.log("✅ Permiso concedido. Ahora podemos mandarle alertas.");
                // Le tiramos una de bienvenida
                new Notification("¡AgTech Conectado!", {
                    body: "Recibirás alertas del campo en tiempo real.",
                    icon: "/assets/logo-agtech.png"
                });
            } else {
                console.log("❌ El usuario nos denegó el permiso.");
            }
        });
    }
};

// 2. FUNCIÓN PARA DISPARAR LA NOTIFICACIÓN DE TRABAJO
const lanzarNotificacionDeTrabajo = () => {
    
    // Antes de instanciarla, siempre validamos que tengamos la luz verde
    if (Notification.permission === "granted") {
        
        const opcionesAlerta = {
            body: "El tractor del Lote Sur acaba de finalizar la siembra.",
            icon: "/assets/tractor-icon.png"
        };

        // Disparamos la alerta al sistema operativo
        const miAlerta = new Notification("🚜 Tarea Completada", opcionesAlerta);

        // EXTRA: Las notificaciones también pueden escuchar eventos!
        miAlerta.addEventListener("click", () => {
            console.log("El usuario hizo clic en la notificación de Windows.");
            // Podrías redirigirlo a la vista del mapa del tractor:
            // window.location.href = "/mapa/lote-sur";
        });
    } else {
        console.warn("No podemos enviar la notificación porque no tenemos permisos.");
    }
};

// 3. Atachamos los eventos a los botones de nuestra pantalla
botonPedirPermiso.addEventListener("click", solicitarPermisoDeNotificacion);
botonSimularAviso.addEventListener("click", lanzarNotificacionDeTrabajo);


/**
 * ============================================================================
 * WEB WORKERS: MULTIHILOS EN EL FRONTEND (Background Tasks)
 * ============================================================================
 * * @concept LOS 3 TIPOS DE WORKERS (Según la especificación W3C)
 * 1. Dedicated Worker: Un hilo esclavo exclusivo para el script que lo creó (1 a 1).
 * 2. Shared Worker: Un hilo compartido al que pueden hablarle múltiples 
 * pestañas o iframes de tu misma web (Muchos a 1).
 * 3. Service Worker: Un proxy de red. Intercepta peticiones HTTP y maneja el 
 * caché offline (El jefe final).
 * * [DATO NERD]: "Abstract Worker" no es un worker real que puedas usar, es 
 * la "Interfaz" base o clase abstracta (como en C#) de la cual heredan los otros.
 * * * @concept POLÍTICA DE ORIGEN CRUZADO (Same-Origin Policy)
 * Por máxima seguridad, el archivo .js del worker DEBE estar alojado en tu 
 * mismo dominio y puerto. No podés levantar un worker desde 
 * "https://api-externa.com/worker.js". Tampoco funcionan abriendo el .html 
 * con doble clic (file://), necesitas un servidor local (Live Server).
 * * * @concept CONSTRUCTOR Y PARÁMETROS
 * - new Worker("ruta/al/archivo.js", opciones)
 * - opciones (Opcional): Un objeto. El uso más común es { type: "module" } 
 * para avisarle al navegador que tu worker usa import/export nativos de ES6.
 */

// ============================================================================
// EJEMPLO PRÁCTICO: Procesando datos satelitales en AgTech
// ============================================================================

const botonProcesar = document.getElementById("btn-procesar-mapa");
const botonCancelar = document.getElementById("btn-cancelar");

// Variable global para guardar nuestro hilo
let hiloSatelital;

const iniciarTrabajoPesado = () => {
    // 1. Instanciamos el Dedicated Worker (Levantamos el hilo secundario)
    // Le pasamos type: 'module' por si adentro queremos importar otras librerías.
    hiloSatelital = new Worker("worker-procesador.js", { type: "module" });

    // 2. Escuchamos las respuestas que nos manda el Worker 
    // (Reemplazo del viejo .onmessage)
    hiloSatelital.addEventListener("message", (evento) => {
        // La data que nos mandó el worker siempre viaja en la propiedad "data"
        const resultadoFinal = evento.data;
        
        console.log("✅ El hilo secundario terminó y nos devolvió esto:", resultadoFinal);
        // Acá recién actualizaríamos la pantalla: document.getElementById("resultado").innerText = ...
    });

    // También es buena práctica escuchar si el hilo paralelo explotó por un error
    hiloSatelital.addEventListener("error", (error) => {
        console.error("❌ El worker crasheó:", error.message);
    });

    // 3. Método postMessage(): Le mandamos datos al Worker para que arranque a trabajar.
    // Podés mandarle strings, arrays, o un JSON gigante (como el Excel del productor).
    console.log("Despachando tarea al hilo secundario...");
    hiloSatelital.postMessage({ accion: "iniciarAnalisis", hectareas: 5000 });
};

const cancelarTrabajo = () => {
    if (hiloSatelital) {
        // 4. Método terminate(): Asesina el hilo secundario instantáneamente.
        // C# Equivalent: CancellationTokenSource.Cancel() o Thread.Abort().
        // Libera la RAM de inmediato.
        hiloSatelital.terminate();
        console.log("🛑 Hilo secundario destruido por el usuario.");
    }
};

// Atachamos los eventos a la interfaz
botonProcesar.addEventListener("click", iniciarTrabajoPesado);
botonCancelar.addEventListener("click", cancelarTrabajo);


/**
 * ============================================================================
 * JSON.parse() vs response.json() (La batalla de las conversiones)
 * ============================================================================
 * * @concept 1. JSON.parse(string) -> [Uso Local / Memoria RAM]
 * - ¿CÓMO FUNCIONA?: Es un proceso SÍNCRONO (bloqueante). Agarra un texto 
 * que ya tenés físicamente descargado en tu memoria y lo transforma al instante.
 * - ¿CUÁNDO SE USA?: 
 * 1. Al leer datos del localStorage (que siempre devuelve strings).
 * 2. Si tenés un string quemado (hardcodeado) en tu código.
 * 3. Al recibir mensajes de texto plano por un Web Socket.
 * * * @concept 2. respuesta.json() -> [Uso de Red / Fetch API]
 * - ¿CÓMO FUNCIONA?: Es un proceso ASÍNCRONO. La respuesta de un fetch() 
 * no llega toda junta de golpe, llega como un "Stream" (un chorro de bytes) 
 * a través de internet. El método .json() le dice al navegador: "Esperá a 
 * que termine de descargar el último byte, y cuando termines, convertilo a objeto".
 * - ¿CUÁNDO SE USA?: ÚNICAMENTE cuando usás la API fetch() para comunicarte 
 * con tu backend.
 */

// ============================================================================
// EJEMPLO 1: Usando JSON.parse() (Lectura Local)
// ============================================================================
const recuperarDatosLocales = () => {
    
    // 1. Fuimos a buscar algo al almacenamiento del navegador
    const stringGuardado = localStorage.getItem("usuario_logeado"); 
    // stringGuardado se ve así: '{"id": 42, "nombre": "Admin"}'

    if (stringGuardado) {
        // 2. Como el texto YA ESTÁ en la compu, lo parseamos al instante
        const usuario = JSON.parse(stringGuardado);
        console.log("¡Bienvenido localmente!", usuario.nombre);
    }
};


// ============================================================================
// EJEMPLO 2: Usando .json() (Petición de Red a tu API)
// ============================================================================
const traerDatosDelBackend = async () => {
    try {
        // 1. Disparamos la petición por la red
        const respuestaHttp = await fetch("https://tu-api.com/usuarios/42");

        // ¡OJO ACÁ! "respuestaHttp" NO ES EL JSON. Es la valija HTTP entera.
        // Adentro tiene el código 200, los headers, la IP... y el "cuerpo" que 
        // todavía se está descargando en pedacitos.

        // 2. Usamos .json() con AWAIT para esperar que termine de descargar 
        // ese cuerpo y nos lo entregue como un objeto limpito.
        const usuario = await respuestaHttp.json();

        console.log("¡Usuario recibido desde C#!:", usuario.nombre);

    } catch (error) {
        console.error("Falló la conexión o el backend mandó un JSON inválido", error);
    }
};

/**
 * ============================================================================
 * SERIALIZACIÓN Y DESERIALIZACIÓN EN FETCH
 * ============================================================================
 */

const guardarNuevoUsuario = async () => {
    
    // 1. Tenemos un objeto JS normal (memoria RAM)
    const usuarioNuevo = {
        nombre: "Juan",
        rol: "Admin"
    };

    try {
        const respuestaHttp = await fetch("https://tu-api.com/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            
            // 🔴 SERIALIZAMOS: Convertimos el objeto a texto para que viaje por internet
            body: JSON.stringify(usuarioNuevo) 
        });

        if (respuestaHttp.ok) {
            // 🟢 DESERIALIZAMOS: El servidor nos responde con el usuario guardado (y su nuevo ID).
            // Convertimos ese texto de respuesta de vuelta a un objeto JS.
            const usuarioGuardado = await respuestaHttp.json();
            
            console.log("Éxito. El nuevo ID en la base de datos es:", usuarioGuardado.id);
        }
    } catch (error) {
        console.error("Error de red:", error);
    }
};


/**
 * ============================================================================
 * CONSOLA MAESTRA DEL NAVEGADOR
 * ============================================================================
 */

const escanearNavegador = async () => {

    console.log("==========================================");
    console.log(" 1. PROPIEDADES DIRECTAS (Sin parámetros)");
    console.log("==========================================");

    // Las que mienten o son legacy
    console.log("Nombre del código:", navigator.appCodeName);
    console.log("Nombre oficial:", navigator.appName);
    console.log("Motor de renderizado:", navigator.product);
    console.log("Sistema Operativo viejo:", navigator.platform);
    
    // Las útiles
    console.log("Internet activo:", navigator.onLine);
    console.log("Núcleos del procesador:", navigator.hardwareConcurrency);
    console.log("Idioma principal:", navigator.language);
    console.log("Idiomas aceptados:", navigator.languages);
    console.log("Cookies habilitadas:", navigator.cookieEnabled);
    
    // Objetos con propiedades anidadas
    if (navigator.connection) {
        console.log("Tipo de red (4g/3g):", navigator.connection.effectiveType);
    }

    console.log("\n==========================================");
    console.log(" 2. MÉTODOS COMPLEJOS (Con parámetros)");
    console.log("==========================================");

    // --- A. API DE PERMISOS ---
    try {
        // Parámetro: Objeto JSON con el nombre del permiso a consultar
        const estadoPermisoGps = await navigator.permissions.query({ name: 'geolocation' });
        console.log("Permiso de GPS actual:", estadoPermisoGps.state); // "granted", "denied" o "prompt"
    } catch (e) {
        console.log("El navegador no soporta la API de Permisos.");
    }

    // --- B. API DE GEOLOCALIZACIÓN ---
    if (navigator.geolocation) {
        // Parámetros: Función de éxito, Función de error, Opciones de configuración
        navigator.geolocation.getCurrentPosition(
            (posicion) => console.log("Latitud exacta:", posicion.coords.latitude), // Éxito
            (error) => console.log("Fallo al obtener GPS:", error.message),         // Error
            { enableHighAccuracy: true, timeout: 5000 }                             // Opciones (Parámetro)
        );
    }

    // --- C. API DE SERVICE WORKER ---
    if ('serviceWorker' in navigator) {
        // Parámetro: String con la ruta del archivo que va a manejar el caché offline
        // navigator.serviceWorker.register('/service-worker.js')
        //    .then(registro => console.log("Service Worker instalado", registro.scope));
        console.log("Soporta Service Workers para funcionar sin internet.");
    }
};

// Disparamos la función para ver el resultado en la consola
escanearNavegador();

/**
 * ============================================================================
 * CONSOLA MAESTRA: LAS 17 PROPIEDADES DEL OBJETO NAVIGATOR
 * ============================================================================
 */

const escanearNavegadorCompleto = async () => {

    console.log("======================================================");
    console.log(" A) PROPIEDADES LEGACY / INFORMATIVAS (Strings estáticos)");
    console.log("======================================================");

    console.log("1. appCodeName: ", navigator.appCodeName); // Ej: "Mozilla"
    console.log("2. appName: ", navigator.appName);         // Ej: "Netscape"
    console.log("3. appVersion: ", navigator.appVersion);   // String gigante con la versión
    console.log("4. userAgent: ", navigator.userAgent);     // Identificador cruzado del navegador
    console.log("5. platform: ", navigator.platform);       // Ej: "Win32"
    console.log("6. product: ", navigator.product);         // Ej: "Gecko"

    console.log("\n======================================================");
    console.log(" B) PROPIEDADES DE ENTORNO Y HARDWARE (Las más útiles)");
    console.log("======================================================");

    console.log("7. hardwareConcurrency: ", navigator.hardwareConcurrency); // Núcleos de CPU
    console.log("8. onLine: ", navigator.onLine);                         // true / false
    console.log("9. language: ", navigator.language);                     // Ej: "es-AR"
    console.log("10. languages: ", navigator.languages);                  // Array: ["es-AR", "es", "en"]
    console.log("11. cookieEnabled: ", navigator.cookieEnabled);          // true / false

    console.log("\n======================================================");
    console.log(" C) COLECCIONES MULTIMEDIA (Casi obsoletas)");
    console.log("======================================================");

    console.log("12. mimeTypes: ", navigator.mimeTypes); // Formatos de archivo soportados
    console.log("13. plugins: ", navigator.plugins);     // Complementos instalados (PDF, Flash)

    console.log("\n======================================================");
    console.log(" D) OBJETOS Y APIS COMPLEJAS (Requieren métodos/parámetros)");
    console.log("======================================================");

    // 14. Connection (API de Red)
    console.log("14. connection: ", navigator.connection);
    
    // 15. Geolocation (API de GPS)
    console.log("15. geolocation: ", navigator.geolocation);
    
    // 16. Permissions (API de Seguridad)
    console.log("16. permissions: ", navigator.permissions);
    
    // 17. Service Worker (API Offline / Caché)
    console.log("17. serviceWorker: ", navigator.serviceWorker);


    // ---------------------------------------------------------
    // RECORDATORIO DE CÓMO SE EJECUTAN LOS DE LA SECCIÓN "D":
    // ---------------------------------------------------------
    /*
        navigator.geolocation.getCurrentPosition(exito, error, opciones);
        
        await navigator.permissions.query({ name: 'geolocation' });
        
        navigator.serviceWorker.register('/mi-worker.js');
    */
};

// Disparamos la función
escanearNavegadorCompleto();

/**
 * ============================================================================
 * NAVIGATOR: SEND BEACON & VIBRATE
 * ============================================================================
 */

const btnEmergencia = document.getElementById("btn-alerta");

// ============================================================================
// 1. VIBRATE: Feedback Hápitco en el celular
// ============================================================================
const lanzarAlertaCelular = () => {
    
    // Verificamos si el dispositivo tiene motor de vibración
    if (navigator.vibrate) {
        // Le pasamos un Array: [Vibra, Pausa, Vibra, Pausa, Vibra] (en milisegundos)
        // Esto hace un patrón de "Alerta SOS" (corto-corto-largo)
        navigator.vibrate([200, 100, 200, 100, 800]);
        console.log("📳 El celular del productor está vibrando...");
    } else {
        console.log("Tu hardware no soporta vibración (seguro estás en PC).");
    }
};


// ============================================================================
// 2. SEND BEACON: El mensajero de la muerte (Salvar datos al cerrar)
// ============================================================================
// Escuchamos el evento 'visibilitychange' (recomendado) o 'unload'
document.addEventListener("visibilitychange", () => {
    
    // Si el estado es 'hidden', significa que cerró la pestaña o cambió de app
    if (document.visibilityState === "hidden") {
        
        // Agarramos los datos que el usuario dejó a medio escribir
        const reporteIncompleto = JSON.stringify({
            lote: "Lote Sur",
            borrador: "Detecté una plaga de langostas en el sector..."
        });

        // sendBeacon es síncrono, no usa await. Devuelve true si el navegador 
        // lo metió en la cola de envío con éxito.
        // NOTA: Es MUCHO más seguro que usar fetch() acá adentro.
        const exito = navigator.sendBeacon(
            "https://tu-api-csharp.com/api/borradores/auto-save", 
            reporteIncompleto
        );

        if (exito) {
            console.log("📡 Borrador enviado de emergencia al servidor C#");
        }
    }
});

// Atachamos el evento de vibración al botón
if (btnEmergencia) btnEmergencia.addEventListener("click", lanzarAlertaCelular);

// NOTA sobre el que ya vimos:
// navigator.registerProtocolHandler("web+agtech", "url=%s") ya está en tu machete anterior!


/**
 * ============================================================================
 * MEMOIZATION: CACHÉ EN MEMORIA PARA FUNCIONES PESADAS
 * ============================================================================
 * * @concept ¿CÓMO FUNCIONA?
 * Es una "Función de Orden Superior" (Higher-Order Function). Es una función 
 * que recibe OTRA función como parámetro, y te devuelve una versión "mejorada" 
 * (con superpoderes de caché) de esa misma función.
 * * * @concept EL PATRÓN CLOSURE (La clave del éxito)
 * Al meter el 'diccionario' ADENTRO del creador, cada vez que memoizamos 
 * una función distinta, se crea una burbuja de memoria privada y exclusiva 
 * para esa función. Nadie más la puede tocar.
 */

// ============================================================================
// EL MOTOR DE MEMOIZACIÓN (Corregido y Profesional)
// ============================================================================

const crearFuncionConCache = (funcionOriginal) => {
    
    // 1. LA MEMORIA PRIVADA (Reemplazo del 'let cache = []' global)
    // Usamos un objeto literal vacío que actuará como nuestro Dictionary de C#
    const memoriaCache = {};

    // 2. Retornamos la nueva función "envoltorio"
    return (parametro) => {
        
        // Creamos la llave del diccionario convirtiendo el parámetro a texto
        const llave = parametro.toString();

        // CACHE MISS: Si nunca en la vida calculamos esto...
        if (memoriaCache[llave] === undefined) {
            
            console.log(`⏳ Calculando proceso pesado para: [${llave}]...`);
            
            // Ejecutamos la función original y guardamos el resultado
            memoriaCache[llave] = funcionOriginal(parametro);
        } else {
            // CACHE HIT: Si ya lo teníamos guardado...
            console.log(`⚡ ¡Respuesta instantánea desde RAM para: [${llave}]!`);
        }

        // Devolvemos lo que esté en memoria
        return memoriaCache[llave];
    };
};

// ============================================================================
// EJEMPLO PRÁCTICO: Optimizando el cálculo de rindes
// ============================================================================

// A. Tenemos una función estúpidamente lenta que congela el procesador
const calcularRindeHistoricoPesado = (codigoLote) => {
    let calculoComplejo = 0;
    // Simulamos un proceso matemático brutal
    for (let i = 0; i < 90000000; i++) {
        calculoComplejo += i;
    }
    return `El rinde del ${codigoLote} es ${calculoComplejo}`;
};

// B. Pasamos la función lenta por nuestra máquina de caché
const calcularRindeOptimizado = crearFuncionConCache(calcularRindeHistoricoPesado);


// C. LA PRUEBA DE FUEGO

// Llamada 1: El parámetro es "Lote-Norte". Como el caché está vacío, 
// va a tardar un rato largo en calcular (Cache Miss).
const resultado1 = calcularRindeOptimizado("Lote-Norte"); 

// Llamada 2: Le pasamos el MISMO parámetro. 
// ¡Magia! Evita el bucle for gigante y devuelve el string al instante (Cache Hit).
const resultado2 = calcularRindeOptimizado("Lote-Norte"); 

// Llamada 3: Cambiamos el parámetro a "Lote-Sur".
// Vuelve a tardar, porque es una llave nueva en el diccionario.
const resultado3 = calcularRindeOptimizado("Lote-Sur");

/**
 * ============================================================================
 * CACHE API: EL ALMACÉN DE RED DEL NAVEGADOR
 * ============================================================================
 * * @concept DEFINICIÓN Y USOS
 * Mecanismo de almacenamiento del navegador dedicado a guardar peticiones y 
 * respuestas HTTP. Es el corazón de las aplicaciones web offline.
 * Permite interceptar las llamadas al servidor C# y responder con archivos 
 * locales para ahorrar datos móviles y tiempo de carga.
 * * * @concept MÉTODOS PRINCIPALES
 * - caches.open('nombre'): Abre un "cajón" específico de caché. Si no existe, lo crea.
 * - cache.match(request): Busca si ya tenemos guardada una respuesta para esa URL.
 * - cache.add(request): [El de la captura]. Es un método 2x1. Automáticamente 
 * dispara un fetch() a esa URL, y si el servidor responde con un 200 OK, 
 * agarra ese archivo y lo guarda en el caché.
 */

// ============================================================================
// EJEMPLO PRÁCTICO: Guardando los recursos base de la app AgTech
// ============================================================================

const btnInstalarApp = document.getElementById("btn-cachear-todo");

const inicializarCacheDeArchivos = async () => {
    
    try {
        console.log("⏳ Abriendo el almacén de caché...");
        
        // 1. Abrimos (o creamos) nuestro espacio de almacenamiento.
        // Las buenas prácticas dicen que hay que ponerle un número de versión (v1).
        const miCache = await caches.open("agtech-archivos-v1");

        // 2. USO DE CACHE.ADD() (El que marca tu diapositiva)
        // Va hasta el servidor, descarga la foto, y la guarda físicamente en el disco.
        await miCache.add("/assets/mapa-lote-sur.png");
        console.log("✅ Mapa satelital cacheado individualmente.");

        // EXTRA: addAll() es el hermano mayor. 
        // Ideal para la carga inicial: le pasamos un array con todas las rutas clave.
        const archivosCore = [
            "/index.html",
            "/estilos.css",
            "/main.js",
            "/offline.html" // Una pantallita de error por si falla todo
        ];

        await miCache.addAll(archivosCore);
        console.log("✅ Todos los archivos base guardados. La app ya puede funcionar sin internet.");

    } catch (error) {
        console.error("❌ Falló la instalación en caché:", error);
    }
};

// ============================================================================
// CÓMO SE USA DESPUÉS (El Interceptor)
// ============================================================================
const solicitarRecurso = async (url) => {
    
    // 1. Primero buscamos en nuestro disco duro local
    const respuestaCacheada = await caches.match(url);
    
    if (respuestaCacheada) {
        console.log("📦 ¡Archivo encontrado en el Caché! Sirviendo a la velocidad de la luz.");
        return respuestaCacheada;
    }

    // 2. Si no estaba guardado, recién ahí gastamos datos para ir a internet
    console.log("🌐 Archivo no encontrado. Yendo a buscarlo al servidor...");
    return await fetch(url);
};

// Atachamos el evento
if (btnInstalarApp) btnInstalarApp.addEventListener("click", inicializarCacheDeArchivos);


/**
 * 
 * 
 * 1. Almacenamiento Simple (Cadenas de Texto)
Son sincrónicos (bloquean el hilo principal) y guardan poco peso (aprox. 5MB). Solo aceptan Strings, por lo que si guardás objetos, tenés que usar JSON.stringify().

Local Storage: Persiste para siempre (hasta que el usuario lo borre a mano).

¿Qué se guarda acá? Configuraciones visuales y preferencias del usuario que no son críticas.

Ejemplo: modo_oscuro = true, idioma = "es-AR", o el ID del último lote que el usuario visitó para mostrárselo rápido al volver a entrar mañana.

Session Storage: Se destruye instantáneamente cuando el usuario cierra la pestaña.

¿Qué se guarda acá? Datos temporales de la sesión actual de navegación.

Ejemplo: Si tenés un formulario de carga de sensores que está dividido en 3 pantallas distintas, vas guardando los datos acá paso por paso. Si el tipo cierra la pestaña por error y la vuelve a abrir, tiene que arrancar de cero.

2. Bases de Datos y Estructuras Complejas
Son asincrónicos (usan promesas/callbacks, no congelan la pantalla) y tienen límites de almacenamiento inmensos (depende del disco duro del cliente).

IndexedDB: Es tu base de datos NoSQL local.

¿Qué se guarda acá? Cantidades masivas de datos estructurados, arrays gigantes, o archivos Binarios/Blobs. Es el corazón del modo Offline.

Ejemplo: Si el productor se va al campo sin 4G, acá guardás los últimos 10.000 registros de lluvia y los reportes nuevos que él vaya redactando, para sincronizarlos con tu backend en C# cuando vuelva a tener señal.

3. Red, Seguridad y Rendimiento
Estas son herramientas que interactúan directamente con las peticiones HTTP (fetch).

Cookies: Son diminutas (4KB máximo), pero tienen una particularidad: viajan automáticamente al servidor en cada petición HTTP.

¿Qué se guarda acá? Exclusivamente datos de Autenticación y Seguridad.

Ejemplo: El Token JWT o el Session ID que te devuelve tu backend en C# cuando el usuario hace login. No guardes configuraciones ni arrays acá, porque harías que cada fetch pese muchísimo más, arruinando la red.

Cache Storage: Es el proxy inverso del navegador. Guarda parejas exactas de Petición/Respuesta.

¿Qué se guarda acá? Archivos físicos enteros.

Ejemplo: Tu index.html, tus archivos .css, tus logos, tus .js y fuentes tipográficas. Gracias a esto, la app carga en 0.1 segundos y funciona sin internet.

💀 4. El Cementerio (¡NO LOS USES!)
En la captura del DevTools aparecen dos herramientas que son reliquias del pasado. Google las sigue mostrando por retrocompatibilidad, pero están Deprecadas (Dadas de baja) por la W3C.

Web SQL: Era un intento de meter un motor SQLite adentro del navegador. Fracasó porque solo lo soportaba Chrome y Safari. Fue reemplazado totalmente por IndexedDB.

Application Cache (AppCache): Fue el primer intento de hacer páginas offline con un archivo .manifest. Era tan difícil de actualizar y tan propenso a romper páginas enteras que lo eliminaron. Fue reemplazado totalmente por Service Workers + Cache Storage.
 */


/**
 * ============================================================================
 * MAIN.JS: REGISTRANDO EL SERVICE WORKER
 * ============================================================================
 */

const registrarServiceWorker = async () => {
    
    // 1. Verificamos que el navegador soporte esta tecnología
    if ('serviceWorker' in navigator) {
        try {
            // 2. REGISTER(): Instalamos el archivo proxy. 
            // Esto se hace una sola vez. El navegador lo guarda y lo deja corriendo.
            const registro = await navigator.serviceWorker.register('/sw.js');
            console.log("✅ Service Worker registrado con éxito. Scope:", registro.scope);

            // 3. POSTMESSAGE(): Comunicación bidireccional
            // Le mandamos un mensaje al proxy (útil para pasarle configuraciones)
            if (navigator.serviceWorker.controller) {
                navigator.serviceWorker.controller.postMessage({
                    tipo: 'CONFIG_AGTECH',
                    loteDefault: 'Sur'
                });
            }

        } catch (error) {
            console.error("❌ Falló el registro del Service Worker:", error);
        }
    } else {
        console.warn("Tu navegador es obsoleto, no soporta modo Offline.");
    }
};

// Escuchamos los mensajes que el proxy nos manda de vuelta
navigator.serviceWorker.addEventListener('message', (evento) => {
    console.log("📩 Mensaje recibido desde el Service Worker:", evento.data);
});

// Arrancamos el registro apenas carga la página
registrarServiceWorker();


/**
 * ============================================================================
 * SW.JS: EL INTERCEPTOR Y MODO OFFLINE (El Middleware)
 * ============================================================================
 * @concept FETCH EVENT: Intercepta cada maldita petición HTTP de tu web.
 * @concept CHAT REALTIME: Los SW son la base de las Push Notifications. 
 * Como el SW se queda corriendo en segundo plano en Windows/Android, puede 
 * recibir un mensaje de chat desde tu backend en C# ¡incluso si el usuario 
 * tiene la pestaña de Chrome cerrada!
 */

const CACHE_NAME = "agtech-offline-v1";

// Archivos críticos que necesitamos para que el sistema abra sin internet
const ARCHIVOS_BASE = [
    "/",
    "/index.html",
    "/estilos.css",
    "/main.js",
    "/assets/logo.png"
];

// ============================================================================
// EVENTO 1: INSTALL (Se ejecuta la primera vez que se descarga el sw.js)
// ============================================================================
self.addEventListener("install", (evento) => {
    console.log("⚙️ SW: Instalando proxy...");
    
    // Pausamos la instalación hasta que terminemos de guardar todo en caché
    evento.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("📦 SW: Guardando archivos base en caché...");
            return cache.addAll(ARCHIVOS_BASE);
        })
    );
});

// ============================================================================
// EVENTO 2: ACTIVATE (Se usa para borrar cachés viejos si actualizás la app)
// ============================================================================
self.addEventListener("activate", (evento) => {
    console.log("🚀 SW: Activado y controlando la página.");
});

// ============================================================================
// EVENTO 3: FETCH (El Interceptor - La Magia Offline)
// ============================================================================
self.addEventListener("fetch", (evento) => {
    
    // respondWith le dice al navegador: "Callate, yo me encargo de responder esto"
    evento.respondWith(
        
        async function() {
            try {
                // ESTRATEGIA: "Network First" (Primero intentamos ir a C#)
                // Si hay internet, fetch() funciona perfecto y nos trae datos frescos
                const respuestaRed = await fetch(evento.request);
                return respuestaRed;

            } catch (error) {
                // Si el fetch() explota, significa que EL PRODUCTOR NO TIENE INTERNET (o el backend se cayó)
                console.warn("🔴 Sin conexión. Interceptando petición y buscando en Caché...");
                
                // Buscamos la URL solicitada en nuestro disco duro local
                const respuestaCache = await caches.match(evento.request);
                
                if (respuestaCache) {
                    return respuestaCache; // Devolvemos el archivo cacheado
                }

                // Si no hay internet y tampoco lo teníamos guardado en caché...
                // Devolvemos una página de error o un JSON falso de rescate.
                return new Response("Estás completamente desconectado y sin datos guardados.");
            }
        }()
    );
});

// ============================================================================
// EVENTO 4: MESSAGE (Para hablar con main.js)
// ============================================================================
self.addEventListener("message", (evento) => {
    console.log("📩 SW: Recibí una orden del hilo principal:", evento.data);
    
    if (evento.data.tipo === 'CONFIG_AGTECH') {
        // Le devolvemos una confirmación
        evento.source.postMessage("Configuración recibida. Listo para trabajar.");
    }
});




/**
 * ============================================================================
 * MACHETE DEFINITIVO: COOKIES EN JAVASCRIPT Y SEGURIDAD BACKEND
 * ============================================================================
 * @concept ¿QUÉ SON?
 * Pequeños archivos de texto (Max 4KB) que el navegador guarda. Su superpoder
 * es que se adjuntan automáticamente en el Header de CADA petición que le hacés 
 * a tu servidor C#.
 * * @concept LOS TIPOS Y ATRIBUTOS DE COOKIES (Seguridad)
 * - Session Cookie: No tiene fecha de expiración. Se borra sola al cerrar Chrome.
 * - Persistent Cookie: Tiene 'Expires' o 'Max-Age'. Sobrevive reinicios de PC.
 * - Secure: Si le ponés esto, la cookie SOLO viaja por HTTPS. En HTTP plano no se envía.
 * - SameSite (Lax / Strict / None): Protege contra ataques CSRF (Cross-Site Request Forgery). 
 * Le dice al navegador: "Solo enviá esta cookie si la petición va a MI propio dominio".
 * * 🛑 EL ATRIBUTO JEFE: HttpOnly (VITAL PARA TU C#)
 * Si tu backend en C# manda una Cookie con la bandera 'HttpOnly = true' (por 
 * ejemplo, el Token de Sesión), el navegador la guarda y la envía en cada fetch, 
 * PERO le oculta esa cookie a JavaScript. Si hacés document.cookie, NO LA VES. 
 * Esto evita que un hacker robe los tokens usando ataques XSS en tu frontend.
 */

// ============================================================================
// EL CRUD DE COOKIES (Porque document.cookie nativo es un asco)
// ============================================================================

/**
 * 1. CREAR O ACTUALIZAR UNA COOKIE
 * @param {string} nombre - La llave de la cookie
 * @param {string} valor - El contenido (texto puro)
 * @param {number} dias - Cuántos días va a vivir (Si no le pasás, es de Sesión)
 */
const crearCookie = (nombre, valor, dias) => {
    let expiracion = "";
    
    if (dias) {
        const fecha = new Date();
        // Le sumamos los días a la fecha actual
        fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
        expiracion = "; expires=" + fecha.toUTCString();
    }
    
    // Armamos el string final. Le agregamos SameSite=Lax por seguridad estándar.
    // Ojo: Si quisiéramos 'Secure', habría que agregarle "; Secure" al final.
    document.cookie = `${nombre}=${encodeURIComponent(valor)}${expiracion}; path=/; SameSite=Lax`;
    console.log(`🍪 Cookie guardada: ${nombre}`);
};

/**
 * 2. LEER UNA COOKIE ESPECÍFICA
 * El problema de JS es que document.cookie devuelve TODAS juntas así: "user=Fede; tema=dark; id=4"
 * Hay que separarlas a mano.
 */
const leerCookie = (nombreBuscar) => {
    
    const nombreCodificado = nombreBuscar + "=";
    const arrayCookies = document.cookie.split(';'); // Cortamos el string grande por punto y coma
    
    for (let i = 0; i < arrayCookies.length; i++) {
        let cookieActual = arrayCookies[i].trim(); // Limpiamos espacios en blanco
        
        // Si el pedacito de texto arranca con el nombre que buscamos...
        if (cookieActual.indexOf(nombreCodificado) === 0) {
            // Devolvemos solo el valor (lo que está después del "=")
            const valor = cookieActual.substring(nombreCodificado.length, cookieActual.length);
            return decodeURIComponent(valor);
        }
    }
    
    return null; // Si no existe, devuelve nulo
};

/**
 * 3. BORRAR UNA COOKIE
 * En JavaScript no existe el comando "borrar". Lo que se hace es sobreescribirla 
 * poniéndole una fecha de vencimiento que ya pasó (ej: año 1970). 
 * El navegador la ve vencida y la destruye al instante.
 */
const borrarCookie = (nombre) => {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    console.log(`🗑️ Cookie eliminada: ${nombre}`);
};

// ============================================================================
// EJEMPLO DE USO EN TU SISTEMA AGTECH
// ============================================================================

const probarSistemaDeCookies = () => {
    
    console.log("--- TEST DE COOKIES ---");

    // 1. Guardamos el ID del último lote visitado para que dure 7 días
    crearCookie("ultimo_lote", "Lote-Sur-99", 7);

    // 2. Guardamos una configuración temporal (se borra al cerrar el navegador)
    crearCookie("modo_lectura", "activado");

    // 3. Leemos una cookie para usarla en nuestra lógica
    const loteGuardado = leerCookie("ultimo_lote");
    
    if (loteGuardado) {
        console.log(`📡 El productor estaba viendo el ${loteGuardado}. Cargando datos...`);
    } else {
        console.log("📡 No hay historial. Cargando Dashboard principal.");
    }

    // Mostrar el string crudo y feo que maneja JS por debajo:
    console.log("String crudo del navegador:", document.cookie);
};

// probarSistemaDeCookies();

/**
 * ============================================================================
 * MACHETE: API SCREEN Y CONTROL DE ORIENTACIÓN
 * ============================================================================
 * @concept ¿QUÉ ES EL OBJETO SCREEN?
 * Es una propiedad global (window.screen) que contiene los datos del monitor o 
 * pantalla física donde se está reproduciendo el navegador.
 * * @concept LA DIFERENCIA CLAVE (Pregunta de entrevista)
 * - window.innerWidth: Mide cuánto mide la pestaña de Chrome donde está tu web.
 * - screen.width: Mide de punta a punta el monitor físico (ej: 1920x1080), 
 * sin importar si tu Chrome está minimizado o en un cuadradito.
 */

// ============================================================================
// 1. LECTURA DE RESOLUCIÓN Y HARDWARE
// ============================================================================

const auditarPantallaDelUsuario = () => {
    
    console.log("--- RADIOGRAFÍA DEL MONITOR ---");

    // 1. Resolución Total Física
    console.log(`Resolución Total: ${screen.width}x${screen.height} píxeles.`);

    // 2. Resolución Disponible (La verdadera área de trabajo)
    // availHeight le RESTA la barra de tareas de Windows o el Dock de Mac. 
    // Es el espacio real que tenés si ponés la ventana maximizada.
    console.log(`Resolución Útil (Sin barra de tareas): ${screen.availWidth}x${screen.availHeight} píxeles.`);

    // 3. Profundidad de Color (Casi siempre es 24 o 32)
    // Útil si estás armando un juego en <canvas> o renderizando mapas topográficos pesados
    console.log(`Profundidad de color: ${screen.colorDepth} bits.`);
};


// ============================================================================
// 2. SCREEN ORIENTATION API (La Joya para Móviles)
// ============================================================================

/**
 * Imaginate que armaste un Dashboard espectacular lleno de gráficos de lluvia. 
 * En vertical (portrait) se ve horrible, necesitas que el usuario sí o sí lo 
 * vea con el celular acostado (landscape).
 */

const bloquearPantallaHorizontal = async () => {
    
    // 1. Leemos cómo está el celular ahora mismo
    // Puede ser: "portrait-primary", "landscape-primary", etc.
    const orientacionActual = screen.orientation.type;
    console.log(`El celular ahora está en modo: ${orientacionActual}`);

    // 2. Intentamos FORZAR el giro de la pantalla
    try {
        // OJO: Por seguridad de los navegadores, lock() devuelve una Promesa
        // y a menudo exige que la página esté en Pantalla Completa (Fullscreen API)
        // para dejarte bloquear el giro.
        await screen.orientation.lock("landscape");
        console.log("🔒 Pantalla bloqueada en horizontal. ¡El tractor puede saltar tranquilo!");
        
    } catch (error) {
        // En PC de escritorio suele fallar (porque no podés girar un monitor de PC por código)
        // O falla si el usuario no interactuó con la pantalla antes.
        console.warn("❌ No se pudo bloquear la orientación:", error.message);
    }
};

const desbloquearPantalla = () => {
    screen.orientation.unlock();
    console.log("🔓 El usuario vuelve a tener el control del giro.");
};

// ============================================================================
// 3. EVENTO DE GIRO EN TIEMPO REAL
// ============================================================================

// Queremos enterarnos en el milisegundo exacto en que el peón gira el teléfono
screen.orientation.addEventListener("change", (evento) => {
    
    const nuevaOrientacion = evento.target.type;
    console.log(`🔄 ¡El usuario giró el dispositivo a: ${nuevaOrientacion}!`);

    if (nuevaOrientacion.includes("portrait")) {
        console.warn("⚠️ Advertencia: Este mapa se ve mejor con el celular acostado.");
        // Acá podrías mostrar un <div> flotante en HTML tapando todo que diga 
        // "Por favor, gire el dispositivo".
    }
});


/*
1. El HTML (El Lienzo en Blanco)
Necesitás la etiqueta física en el DOM. Es vital definirle el ancho y alto acá, no en el CSS.

HTML
<canvas id="mapa-lote" width="800" height="600" style="border: 2px solid #333;"></canvas>*/


/**
 * ============================================================================
 * MACHETE: API CANVAS (Renderizado Gráfico de Alto Rendimiento)
 * ============================================================================
 * @concept getContext('2d'): Es la herramienta con la que dibujamos. Te da 
 * acceso a todos los métodos de dibujo (líneas, círculos, colores). 
 * (Nota: También existe getContext('webgl') para gráficos 3D pesados).
 */

const iniciarMotorGrafico = () => {
    
    // 1. Agarramos el lienzo del HTML
    const lienzo = document.getElementById("mapa-lote");
    
    // 2. Pedimos la brocha (El Contexto 2D)
    const ctx = lienzo.getContext("2d");

    // ========================================================================
    // EJEMPLO A: DIBUJANDO RECTÁNGULOS (Ej: Parcelas del campo)
    // ========================================================================
    
    // fillRect(X, Y, Ancho, Alto) - Dibuja un rectángulo relleno
    ctx.fillStyle = "#4CAF50"; // Verde pasto
    ctx.fillRect(50, 50, 200, 150); // Parcela 1
    
    ctx.fillStyle = "#8BC34A"; // Verde claro
    ctx.fillRect(270, 50, 150, 150); // Parcela 2

    // strokeRect(X, Y, Ancho, Alto) - Dibuja solo el contorno (un alambrado)
    ctx.strokeStyle = "#000000"; // Negro
    ctx.lineWidth = 4; // Grosor de la línea
    ctx.strokeRect(50, 220, 370, 100); 

    // ========================================================================
    // EJEMPLO B: RUTAS Y LÍNEAS (Ej: El recorrido del tractor)
    // ========================================================================
    
    ctx.beginPath(); // "Apoyamos el lápiz en el papel"
    
    ctx.moveTo(100, 100); // Movemos la mano al punto inicial (Adentro de la Parcela 1)
    ctx.lineTo(150, 180); // Trazamos línea recta hasta este punto
    ctx.lineTo(350, 180); // Trazamos otra línea hacia la derecha (hacia Parcela 2)
    ctx.lineTo(350, 100); // Subimos
    
    ctx.strokeStyle = "#F44336"; // Color rojo para la ruta
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]); // Hacemos que la línea sea punteada [Línea, Espacio]
    
    ctx.stroke(); // "Pintamos" la línea que acabamos de trazar en la memoria
    ctx.setLineDash([]); // Reseteamos la línea punteada para no romper los próximos dibujos


    // ========================================================================
    // EJEMPLO C: CÍRCULOS Y ARCOS (Ej: Área de riego de un aspersor)
    // ========================================================================
    
    ctx.beginPath();
    // arc(X_Centro, Y_Centro, Radio, Angulo_Inicial, Angulo_Final)
    // Los ángulos se miden en Radianes, por eso multiplicamos por Math.PI
    ctx.arc(235, 270, 40, 0, 2 * Math.PI); 
    
    ctx.fillStyle = "rgba(33, 150, 243, 0.4)"; // Azul semitransparente para simular agua
    ctx.fill();
    ctx.stroke();

    // ========================================================================
    // EJEMPLO D: TEXTO RENDERIZADO
    // ========================================================================
    
    ctx.font = "20px Arial";
    ctx.fillStyle = "#FFFFFF"; // Letras blancas
    
    // fillText("Texto", X, Y)
    ctx.fillText("Lote Norte", 80, 130); 
    ctx.fillText("Lote Sur", 300, 130);
};

// Disparamos el motor
iniciarMotorGrafico();

const dibujarSilo = () => {
    
    const lienzo = document.getElementById("canvas-campo");
    const ctx = lienzo.getContext("2d");

    // ========================================================================
    // 1. EL CUERPO DEL SILO (Usando figuras directas)
    // ========================================================================
    
    // Configuramos los pinceles
    ctx.fillStyle = "#9E9E9E"; // Gris para el metal
    ctx.strokeStyle = "#424242"; // Gris oscuro para el borde
    ctx.lineWidth = 4;

    // Dibujamos el rectángulo central directamente
    ctx.fillRect(100, 150, 150, 200); 
    ctx.strokeRect(100, 150, 150, 200);


    // ========================================================================
    // 2. EL TECHO DEL SILO (Usando el trazado manual)
    // ========================================================================
    
    // Cambiamos el color de relleno a un gris más claro para el techo
    ctx.fillStyle = "#BDBDBD"; 

    ctx.beginPath(); // "Atención: Arranco una figura totalmente nueva"

    // Empezamos en la esquina superior izquierda del cuerpo del silo
    ctx.moveTo(100, 150); 
    
    // Trazamos línea hasta la punta del techo (el medio del silo, más arriba)
    ctx.lineTo(175, 80); 
    
    // Trazamos línea bajando hasta la esquina superior derecha del cuerpo
    ctx.lineTo(250, 150); 

    // ¡EL ATAJO! En vez de hacer un tercer lineTo(100,150) para cerrar el triángulo,
    // usamos closePath() y el navegador cierra la figura uniéndola con el moveTo inicial.
    ctx.closePath(); 

    // Ahora que la ruta del triángulo está cerrada en memoria, la pintamos en la pantalla:
    ctx.fill();   // Lo rellenamos con el color gris claro
    ctx.stroke(); // Le dibujamos el contorno negro con el grosor 4 que quedó seteado antes
};

// Asumiendo que tenés un <canvas id="canvas-campo" width="500" height="500"></canvas>
dibujarSilo();

