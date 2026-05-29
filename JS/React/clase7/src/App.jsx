import { useState, useEffect, useRef } from 'react'
import { adaptarProductoDesdeApi } from '../models/Producto'; // Importa el adaptador

function DataProducto({produ,ListaProductos}) {
  return (
    <section>
      <article>
      <img src={produ.image} alt={produ.title} />
      <p>{produ.title}</p>
      <p>{produ.price}</p>
      <p>{produ.category}</p>
      </article>
      <article>
        <button onClick={()=>{ListaProductos.current.push(produ); console.log(ListaProductos.current)}}>Comprar</button>
        <button onClick={()=>{ListaProductos.current.pop(produ); console.log(ListaProductos.current)}}>eliminar Producto</button>
      </article>
    </section>
    
  )
}

function Buscador({ productos, precio, cat,ListaProductos }) {

 

  if (cat !== '') {
    productos = productos.filter((producto) => 
      producto.category.toLowerCase().includes(cat.toLowerCase())
    );
  }

  if (precio > 0) {
    productos = productos.filter((producto) => 
      producto.price <= precio 
    );
  }
  return (
    <div>
      {productos.length > 0 ? (
        productos.map((producto) => (
          <DataProducto key={producto.id} produ={producto} ListaProductos={ListaProductos} />//las propiedades del elemento deben llamarse igual que en la def
        ))
      ) : (
        <p>No se encontraron productos con esos filtros.</p>
      )}
    </div>
  );
}




function useProducto(){
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const respuesta = await fetch('https://fakestoreapi.com/products');
      const data = await respuesta.json();
      const productosAdaptados = data.map(item => adaptarProductoDesdeApi(item));
      setProductos(productosAdaptados);
    };

    obtenerProductos();
  }, [])
      return {productos}

}



function App() {

  const [precio, setPrecio] = useState('');
  const [cat, setCat] = useState('');
  const ListaProductos=useRef([])



const {productos}=useProducto();







const categoriasUnicas = [...new Set(productos.map(producto => producto.category))];
  return (
    <div>
      <header>
        <h1>Producto de mi tienda</h1>
        <section>
          <form onSubmit={(e) => e.preventDefault()}>
            {/* 1. SELECT DINÁMICO PARA CATEGORÍAS */}
            <select value={cat} onChange={(e) => setCat(e.target.value)}>
              <option value="">Todas las categorías</option>
              {categoriasUnicas.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>

            {/* 2. INPUT RANGE PARA EL PRECIO */}
            <div style={{ marginTop: '10px' }}>
              <label>Precio máximo: ${precio}</label>
              <br />
              <input 
                type="range" 
                min="0" 
                max="1000" // Ajusta el máximo según los precios de tu API
                step="10"  // Avanza de 10 en 10
                value={precio} 
                onChange={(e) => setPrecio(e.target.value)} 
              />
            </div>
          </form>
        </section>
      </header>

      <main>
        <Buscador productos={productos} precio={precio} cat={cat} ListaProductos={ListaProductos} />
      </main>
    </div>
  )
}

export default App


/*

otro hook 
El hook useId de React se utiliza para generar identificadores (IDs) únicos y
 estables que no cambian entre renderizaciones. Garantiza que los elementos
  tengan una identidad única en toda la aplicación, incluso si el componente
   se renderiza varias veces o si utilizas renderizado en el servidor (SSR)


   ¿Para qué sirve?El objetivo principal de useId es mejorar la 
   accesibilidad (a11y) de tus aplicaciones web.Permite vincular elementos 
   de manera segura en el DOM, por ejemplo:
   Conectar una etiqueta <label> con su <input> correspondiente.
   Asociar descripciones de error o sugerencias mediante atributos 
   aria-describedby o aria-labelledby.

   ¿Cuándo se usa?Debes usar useId siempre que necesites un 
   identificador único para un elemento HTML en tu JSX y quieras evitar c
   onflictos de duplicación. 
   
   Los escenarios más comunes son:
   Formularios complejos: Para vincular etiquetas e inputs de texto, 
   contraseñas o checkboxes.
   Listas dinámicas: Cuando renderizas múltiples instancias de un mismo 
   componente y cada uno requiere su propio ID interno.
   Renderizado del lado del servidor (SSR): Si generas IDs aleatorios 
   tradicionales (como Math.random()), el servidor y el cliente generarán 
   valores distintos, lo que causará errores de hidratación. 
   useId soluciona esto garantizando que el valor sea idéntico en 
   ambos entornos.
   
   Ejemplo de usoEn lugar de inventar IDs
    manualmente (lo cual puede generar errores si usas el mismo componente
     dos veces en la misma pantalla),
      declaras useId en tu componente:
      
      jsximport { useId } from 'react';

function CampoContrasena() {
  // Generamos el ID único
  const passwordHintId = useId();

  return (
    <>
      <label>Contraseña:</label>
      <input 
        type="password" 
        aria-describedby={passwordHintId} 
      />
      {/* Vinculamos el hint al input usando el ID generado }
      <p id={passwordHintId}>
        La contraseña debe tener al menos 8 caracteres.
      </p>
    </>
  );
}






otro hook es useCOntext para tener un contexto en react
se necesita un custom hook?
SE USA PARA PASAR VALORES O LOGICA A DISITNTOS COMPONENTES SIN IMPORTAR SI UN COMPOENEN PARDE TIENE AL HIJO QUE NECESITA X COSA, ENTONCES EL PADRE YA NO LE PASA ESO, SINO QUE EL HIJO LO USA DEL USECONTEXT
Y TMABIEN SIRVE SI OTRO COMPNENTE LO QUIERE LEER
PARA ESO SE ENVUELVE TODA LA APP CON UN FILTERCONTEXTE PROVIDER YAQUE POR DEFECTO NO LO TIENE
*/