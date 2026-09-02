"use strict"

/*Programa que pida dos numeros y que nos diga cual es el mayor o el menor  o si son iguales.*/
// PULS si los numeros no son un numero o son menores o iguales a cero, nos lo vuelva a pedir.
var numero1 = parseFloat(prompt("Introduce el primer numero", 0));
var numero2 = parseFloat(prompt("Introduce el segundo numero", 0));

while(numero1 <=0 || numero2  <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseFloat(prompt("Introduce el primer numero", 0));
    numero2 = parseFloat(prompt("Introduce el segundo numero", 0));
}
console.log(numero1, numero2);


if (numero1 == numero2) {
    console.log("Los numeros son iguales");
}else if (numero1 > numero2) {
    console.log("El numero mayor es: " + numero1);  
    }else{
        console.log("El numero mayor es: " + numero2);
    }
