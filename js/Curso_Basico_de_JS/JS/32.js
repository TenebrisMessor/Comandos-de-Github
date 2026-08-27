//POO
//Object literal
const prodducto = {
    nombre: 'Tablet',
    precio: 500,
}
console.log(prodducto);

//object constructor

function Producto(nombre, precio, categoria, barbaro) {

    this.nombre = nombre;
    this.costo=precio;
    this.categoria=categoria;
    this.barbaro=barbaro;

}

const producto2 = new Producto('Monitor curvo de 49"', 800, "Monitor perro", "si");
const producto3 = new Producto('Laptop"', 900, "PCbasica", "no mucho");
const producto4 = new Producto('Monitor curvo de 49"', 800, "Monitor perro", "si");
const producto5 = new Producto('Laptop"', 900, "PCbasica", "no mucho");


console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);

