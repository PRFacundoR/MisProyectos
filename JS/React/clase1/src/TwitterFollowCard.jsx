// src/TwitterFollowCard.jsx
import { useState } from 'react'//el hook useState es una funcion que permite agregar estado a los componentes funcionales, y se importa desde la libreria de react, y se usa dentro del componente para crear una variable de estado y una funcion para actualizar esa variable, y se puede usar dentro del componente para mostrar su valor o para realizar alguna accion con ella.

//seria como addEventListener pero para componentes de react, y se puede usar dentro del componente para mostrar su valor o para realizar alguna accion con ella, y se pueden usar dentro de un Fragment para agruparlos sin agregar un nodo extra al DOM.

export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
//el hook useState recibe un valor inicial como argumento, y devuelve un array con dos elementos, el primero es la variable de estado, y el segundo es la funcion para actualizar esa variable, y se puede usar dentro del componente para mostrar su valor o para realizar alguna accion con ella, y se pueden usar dentro de un Fragment para agruparlos sin agregar un nodo extra al DOM.
//el estado se inicializa una sola vez, y se mantiene a lo largo de la vida del componente, y se puede actualizar con la funcion que devuelve el hook useState, y se puede usar dentro del componente para mostrar su valor o para realizar alguna accion con ella, y se pueden usar dentro de un Fragment para agruparlos sin agregar un nodo extra al DOM.
const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt={`El avatar de ${userName}`}
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}