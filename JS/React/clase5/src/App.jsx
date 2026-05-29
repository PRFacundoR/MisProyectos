import { useState, useEffect } from 'react'

import './App.css'

function App() {


  const [datos, datosNuevos] = useState('boton para cambiar la imagen');
  const [imagen, imagenNueva] = useState(`https://cataas.com/cat/says/${datos}`);
  const [enabled, setEnabled] = useState(false)
/*
  useEffect(() => {
    // Creamos una función asíncrona dentro del efecto
    const obtenerImagen = async () => {
      if (enabled) {
        const response = await fetch(`https://cataas.com/cat/says/${datos}`); // Esperamos los encabezados
        const blob = await response.blob();                                // Esperamos la descarga de la imagen
        const url = URL.createObjectURL(blob);
        imagenNueva(url);
        setEnabled(false);
      }
    }

    const obtenerDatos= async () => {
      if (enabled) {
          const response = await fetch('https://catfact.ninja/fact');
          const data = await response.json();
          datosNuevos(data.fact.split(' ').slice(0, 1));
          setEnabled(false);

      }

    }
    
    // Llamamos a la función
    
    obtenerDatos();
    obtenerImagen();
    console.log(imagen);
    console.log(datos);
    
    // Limpiamos el objeto URL cuando el componente se desmonte o cuando cambie la imagen
    return () => {
      if (imagen) {
        URL.revokeObjectURL(imagen);
      }
    }//lo hacemos para no tener fugas de memoria, ya que cada vez que se crea un objeto URL, el navegador asigna memoria para ese objeto, y si no lo revocamos, esa memoria no se libera hasta que el navegador la necesite, lo que puede causar problemas de rendimiento si se crean muchos objetos URL sin revocarlos, osea no sobrecargar la ram, y evitar que el navegador se quede sin memoria.
  }, [enabled]); // Eliminamos "imagen" porque solo depende de "enabled"
*/
function useImagen(datos) {
  

useEffect(() => {
  let currentUrl; // 1. Declaramos una variable local para este ciclo

  const obtenerImagen = async () => {
      // Evitamos ejecutarlo en el montaje inicial con el texto por defecto
      if (datos != null && datos !== 'boton para cambiar la imagen') {
        const response = await fetch(`https://cataas.com/cat/says/${datos}`); // Esperamos los encabezados
        const blob = await response.blob();                                // Esperamos la descarga de la imagen
        currentUrl = URL.createObjectURL(blob); // 2. Guardamos la URL generada
        imagenNueva(currentUrl);
      }
    }

    obtenerImagen();

    // 3. Limpiamos exactamente la URL que se generó en esta ejecución
    return () => {
      if (currentUrl) {
        URL.revokeObjectURL(currentUrl);
      }
    }
    
  },[datos]);


  useEffect(() => {
    const obtenerDatos= async () => {
      if (enabled) {
          const response = await fetch('https://catfact.ninja/fact');
          const data = await response.json();
          datosNuevos(data.fact.split(' ').slice(0, 1));
          setEnabled(false);
          
      }

      
    }
    obtenerDatos();
    
    
  }, [enabled]);
// puedo hacer que el boyton cambie el fact
  return (
    <main className="app-main">
      <h3 className="app-title">CLASE 4</h3>
      <section className="card-section">
        <button className="action-btn" onClick={() => setEnabled(!enabled)}>
          Cambiar imagen
        </button>

        {imagen && <img className="cat-img" src={imagen} alt="Imagen de un gato" />}
        {datos && <p className="fact-text">{datos}</p>}
      </section>
    </main>
  )
}
}
export default App

//usar intersectio observer para detectar cuando un elemento esta en pantalla, y asi cargarlo o hacer algo con el, como por ejemplo una animacion.
//en preubas tecnicas piden usar 2 hook incluso que uno dependa del otro, como por ejemplo usar useState para guardar un valor y luego usar useEffect para hacer algo con ese valor, como por ejemplo hacer una peticion a una API cada vez que el valor cambia. 

//cap 4 midudev mibuto 9 pa adelante iniciar proyecto de react desde cero osaea vanilla y luego agregar react, y luego agregar un hook, y luego agregar otro hook, y luego agregar una peticion a una API, y luego agregar una imagen, y luego agregar un boton para cambiar la imagen, y luego agregar un boton para cambiar el texto, y luego agregar un boton para cambiar ambos, y luego agregar un boton para resetear todo, etc.

///hacer esot con axios, react query, SWR, apollo, etc. y comparar las diferencias entre cada uno, y ver cual es mejor para cada caso, y ver cual es mas facil de usar, y ver cual es mas rapido, etc.

//los efectos solo se encargan de una responsabilidad, osea hacer algo cuando el componente se monta, o cuando cambia un valor, o cuando se desmonta, etc. y no deben hacer cosas que no tengan que ver con eso, como por ejemplo actualizar el estado, o hacer una peticion a una API, o hacer una animacion, etc. esas cosas deben hacerse en otros lugares, como por ejemplo en un manejador de eventos, o en un hook personalizado, etc.

//custom hooks: son funciones que empiezan con "use" y que pueden usar otros hooks dentro de ellas, y que pueden ser reutilizadas en diferentes componentes, y que pueden tener su propia lógica y estado, etc. por ejemplo, un hook personalizado para hacer una peticion a una API, o un hook personalizado para manejar el estado de un formulario, etc. Para funcionar deben devolver un objeto que puede ser un valor del useState, o una función, o un array, etc. dependiendo de lo que queramos hacer con ese hook personalizado, etc. por ejemplo, un hook personalizado para hacer una peticion a una API que devuelva los datos obtenidos, o un hook personalizado para manejar el estado de un formulario que devuelva el estado del formulario y una función para actualizar ese estado, etc. La idea de los hooks personalizados es separar la lógica de nuestros componentes en funciones reutilizables, para tener un codigo mas organizado y facil de mantener, y para poder reutilizar esa logica en diferentes partes de la aplicacion, etc.
// y sigue las reglas de los hooks, como por ejemplo no llamar a un hook dentro de una condicional, o dentro de un ciclo, o dentro de una función, etc. ya que eso puede causar problemas de rendimiento y de comportamiento en nuestra aplicacion, etc. y seguir las buenas practicas de los hooks, como por ejemplo usar el hook useEffect para hacer algo cuando el componente se monta, o cuando cambia un valor, o cuando se desmonta, etc. y no usar el hook useEffect para hacer cosas que no tengan que ver con eso, como por ejemplo actualizar el estado, o hacer una peticion a una API, o hacer una animacion, etc. esas cosas deben hacerse en otros lugares, como por ejemplo en un manejador de eventos, o en un hook personalizado, etc.
// sirve para hacer una funcion que use hooks dentro de ella, y que pueda ser reutilizada en diferentes componentes, y que pueda tener su propia logica y estado, etc. por ejemplo, un hook personalizado para hacer una peticion a una API, o un hook personalizado para manejar el estado de un formulario, etc. la idea es separar la logica de nuestros componentes en funciones reutilizables, para tener un codigo mas organizado y facil de mantener, y para poder reutilizar esa logica en diferentes partes de la aplicacion, etc.
// el nombre no tiene que ser descriptivo de lo que hace o sea el nombre es distinto a la implementacion

// seria reutilizar logica de nuestros componentes en diferentes componentes
//use es palabra reservada para los hooks, y el nombre del hook debe empezar con "use" para que react lo reconozca como un hook, y para que podamos usar otros hooks dentro de ese hook personalizado, etc. por ejemplo, useFetch, useForm, useToggle, etc.

//separar los componentes en diferentes archivos, y luego importarlos en el componente principal, para tener un codigo mas organizado y facil de mantener, y para poder reutilizar los componentes en diferentes partes de la aplicacion, etc. por ejemplo, un componente para el boton, un componente para la imagen, un componente para el texto, etc.
// las funciones que se encargan de hacer peticiones a una API, o de manejar el estado de un formulario, etc. pueden ser colocadas en un hook personalizado, para tener un codigo mas organizado y facil de mantener, y para poder reutilizar esas funciones en diferentes partes de la aplicacion, etc. por ejemplo, un hook personalizado para hacer una peticion a una API, o un hook personalizado para manejar el estado de un formulario, etc.
//hacer carpetas de componentes, y dentro de cada carpeta colocar el componente, el css del componente, y el hook personalizado del componente, etc. para tener un codigo mas organizado y facil de mantener, y para poder reutilizar los componentes en diferentes partes de la aplicacion, etc. por ejemplo, una carpeta para el boton, una carpeta para la imagen, una carpeta para el texto, etc.
//carpeta de servicios, y dentro de esa carpeta colocar las funciones que se encargan de hacer peticiones a una API, o de manejar el estado de un formulario, etc. para tener un codigo mas organizado y facil de mantener, y para poder reutilizar esas funciones en diferentes partes de la aplicacion, etc. por ejemplo, una carpeta para los servicios de la API, una carpeta para los servicios del formulario, etc.
// a los metodos debo evitar pasarle el metoodo de cmabiar el estado, hago que la funcion retorne el valor que quiero cambiar, y luego en el componente principal hago el cambio de estado, para tener un codigo mas organizado y facil de mantener, y para poder reutilizar esas funciones en diferentes partes de la aplicacion, etc. por ejemplo, una funcion para hacer una peticion a una API que retorne los datos obtenidos, y luego en el componente principal hago el cambio de estado con esos datos, etc.
//evitar que el custom hook devuelva la actualizacion del estado si es que internamente puede hacerlo

// algo.then(parametro => funcion(parametro)) y algo.then(funcion) es lo mismo, ya que el metodo then recibe una funcion como parametro, y esa funcion recibe el resultado de la promesa como parametro, entonces si la funcion que le pasamos a then es una funcion que recibe un parametro, entonces ese parametro sera el resultado de la promesa, y si la funcion que le pasamos a then es una funcion que no recibe parametros, entonces esa funcion no recibira el resultado de la promesa, pero eso no afecta el funcionamiento de la promesa, ya que la promesa se resuelve igual, y el resultado de la promesa se puede obtener en cualquier parte del codigo, ya sea dentro de la funcion que le pasamos a then, o fuera de esa funcion, etc.

//en js es mejor pasar y manejarse con objetos, ya que eso nos permite tener un codigo mas organizado y facil de mantener, y para poder reutilizar esos objetos en diferentes partes de la aplicacion, etc. por ejemplo, un objeto para el estado del formulario, un objeto para los datos obtenidos de una API, etc. y luego usar destructuring para obtener los valores de esos objetos, etc. por ejemplo, const { name, email } = formState; para obtener el nombre y el correo del estado del formulario, etc.


//video 4 minuto 37 test midu