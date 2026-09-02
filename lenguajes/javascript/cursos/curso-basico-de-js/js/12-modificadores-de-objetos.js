//Modificadores de objetos
const product={
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
//Añadir nuevas propiedades
product.imagen = 'imagen.jpg'
//eliminar propiedades
delete product.disponible;



console.log(product);