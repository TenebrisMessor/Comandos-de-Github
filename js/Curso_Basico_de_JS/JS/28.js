//For Loop
for( let i=0; i<10; i++ ){
    console.log(i);
}

for( let i=0; i<=100; i++ ){
    if(i % 2 === 0){
        console.log(`El numero ${i} es par`);
    }else{ 
        console.log(`El numero ${i} es impar`)
    }
}

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

for (let i=0; i< carrito.length; i++){
    console.log(carrito[i].nombre);

}