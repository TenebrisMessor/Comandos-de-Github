'use strict'

//Funciones anonimas
//Es una función que no tiene nombre.

var pelicula = function(nombre){
  return "La pelicula es: "+nombre;
}
//Callback: Función que se ejecuta dentro de otra.

// function sumame(numero1, numero2){
//     var sumar = numero1 + numero2;
//     return sumar;
// }
// sumame(4,5);

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar); //
    sumaPorDos(sumar); //Invocando los parametros a los que se les asignaron las dos funciones anonimas. 

    return sumar;
}

sumame(5,7, dato => {  //una funcion flecha solo reemplaza la palabra reservada function por una flecha en este caso los parametros van antes de la flecha y si solo es un parametro pueden obviarse los parentesis. 
    console.log("La suma es: ", dato);
}, 
function(dato){ //pasando dos funciones anonimas como parametros.
    console.log("La suma por dos es: ", (dato*2));
})