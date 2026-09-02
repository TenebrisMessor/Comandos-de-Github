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

    //forEach 

    meses.forEach(function(mes){   //itera por cada uno de los elementos en el arreglo
        if(mes == 'Marzo'){
            console.log('Marzo si existe');          //ejecuta cierto codigo si la condicion se cumple
        }
    });

    //Includes

    let resultado=meses.includes('Marzo'); //Hace lo mismo que el codigo anterior pero mas sencillo solo recomendable para arreglos normales sin objetos. 
    console.log(resultado);

    //some ideal para arreglo de objetos

    resultado2 =carrito.some(function(producto){
        return producto.nombre == 'Celular';
    })
    console.log(resultado2);

    //Reduce para sumar las cantidades

    resultado3=carrito.reduce(function(total, producto){
        return total + producto.precio
    }, 0);

    console.log(resultado3);

    //filter 

    resultado4=carrito.filter(function(producto){
        return producto.precio > 400;

    });

    console.log(resultado4);

    resultado5=carrito.filter(function(producto){
        return producto.nombre !== 'Celular';

    });

    console.log(resultado5);
