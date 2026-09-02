'use strict'

function mostrarArray(elementos, textoCustom=""){
    document.write("<h1>Contenido del array"+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index)=>{
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}


// Pedir 6 numeros
var numeros = [];

for(var i=0; i<=5; i++){
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

//Mostrar el cuerpo de la página
mostrarArray(numeros);

//Mostrar array en la consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort((a,b)=>a-b);
mostrarArray(numeros, ' ordenado');

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, ' revertido');


//contar elementos
document.write("<h1>El array tiene: "+numeros.length+" elementos");

//Busqueda
var busqueda = parseInt(prompt("Busca un numero", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);
if(posicion && posicion!=-1){
    document.write("<hr><h1>Encontrado "+busqueda+"</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion+"</h1>");
}else{
    document.write("<h1>No encontrado</h1>")
}