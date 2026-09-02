'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra en su indice
(se valorará el uso de funciones)
*/

var numeros = []; // Declaro array y el numero de elementos que lleva

for (let i = 0; i < 6;) {
    const entrada = prompt("INTRODUCE " + (6 - i) + " NUMEROS");
    const numero = parseInt(entrada);

    if (!isNaN(numero)) {
        numeros.push(numero);
        i++; // Incrementar el contador solo si se ingresa un número válido
    } else {
        alert("¡Error! Debes ingresar un número válido.");
    }
}


// Mostrar los numeros en la consola
console.log(numeros);

//Mostrar en orden ascendente
numeros.sort((a, b) => a - b);
document.write("<h1>Orden ascendente<h1>")
document.write('<ul>')
numeros.forEach((elemento)=>{ //El primer parametro definira los elementos del array. El segundo parametro definira el indice de cada elemento y  el tercer parametro va a definir el arreglo completo. 
    document.write("<li>"+elemento+"</li>");
    console.log(typeof elemento);
})
document.write('</ul>')

//Mostrar en orden descendente
numeros.sort((a, b) => b - a);
document.write("<h1>Orden descendente<h1>")
document.write('<ul>')
for(let numero in numeros){ //se declara una variable para el indice
     document.write("<li>"+numeros[numero]+"</li>")
}
document.write("</ul>")

document.write("<p>El numero de elementos dentro de este arreglo es: "+numeros.length);


// busqueda de un valor intriducido por el ususario. 
var valor = prompt("Introduce el valor que deseas buscar en el string");
var busqueda= numeros.find(numero => numero == valor ); // se puede encontrar si un elemento existe dentro de un array o no. 
console.log(busqueda);
if(busqueda == undefined){
    document.write("<br>El Valor "+valor+" no existe dentro de este arreglo");
}else{
    document.write("<br>El Valor "+valor+" si existe dentro de este arreglo");
}