//Declaracion de la funcion

sumar();                  //el primer resultado es si da una respuesta dado el hoisting que procesa y lee primero las funciones en la primera vuelta y despues interpreta e imprime los resultados
function sumar() {       
    console.log(10+10);
}

//Expresion de la funcion

sumar2();
const sumar2 = function(){  //El segundo resultado no se muestra dado que no es como tal una funcion sino una constante que esta cambiando de valor mediante una funcion. 
    console.log(3+3);
}