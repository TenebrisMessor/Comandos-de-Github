'use strict'
//Pruebas con Let y Var. var crea una variable global mientras que let solo a nivel bloque.
alert("hola");
//Prueba con Var
var numero = 40; //valor 40
console.log(numero); //valor 40
if (true) {
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

//Prueba con Let
var texto = "Curso JS Victor Robles";
console.log(texto); //valor "Curso JS Victor Robles"
if (true) {
    let texto = "Curso Laravel 5"; //let solo actua a nivel de bloque por lo que no se mantienen saliendo del bloque de if.
    console.log(texto); //valor "Curso Laravel 5"
}

console.log(texto); //valor "Curso JS Victor Robles"