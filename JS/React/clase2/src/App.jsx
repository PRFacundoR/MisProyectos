import { useState, useEffect } from 'react'
import './App.css'
//la actualización del estado en React es asíncrona, lo que significa que cuando llamas a setState, React no actualiza el estado inmediatamente, sino que programa una actualización para el próximo ciclo de renderizado. Por eso, si intentas acceder al estado justo después de llamar a setState, es posible que no veas el valor actualizado. Para manejar esto, puedes usar useEffect para reaccionar a los cambios en el estado o pasar una función a setState que reciba el estado anterior como argumento.
// Definimos las combinaciones ganadoras (filas, columnas y diagonales)
const WINNER_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
  [0, 4, 8], [2, 4, 6]             // Diagonales
]

// Componente para cada cuadrito del tablero
const Square = ({ children, updateBoard, index }) => {
  // Asignamos una clase dinámica para cambiar el color según si es X o O
  const colorClass = children === 'X' ? 'x-color' : children === 'O' ? 'o-color' : ''

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={`square ${colorClass}`} onClick={handleClick}>
      {children}
    </div>
  )
}

export default function App() {
  // Estados del juego
  const [board, setBoard] = useState(Array(9).fill(null)) // Tablero vacío
  const [turn, setTurn] = useState('X') // Empieza la X
  const [winner, setWinner] = useState(null) // null = sin ganador, false = empate

  // EL USEEFFECT DEBE IR AQUÍ: En el nivel superior del componente.
  // Este efecto se ejecutará cada vez que la variable "winner" cambie.
  useEffect(() => {
    if (winner !== null) {
      console.log('El juego ha finalizado. Estado del ganador:', winner)
    }
  }, [winner]) // El array de dependencias le dice a React: "Solo ejecuta esto si 'winner' cambia"

  // Función para comprobar si alguien ganó
  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBINATIONS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // Devuelve 'X' o 'O'
      }
    }
    return null
  }

  // Función para comprobar si hay empate (si no quedan espacios null)
  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  // Función que se ejecuta al hacer clic en un cuadrito
  const updateBoard = (index) => {
    // Si la casilla ya tiene algo o si ya hay un ganador, no hacer nada
    if (board[index] || winner) return

    // 1. Actualizar el tablero
    const newBoard = [...board]//hago una copia del tablero para no mutar el estado directamente, no se mutan las props y estados directamente, siempre se hace una copia y se actualiza esa copia
    //spread operator (...) para crear una copia del array original, así evitamos mutar el estado directamente y seguimos las buenas prácticas de React
    //rest operator (...) para recoger el resto de elementos en un nuevo array, pero en este caso no lo estamos usando, solo el spread operator para copiar el array
    // asi se realiza un rest y spread operator: const [first, ...rest] = array // rest operator para recoger el resto de elementos en un nuevo array
    // const newArray = [...array] // spread operator para crear una copia del array original
    //copia profunda de un array de objetos: const newArray = array.map(item => ({ ...item })) // spread operator para crear una copia profunda de un array de objetos
    //structuredClone para hacer una copia profunda de un objeto o array: const newObject = structuredClone(originalObject) // structuredClone para hacer una copia profunda de un objeto o array
    //al segundo parametro de useState se le pasa siempre un valor nuevo, no se muta el estado directamente, siempre se hace una copia y se actualiza esa copia
  newBoard[index] = turn
    setBoard(newBoard)

    // 2. Cambiar el turno
    const newTurn = turn === 'X' ? 'O' : 'X'
    setTurn(newTurn)

    // 3. Comprobar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Empate
    }
  }

  // Función para reiniciar el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn('X')
    setWinner(null)
  }

  //un efecto que pasa luego de que se gana
  useEffect(() => {
    if (winner) {
      alert('¡Tenemos un ganador! El ganador es:', winner)
    }
  }, [winner])


  return (
    <main className='board'>
      <h1>3 en Raya</h1>
      
      {/* Indicador de turno */}
      {!winner && winner !== false && (
         <h2 className="turn-indicator">
           Turno de: <span className={turn === 'X' ? 'x-color' : 'o-color'}>{turn}</span>
         </h2>
      )}

      {/* Tablero de juego */}
      <section className='game'>
        {board.map((square, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Square>
        ))}
      </section>

      {/* Mensaje de ganador o empate */}
      {winner !== null && (
        <section className='winner-modal'>
          <div className='text'>
            <h2>{winner === false ? 'Empate' : '¡Ganó!'}</h2>
            
            {winner !== false && (
              <header className='win'>
                <Square>{winner}</Square>
              </header>
            )}

            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  )
}

//en las pseudopropiedades si se pasa una funcion, se pasa su nombre sin paréntesis, por ejemplo: onClick={handleClick} en lugar de onClick={handleClick()} para que se ejecute la función solo cuando ocurra el evento, no al renderizar el componente.
// los hooks de React, como useState, no pueden ser llamados dentro de funciones regulares(como  ) o condicionales( como if o for), deben ser llamados en el nivel superior del componente para asegurar que se ejecuten en el mismo orden en cada renderizado. Por eso, no puedes usar useState dentro de una función que se llama condicionalmente o dentro de un bucle.
// los hooks de React, como useState, pueden tener callbacks o funciones que se ejecutan después de que el estado se ha actualizado, pero no puedes usar useState dentro de esos callbacks o funciones, ya que eso violaría las reglas de los hooks y podría causar errores en tu aplicación. En su lugar, debes usar useEffect para reaccionar a los cambios en el estado o pasar una función a setState que reciba el estado anterior como argumento.
//sirve para guardar el estado del tablero, el turno actual y el ganador del juego. El estado se actualiza a medida que los jugadores hacen sus movimientos, y se utiliza para renderizar el tablero y mostrar mensajes de ganador o empate.
// por render solo se ejecuta una vez los hooks, si se llama a un hook dentro de una función que se ejecuta condicionalmente o dentro de un bucle, eso violaría las reglas de los hooks y podría causar errores en tu aplicación. Por eso, los hooks deben ser llamados en el nivel superior del componente para asegurar que se ejecuten en el mismo orden en cada renderizado.

//?? es para ver si el valor es null o undefined, si es así devuelve el valor de la derecha, si no devuelve el valor de la izquierda. En este caso se usa para mostrar el mensaje de ganador o empate solo cuando winner no es null, y para mostrar el indicador de turno solo cuando winner es null o false (empate).
// || es para hacer una operación OR, en este caso se usa para mostrar el mensaje de ganador o empate solo cuando winner no es null, y para mostrar el indicador de turno solo cuando winner es null o false (empate).
// | asi solo se hace una operación OR a nivel de bits, no es lo mismo que || que es una operación lógica. En este caso no se debería usar | para mostrar el mensaje de ganador o empate, ya que eso no funcionaría correctamente y podría causar errores en tu aplicación. En su lugar, debes usar || para mostrar el mensaje de ganador o empate solo cuando winner no es null, y para mostrar el indicador de turno solo cuando winner es null o false (empate).

//useEffect se utiliza para realizar efectos secundarios en componentes funcionales, como actualizar el DOM, hacer peticiones a APIs o suscribirse a eventos. En este caso, no se está utilizando useEffect, pero podrías usarlo para reaccionar a los cambios en el estado del tablero o del ganador, por ejemplo, para mostrar un mensaje de felicitación cuando alguien gane o para reiniciar el juego después de un empate.
//cuando se cambie algo hace esto, por ejemplo: useEffect(() => { console.log('El tablero ha cambiado') }, [board]) para mostrar un mensaje en la consola cada vez que el tablero cambie. O useEffect(() => { if (winner) { console.log('¡Tenemos un ganador!') } }, [winner]) para mostrar un mensaje en la consola cada vez que haya un ganador.

//useeffect se ejecuta todas las veces que el componente se renderiza, si no pones un array de dependencias, pero si pones un array de dependencias vacío, se ejecuta solo una vez al montar el componente, y si pones un array de dependencias con variables, se ejecuta cada vez que alguna de esas variables cambie. En este caso, no se está utilizando useEffect, pero podrías usarlo para reaccionar a los cambios en el estado del tablero o del ganador, por ejemplo, para mostrar un mensaje de felicitación cuando alguien gane o para reiniciar el juego después de un empate.
// tiene 2 parámetros: el primero es una función que se ejecuta después de que el componente se ha renderizado, y el segundo es un array de dependencias que indica cuándo se debe ejecutar esa función. Si el array de dependencias está vacío, la función se ejecutará solo una vez al montar el componente. Si el array de dependencias contiene variables, la función se ejecutará cada vez que alguna de esas variables cambie. Si no se proporciona un array de dependencias, la función se ejecutará después de cada renderizado del componente.
//esas dependencias son las variables que se usan dentro de la función del primer parámetro, si alguna de esas variables cambia, la función se ejecutará nuevamente. En este caso, podrías usar useEffect para reaccionar a los cambios en el estado del tablero o del ganador, por ejemplo, para mostrar un mensaje de felicitación cuando alguien gane o para reiniciar el juego después de un empate. Por ejemplo: useEffect(() => { if (winner) { console.log('¡Tenemos un ganador!') } }, [winner]) para mostrar un mensaje en la consola cada vez que haya un ganador. O useEffect(() => { console.log('El tablero ha cambiado') }, [board]) para mostrar un mensaje en la consola cada vez que el tablero cambie.
