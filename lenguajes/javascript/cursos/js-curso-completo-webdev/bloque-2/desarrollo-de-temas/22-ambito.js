'use strict'
//se sabe que hay variables de ambito global y local. Las variables de ambito global son variables fuera de funciones que se pueden utilizar en cada parte del programa mientras que las locales son variables que se declaran dentro de una funcion y solo pueden ser utilizadas dentro de dicha funcion.
function holaMundo(texto){
    var hola_mundo = "Texto dentro de función";
    console.log(texto);
    console.log(typeof(numero.toString())); //El metodo to string puede convertir un numero a una string en la salida. 
    console.log(hola_mundo);
}

var numero = 12; // Variable global
 var texto = "Hola mundo soy una variable global"; //Variable global
 holaMundo(texto);
 console.log(hola_mundo)//Esto no se puede hacer por que la variable esta solo dentro de la funcion holaMundo.