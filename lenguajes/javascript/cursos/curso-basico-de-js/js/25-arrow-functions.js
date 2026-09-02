//Arrow Functionds

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(6,10);

const aprendiendo = tecnologia => {
    console.log(`aprendiendo ${tecnologia}`)
}

aprendiendo('JavaScript');  

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

    meses.forEach (mes => {   //itera por cada uno de los elementos en el arreglo
        if(mes == 'Marzo'){
            console.log('Marzo si existe');          //ejecuta cierto codigo si la condicion se cumple
        }
    });

    resultado2 =carrito.some(producto =>  producto.nombre == 'Celular')
    console.log(resultado2);

    

    resultado3=carrito.reduce((total, producto) => total + producto.precio, 0);

    console.log(resultado3);


    resultado4=carrito.filter(producto =>  producto.precio > 400);

    console.log(resultado4);

    resultado5=carrito.filter(producto =>  producto.nombre !== 'Celular');

    console.log(resultado5);