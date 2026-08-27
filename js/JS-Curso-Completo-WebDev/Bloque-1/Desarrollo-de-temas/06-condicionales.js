"use strict"

//condicional if
//si a es igual a b entonces haz algo.

var edad = 23;
var nombre = "David Martinez";

if(edad >= 18){
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");
    if(edad <= 33){
        console.log("Todavia eres milenial");
    }else if(edad >= 70){
        console.log("Eres anciano");
    }else{
        console.log("Ya no eres milenial");
    }
}else{
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}


/*
//operadores lògicos
AND(Y): &&
OR(O): ||
NEGACIÒN: !
*/

//negaciòn
var year=2023;
if(year != 2016){
    console.log("El año no es 2016, realmente es " + year);
}
//AND
if(year >= 2000 && year <= 2020 && year != 2018){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

//OR
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado");
}
