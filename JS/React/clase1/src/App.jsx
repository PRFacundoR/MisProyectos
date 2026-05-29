// src/App.jsx
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export default function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}//la key es una propiedad especial que se usa para identificar de forma unica a cada elemento de una lista, y se debe usar cuando se renderizan listas de elementos, y se debe asignar un valor unico a cada key, y se puede usar cualquier valor unico, como un id, un nombre de usuario, etc., y se puede usar dentro de un Fragment para agruparlos sin agregar un nodo extra al DOM.
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

//en react se usa className en lugar de class para asignar clases a los elementos, ya que class es una palabra reservada en javascript, y se usa className para evitar conflictos con la sintaxis de javascript.

//en react tenes chakra ui, que es una libreria de componentes para react, que te permite crear interfaces de usuario de forma rapida y sencilla, con un diseño moderno y responsive, y con una gran cantidad de componentes predefinidos, como botones, formularios, tablas, etc.
//esta twelwind es una libreria de estilos para react, que te permite crear estilos de forma rapida y sencilla, con una sintaxis similar a la de tailwind css, pero adaptada a react, y con una gran cantidad de clases predefinidas, como colores, tamaños, margenes, etc.
//bootstrap es una libreria de estilos para react, que te permite crear estilos de forma rapida y sencilla, con una sintaxis similar a la de bootstrap css, pero adaptada a react, y con una gran cantidad de clases predefinidas, como colores, tamaños, margenes, etc.
//web flow es una herramienta de diseño web que te permite crear sitios web de forma rapida y sencilla, con un diseño moderno y responsive, y con una gran cantidad de componentes predefinidos, como botones, formularios, tablas, etc.
//en assest se crean archivos .jsx, que son archivos de componentes de react, que contienen la logica y la estructura de los componentes, y se pueden importar en otros archivos para usarlos como componentes hijos, y se pueden usar dentro de un Fragment para agruparlos sin agregar un nodo extra al DOM.
// en los parametros de los componentes se pueden pasar cualquier tipo de dato, como strings, numeros, booleanos, objetos, arrays, funciones, etc., y se pueden usar dentro del componente para mostrar su valor o para realizar alguna accion con ellos.
//un componente es una funcion que devuelve un elemento de react, que es un objeto que representa un nodo del DOM, y se puede usar como cualquier otro elemento de react, y se pueden pasar propiedades como atributos, y se pueden usar dentro de un Fragment para agruparlos sin agregar un nodo extra al DOM.
//un elemento de react es un objeto que representa un nodo del DOM, y se puede usar como cualquier otro elemento de react, y se pueden pasar propiedades como atributos, y se pueden usar dentro de un Fragment para agruparlos sin agregar un nodo extra al DOM.

//las propiedades son inmutables, es decir, no se pueden modificar dentro del componente, y se deben pasar como argumentos a la funcion del componente, y se pueden usar dentro del componente para mostrar su valor o para realizar alguna accion con ellos.

//palabra reservada para los componentes es children, que es una propiedad especial que se usa para pasar elementos hijos a un componente, y se pueden usar dentro del componente para mostrar su valor o para realizar alguna accion con ellos, y se pueden usar dentro de un Fragment para agruparlos sin agregar un nodo extra al DOM.