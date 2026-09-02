//CLASES

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio; 
    }
    formatearProducto(){
        return `El producto ${this.nombre} thiene un precio de $ ${this.precio}`;
    }
    retornarPrecio(){
        return `El precio de ${this.precio}`
    }
}

const producto = new Producto('monticor curvo de 49"', 800);
const producto2 = new Producto('Lapto', 300)


console.log(producto);
console.log(producto2);
console.log(producto.formatearProducto);
