/*import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [activado, setActivado] = useState(false);//solo sirve para 2 valores, true o false,

  useEffect(() => {
    const ubicacionMouse = (e) => {
      console.log(e.clientX , e.clientY)
      
      // La comprobación va AQUÍ adentro, que es donde se actualizan los datos
      if (e.clientX === 381 && e.clientY === 453) {
        alert('El mouse esta en el centro de la pantalla')
      }
    }

    if (activado) {
      addEventListener('pointermove',ubicacionMouse)
        if (ubicacionMouse[0]==381 && ubicacionMouse[0]==453 ) {
          alert('El mouse esta en el centro de la pantalla')
        }
    } 
    return () => {
      removeEventListener('pointermove', ubicacionMouse)
    }
  }, [activado])

  return (
    <>
      <h3>CLASE 3</h3>
      <button onClick={() => setActivado(!activado)}>
        {activado ? 'El toggle esta activado' : 'El toggle esta desactivado'}
      </button>
    </>
  )

}

export default App
//usos tipicos de useState: toggle, contador, formulario, array de objetos, tambien se puede usar para guardar un objeto, pero es mas comun usarlo para cosas simples, como un booleano o un numero.
//usos tipicos de useEffect: peticiones a una API, escuchar eventos, actualizar el DOM, limpiar recursos, ejecutar codigo cada vez que se renderiza el componente, ejecutar codigo cada vez que cambia una variable, ejecutar codigo solo una vez al montar el componente.  
//sus usos en el mundo real son infinitos, pero estos son algunos ejemplos comunes.
*/import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // pointer move
  useEffect(() => {
    console.log('effect ', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup:
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar
    //    el efecto de nuevo
    return () => { // cleanup method
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`//, esto hace que el div siga al puntero, ya que se actualiza la posicion cada vez que se mueve el puntero
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App



//COSAS IMPORTANTES: DESDE EL MINUTI 1.44.45 CURSO DE REACT VIDEO 2