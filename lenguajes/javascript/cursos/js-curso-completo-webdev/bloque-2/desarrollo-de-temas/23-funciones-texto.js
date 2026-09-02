'use strict'

//Transformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de curso Victor Robles";
var texto2 = "Es muy buen curso";

var dato = numero.toString(); //convierte numeros en string
    dato = texto1.toUpperCase(); // convierte textos todo a mayusculas
    dato = texto2.toLowerCase(); // convierte textos todo a minuesculas
console.log(typeof dato);

//Calcular longitud
var nombre = "Ariel Hernandez Rojas";
console.log(nombre.length);

//Concatenar - Unir textos

var textoTotal = texto1+" "+texto2;
var textoTotal2 = texto1.concat(" "+texto2); // el metodo concat sirve para concatenar textos sin usar el +
console.log(textoTotal);
console.log(textoTotal2);



// metodos de busqueda en texto

var busqueda = texto1;
console.log(busqueda.indexOf("curso")); // a partir de que caracter comienza la palabra dada primera coincidencia
console.log(busqueda.lastIndexOf("curso")); // a partir de que caracterr comienza la palabra dada ultima coincidencia
console.log(busqueda.search("curso"));  // busca la palabra en todo el texto 
console.log(busqueda.match("curso")); // busca la palabra en todo el texto y devuelve un array con la palabra buscada, la posicion en la que se encuentra y el texto completo.
console.log(busqueda.substr(14, 5)); // saca una parte del texto desde la posicion 14 y saca 5 caracteres.
console.log(busqueda.charAt(44)); // saca el caracter que se encuentra en la posicion dada.
console.log(busqueda.startsWith("Bienvenido")); // busca la palabra dada al inicio del texto y devuelve true o false.
console.log(busqueda.endsWith("Robles")); // busca la palabra dada al final del texto y devuelve true o false.
console.log(busqueda.includes("JavaScript")); // busca la palabra dada en todo el texto y devuelve true o false.


// Funciones de reemplazo

console.log(busqueda.replace("JavaScript", "Symfony")); // reemplaza la palabra dada por la segunda palabra dada.
console.log(busqueda.slice(14, 22)); // corta el texto desde la posicion 14 hasta la posicion 22.
console.log(busqueda.split(" ")); // convierte el texto en un array separando las palabras por el caracter dado.
console.log(busqueda.trim()); // elimina los espacios al inicio y al final del texto.