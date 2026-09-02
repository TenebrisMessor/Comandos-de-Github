//HERENCIA

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio; 
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`;
    }
    retornarPrecio(){
        console.log(this.precio);
    }
}

const producto = new Producto('monitor curvo de 49"', 800);
const producto2 = new Producto('Laptop', 300)

//Herencia a partir de aqui

class Libro extends Producto{
    constructor(nombre,precio,isbn){
    super(nombre, precio);
    this.isbn= isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
    retornarPrecio(){
        super.retornarPrecio();
        console.log('Y si hay en existencia')
    }
}

const libro = new Libro('Javascript la Revolución', 120, '9341239443241')

console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());
console.log(libro.retornarPrecio());
