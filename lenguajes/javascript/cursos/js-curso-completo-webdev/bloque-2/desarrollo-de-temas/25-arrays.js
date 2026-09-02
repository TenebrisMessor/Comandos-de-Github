'use strict'

//Arrays, arreglos, matrices

var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Ariel Hernandez", "Feh Galvao"];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

console.log(nombres[0]); 
console.log(nombres.length);
var elemento = parseInt(prompt("Que elemnto del array quieres??", 0));
if(elemento>=nombres.length){
    elemento = parseInt(prompt('El indice no existe, introduce un numero menor que '+nombres.length, 0));
    alert("El usuario seleccionado es: "+nombres[elemento]);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}

document.write("<h1>Lenguajes de programación del 2019<h1>")
document.write('<ul>')
// for(var i = 0; i < lenguajes.length; i++){
//     document.write('<li>'+lenguajes[i]+'</li>')
// }
lenguajes.forEach((elemento, index, /*data*/)=>{ //El primer parametro definira los elementos del array. El segundo parametro definira el indice de cada elemento y  el tercer parametro va a definir el arreglo completo. 
    // console.log(data);
    document.write("<li>"+index+"-"+elemento+"</li>");
})

for(let lenguaje in lenguajes){ //se declara una variable para el indice
    document.write("<li>"+lenguajes[lenguaje]+"</li>")//mgracias al for se permite recorrer todos los indices imprimiendo el lenguaje
}
document.write('</ul>')


//Buscar dentro de un array
var precios = [10, 20, 30, 80, 50];
var busqueda= lenguajes.find(lenguaje => lenguaje == "PHP"); // se puede encontrar si un elemento existe dentro de un array o no. 
var busquedas= lenguajes.findIndex(lenguaje => lenguaje == "JS"); // se puede encontrar si un elemento existe dentro de un array o no. 
var busquedaa = precios.some(precio => precio > 10 ); //sirve para buscar dentro de un array utilizando condiciones

console.log(busqueda);
console.log(busquedas);
console.log(busquedaa);
