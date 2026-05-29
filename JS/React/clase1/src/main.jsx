//import { StrictMode } from 'react'
//import { Fragment } from 'react'
//import { createRoot } from 'react-dom/client'


//import './index.css'
//import App from './App.jsx'//esto es una importacion del componente App, que es el componente principal de la aplicacion, se encuentra en el archivo App.jsx
//punto de entrada de la aplicacion, se renderiza el componente App dentro del elemento con id 'root' en el DOM
/*
const root=createRoot(document.getElementById('root'))
//creamos una funcion para renderizar varias cosas que son la misma pero cambian el mensaje, esto es para mostrar como se pueden renderizar varios elementos dentro de un Fragment, sin necesidad de envolverlos en un div o cualquier otro elemento, es una forma de agrupar elementos sin agregar un nodo extra al DOM.
const Botones= ({mensaje})=>{
    return( <button onClick={()=>alert({mensaje})}>Haz click</button>)
}// los componentes son en PascalCase, y se pueden usar como cualquier otro componente, y se pueden pasar propiedades como atributos, y se pueden usar dentro de un Fragment para agruparlos sin agregar un nodo extra al DOM.
*/

//ya no usa react-dom, ahora usa react-dom/client, y se crea una raiz con createRoot, y se renderiza el componente App dentro de esa raiz, usando StrictMode para detectar problemas en la aplicacion.

/*root.render(<Fragment>
   { botones({mensaje:'Hola mundo'})}
   { botones({mensaje:'Adios mundo'}) }  
</Fragment>)// ya no hace falta poner react.fragment, ya quese importa directamente Fragment, y se puede usar como un componente normal, sin necesidad de envolverlo en un div o cualquier otro elemento, es una forma de agrupar elementos sin agregar un nodo extra al DOM.
*/// ya asi no se hace

//{ botones({mensaje:'Hola mundo'})} se lo pasa como un objeto, y sus parametros se pasan como propiedades del objeto   
//asi se hace, pero es mas comun usarlo como un componente, y pasarle las propiedades como atributos, asi que se puede hacer de esta forma:
/*
root.render(<Fragment>
  <Botones
    mensaje='Hola mundo'
  />
  <Botones
    mensaje='Adios mundo'
  />
</Fragment>)
*/
// src/main.jsx  (o src/index.jsx dependiendo de cómo creaste el proyecto)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' 

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)