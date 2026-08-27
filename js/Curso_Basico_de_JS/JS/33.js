
//Prototype

const producto = {
    nombre: 'Tablet',
    precio: 500,
}


function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido =apellido;
}
Cliente.prototype.formatearCliente = function(){
    return `El cliente ${this.nombre} ${this.apellido}`; 
}

function Producto(nombre, precio) {
    this.nombre=nombre;
    this.precio=precio;
}
//Crear funciones que solo se utilizan en un objeto en especifico

Producto.prototype.formatearProducto= function(){
    return `El producto ${this.nombre} tiene un precio  de ${this.precio}`;
}

const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);
const cliente=new Cliente('Ariel', 'Hernandez Rojas')

console.log(producto2);
console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto());


