'use strict' //no permite saltar reglas
//Variables
//Una variable es un contenedor de información

var pais = "México";
var continente = "América";
var antiguedad = 2023;
var pais_y_continente = pais + ' ' + continente;
let prueba = "hola";
alert(prueba);

pais = "España";
continente = "Europa"; //se hace el cambio de los datos de la variable y dado el orden en el que se lee aparecera la alerta con los valores originales 
//y el console.log con los valores mas recientes dado que pais_y_continente fue declarada antes del cambio de valores.

console.log(pais, continente, antiguedad);
alert(pais_y_continente)