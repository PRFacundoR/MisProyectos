import { useState, useEffect, useRef, useMemo } from 'react'
//useRef es un hook que te permite crear una referencia mutable que persiste durante todo el ciclo de vida de tu compenete, es util para guardar cualquier cosa qque puede mutar y cada vez que se renderiza  de nuevo, no cambia
import './App.css'
/*
function App() {
  const [pelis, peliNuevos] = useState([]);
  const [termino, setTermino] = useState('');
  //aca el tema del enable


  useEffect(() => {
    
    
    const obtenerPelicula = async () => {
      
    const pelicula= await fetch(`http://www.omdbapi.com/?apikey=8a40a9c0&s=The+Fast+and+the+Furious`);
    const data = await pelicula.json();
    peliNuevos(data.Search);
      //capaz img tengamos que traerlo con otro fetch
      
  
}

    obtenerPelicula();
    //hacer un return para limpieza 

  }, [])//el segundo parametro sin nada pero con [] hacia que se ejeute una sola vez

  // 1. Nombrar el componente con mayúscula inicial
  function DataPeli({Poster,Title,Year}){
    //dentro del return tanto aca como abajo en el principal se usan operador ternario o && o || ya que no se acepta un if
    return(
      <div>
        {Poster && Poster !== "N/A"  ? (
      <img src={Poster} alt={Title} />
    ) : (
      <p>Imagen no disponible</p>
    )}
        <p>{Title}</p>
        <p>{Year}</p>
      </div>
  )}


  const manejarEnvio = (evento) => {
    evento.preventDefault(); // Detiene la recarga de página por defecto
      if (termino.trim() !== '') { // Evita buscar si el input está vacío
    setEnable(true); // <--- AQUÍ activas el useEffect para hacer el fetch
  }
  };



/*
onSubmit: Reemplaza al atributo action. Maneja el envío mediante código.
htmlFor: Reemplaza al atributo for en las etiquetas <label>.
className: Reemplaza al atributo class para aplicar estilos CSS.
onChange: Se vuelve obligatorio en campos con value para actualizar el estado constantemente.*/
// return (
//  <main>
//    <h1>Películas</h1>
//<section>
//    <form onSubmit={manejarEnvio} className="contenedor-form">
/*  <label htmlFor="campoNombre">Nombre:</label>
  <input
      type="text"
      id="campoNombre"
      name="nombre" // Debe coincidir con la propiedad del estado
      value={termino}//aca se guarda el valor del input
      onChange={(evento) => setTermino(evento.target.value)}// Al escribir, cambia "termino" e inicia el useEffect o sea se ejecuta cada vez que escribo una letra
/>
    />
        {/* El botón no necesita onClick, por defecto activa el onSubmit del form *///}

/*  <button /*onClick={()=>{setEnable(!enable)}}*///>Enviar</button>
//</form>
/*</section>

 

<section>
{/* 2. Usar auto-cierre y pasar los datos a la prop "peli" *///}

/*{
pelis.map(({Poster,Title,Year, imdbID}) => (//la key solo se usa...
  <DataPeli key={imdbID} Poster={Poster} Title={Title} Year={Year} />
))
 
}
</section>
 
 
</main>
)
}
*/  function DataPeli({ Poster, Title, Year }) {
    return (
      <div>
        {Poster && Poster !== "N/A" ? (
          <img src={Poster} alt={Title} />
        ) : (
          <p>Imagen no disponible</p>
        )}
        <p>{Title}</p>
        <p>{Year}</p>
      </div>
    )
  }


function App() {
  const [pelis, peliNuevos] = useState([]);
  const [busqueda, newBusqueda]=useState('');
  //const peliAnterior=useRef('');
  const busquedaAnterior=useRef(null);
  




  /*useEffect(() => {
    if (busqueda === '') return;
    const temporizador = setTimeout(async () => {

        const text = busqueda.replace(/\s/g, '+');

      try {
        if (busquedaAnterior.current === text) {
          return;
        }
        
        const respuesta = await fetch(`http://www.omdbapi.com/?apikey=8a40a9c0&s=${text}&type=movie`);
        console.log(respuesta);
        const data = await respuesta.json();

        if (data.Search) {
          peliNuevos(data.Search); // Guarda las películas encontradas
          busquedaAnterior.current = text

        }
      } catch (error) {
        console.error("Error en la búsqueda:", error);
      }
    }, 500);

    return () => clearTimeout(temporizador);


  }, [busqueda])*/
// 1. Memorizamos el texto de búsqueda formateado
const textFormateado = useMemo(() => {
  return busqueda.replace(/\s/g, '+');
}, [busqueda]); // Solo se recalcula si 'busqueda' cambia

useEffect(() => {
  // Evitamos la búsqueda si el texto está vacío
  if (textFormateado === '') return;
  console.log('ola');

  const temporizador = setTimeout(async () => {
    try {
      // Usamos el texto que ya formateamos y memorizamos arriba
      if (busquedaAnterior.current === textFormateado) {
        return;
      }
      
      const respuesta = await fetch(`http://www.omdbapi.com/?apikey=8a40a9c0&s=${textFormateado}&type=movie`);
      console.log(respuesta);
      const data = await respuesta.json();

      if (data.Search) {
        peliNuevos(data.Search); // Guarda las películas encontradas
        busquedaAnterior.current = textFormateado; // Actualizamos la referencia
      }
    } catch (error) {
      console.error("Error en la búsqueda:", error);
    }
  }, 500);

  // Limpiamos el temporizador si el usuario sigue escribiendo
  return () => clearTimeout(temporizador);

}, [textFormateado]); // 2. El useEffect ahora depende del texto memorizado



  // Manejador por si el usuario decide usar el botón en lugar de esperar el debounce
  /*const manejarEnvioManual = (e) => {
    e.preventDefault();
  };*/


function handleClick(){
  event.preventDefault()
 // const value=busqueda.current.value;//saca el valor de la referncia, current es nativa de react, cada vez que se trata de acceder a una referecnia siempre accedes al valor desde la propiedad current
  //accedemos al valor del input del dom si tener que hacer un queryselector
  ///console.log(value);


}
 

  return (
    <main>
      <section>
              <form onSubmit={handleClick}className="formulario-busqueda">

        <input
          type="text"
          id="campoNombre"
          value={busqueda}
          onChange={(evento) => newBusqueda(evento.target.value)}
          //ref={busqueda}

        />
        <button >Buscar</button>
      </form>
      </section>

      <section>
        {
          pelis.map(({ Poster, Title, Year, imdbID }) => (//la key solo se usa...
            <DataPeli key={imdbID} Poster={Poster} Title={Title} Year={Year} />
          ))

        }
      </section>
    </main>
  )
}









export default App
//walter.css es un css basico para dejar algo lindo

// para mejorar el tema del mapeo y no depender del contrato de la api se pude hacer asi
/*const mapPelis=pelis.map(({peli}) =>({
id:peli.imdbID,
title:peli.Title,
year: peli.Year,
poster:peli.Poster
}))//si es que peli arriba no hice peli.search, es para tipo modularidad*/

//hay dos tipos de inputs controlado con onchange+ useState y el no controlado con UseRef(mediante el dom), ver mas info de esto en chat de gemini "React: Código Universal Cliente-Servidor"

//clase 5 midu de curso react minuto 35.30 a 40 , distintas formas de manejar un formulario, esta la forma escrita, la comentada y la comentada 2, la comentada 3
/*comentada 
function handleClick(){
  const value=peelii.current.value;//saca el valor de la referncia, current es nativa de react, cada vez que se trata de acceder a una referecnia siempre accedes al valor desde la propiedad current
  //accedemos al valor del input del dom si tener que hacer un queryselector
  console.log(value);
  
}
 

  return (
    <main>
      <section>
              <form className="formulario-busqueda">

        <input
          type="text"
          id="campoNombre"
          ref={peelii}

        />
        <button onClick={handleClick}type="submit">Buscar</button>
      </form>
      </section>*/



/*comentada 2

  const manejarEnvio = (evento) => {
    evento.preventDefault(); 
      if (termino.trim() !== '') { 
    setEnable(true); // 
  }
  };



// return (
//  <main>
//    <h1>Películas</h1>
//<section>
//    <form onSubmit={manejarEnvio} className="contenedor-form">
  <label htmlFor="campoNombre">Nombre:</label>
  <input
      type="text"
      id="campoNombre"
      name="nombre" // Debe coincidir con la propiedad del estado
      value={termino}//aca se guarda el valor del input
      onChange={(evento) => setTermino(evento.target.value)}// Al escribir, cambia "termino" e inicia el useEffect o sea se ejecuta cada vez que escribo una letra
/>
    />

  <button >Enviar</button>

*/

 /* la comentada 3 el form es la misma que la escrit pero cambia el handleclick

 function handleClick(event){
  event.preventDefault()
 const data=Object.fromEnteries(new window.FormData(event.target)) recupero el form en si con todos sus inputs, ver su equivalente en el char de gemini "React: Código Universal Cliente-Servidor"
 
  
}
 */   


//minuto 44.30 a 50 validaciones para la forma de from controlado, al usar controlado usamos menos js nativo y si usamos la no controlado usamos mas js

/* version
Si solo quieres que busque cuando el usuario hace clic o presiona Enter: No uses useEffect. Llama a la función de búsqueda directamente desde el onSubmit del formulario.
  
  
  function App() {
  const [pelis, setPelis] = useState([]);
  const busquedaRef = useRef(null); // Ref para el input

  // Función lógica centralizada
  const buscarPeliculas = async (texto) => {
    const query = texto.replace(/\s/g, '+');
    const respuesta = await fetch(`http://www.omdbapi.com/?apikey=8a40a9c0&s=${query}&type=movie`);
    const data = await respuesta.json();
    if (data.Search) setPelis(data.Search);
  };

  // 1. Manejador para el botón/Enter
  const handleClick = (e) => {
    e.preventDefault();
    const valor = busquedaRef.current.value;
    buscarPeliculas(valor); // Llama a la lógica directamente
  };

  return (
    <main>
      <form onSubmit={handleClick} className="formulario-busqueda">
        <input type="text" ref={busquedaRef} />
        <button type="submit">Buscar</button>
      </form>
      {/* ... renderizado de pelis ... */
    /*</main>
  );
}
 *///custome hook sale de un useefect

 //usememo sirve para memorizar un valor o mejor dicho una configruacion
 //tiene un callback y unas depenecias como useEfect para decir si cambia esto o aquello ejecuta de nuevo esta funcion sino usa el valor guardado
 //const variable= useMemo(callback, [dependencias]) aveces es preferible hacer un pequeño calculo a usarlo, se lo usa cuando hay problemas de rendimiento 
 //otro custom hook es el useCallback es lo mismo que useMemo pero pensado para funciones, utiliza internametne el usememo, sinflica la simtaxis

 //para hacer el debounce(busqueda automatica con tiempo) hay varios custome hook