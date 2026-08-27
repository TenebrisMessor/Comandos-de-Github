"use strict"  //correr js en modo estricto


const producto={
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}


Object.seal(producto); //freeze no permite editar o borrar valores y seal solo permite editar las propiedades existentes.
producto.precio= "imagen.jpg";

console.log(Object.isFrozen(producto));

console.log(producto);