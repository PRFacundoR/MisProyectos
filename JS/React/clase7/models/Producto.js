export class Producto {
  constructor({ id, title, price, description, category, image }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
  }
}

/**
 * Función adaptadora (Adapter Pattern).
 * Toma los datos crudos de la API y los transforma a nuestra estructura interna.
 * SI CAMBIAS DE API, ¡SOLO DEBES MODIFICAR ESTA FUNCIÓN!
 */
export const adaptarProductoDesdeApi = (datosApi) => {
  return new Producto({
    id: datosApi.id,
    title: datosApi.title, // Imagina que la nueva API lo llama "name" en vez de "title". Cambiarías esto a: title: datosApi.name
    price: datosApi.price,
    description: datosApi.description,
    category: datosApi.category,
    image: datosApi.image // Imagina que la nueva API lo llama "url_img". Cambiarías esto a: image: datosApi.url_img
  });
};