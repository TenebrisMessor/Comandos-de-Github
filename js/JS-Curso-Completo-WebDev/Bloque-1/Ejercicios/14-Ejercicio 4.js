"use strict"

//Mostrar todos los numeros impares que hay entere dos numeros introducidos por el ususario. 


var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

document.write("<h1>De "+numero1+" a "+numero2+" estan estos numeros impares:</h1>");
for(var i = numero1; i <=numero2; i++){
    if(i%2 != 0){
        document.write(i+"<br/>");
    }
}