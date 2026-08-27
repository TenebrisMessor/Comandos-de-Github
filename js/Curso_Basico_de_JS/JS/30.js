const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 500 },
    { nombre: 'Television 50 pulgadas', precio: 200 },
    { nombre: 'Tablet', precio: 300  },
    { nombre: 'Audifonos', precio:200  },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500  },
    { nombre: 'Bocinas', precio: 300  },
    { nombre: 'Laptop', precio: 800 },
    
    
];

//For each

carrito.forEach(producto=> console.log(producto.nombre));  //Iterar o mostrar en consola


//map 
const arreglo = carrito.map(producto=>`${producto.nombre} - ${producto.precio}`); //Para crear un nuevo arreglo y hay que asignarlo a una variable
console.log(arreglo);