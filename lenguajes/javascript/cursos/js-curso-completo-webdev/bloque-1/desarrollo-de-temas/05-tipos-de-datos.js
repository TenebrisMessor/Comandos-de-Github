"use strict"

//operadores
var numero1=7;
var numero2=12;
var operacion=numero1-numero2;
alert("El resultado de la operacion es: "+operacion);


//tipos de datos
var numero_entero=44;
var cadena_texto="Hola que tal"; //comilla doble tiene mas prioridad que las comillas simples
var verdadero_o_falso=true; 
var numero_falso="33.4";

Number(numero_falso)//convierte el tipo de dato cadena en numero
parseInt(numero_falso) //convierte el tipo de dato cadena en un numero entero sin decimales.
parseFloat(numero_falso) //convierte el tipo de dato cadena en un numero con decimales.

String(numero_entero)//convierte cualquier variable a texto.



console.log(typeof numero_falso)
console.log(typeof numero_entero)
console.log(typeof cadena_texto)
console.log(typeof verdadero_o_falso)
