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

export default App

//usar intersectio observer para detectar cuando un elemento esta en pantalla, y asi cargarlo o hacer algo con el, como por ejemplo una animacion.
//en preubas tecnicas piden usar 2 hook incluso que uno dependa del otro, como por ejemplo usar useState para guardar un valor y luego usar useEffect para hacer algo con ese valor, como por ejemplo hacer una peticion a una API cada vez que el valor cambia. 

//cap 4 midudev mibuto 9 pa adelante iniciar proyecto de react desde cero osaea vanilla y luego agregar react, y luego agregar un hook, y luego agregar otro hook, y luego agregar una peticion a una API, y luego agregar una imagen, y luego agregar un boton para cambiar la imagen, y luego agregar un boton para cambiar el texto, y luego agregar un boton para cambiar ambos, y luego agregar un boton para resetear todo, etc.

///hacer esot con axios, react query, SWR, apollo, etc. y comparar las diferencias entre cada uno, y ver cual es mejor para cada caso, y ver cual es mas facil de usar, y ver cual es mas rapido, etc.

//los efectos solo se encargan de una responsabilidad, osea hacer algo cuando el componente se monta, o cuando cambia un valor, o cuando se desmonta, etc. y no deben hacer cosas que no tengan que ver con eso, como por ejemplo actualizar el estado, o hacer una peticion a una API, o hacer una animacion, etc. esas cosas deben hacerse en otros lugares, como por ejemplo en un manejador de eventos, o en un hook personalizado, etc.