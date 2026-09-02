"use strict"

//Calculadora que pida dos numeros por pantalla. si metemos uno mal que lo vuelva a pedir. en el cuerpo 
//de la pagina, en una alerta y por la consola el resultado de sumar, restar y dividr esas dos cifras.

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while(isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer numero", 0));
    numero2 = parseInt(prompt("Introduce el segundo numero", 0));
}

var resultado = "La suma es: "+(numero1+numero2)+"<br/>"+
                "La resta es: "+(numero1-numero2)+"<br/>"+
                "La multiplicacion es: "+(numero1*numero2)+"<br/>"+
                "La division es: "+(numero1/numero2)+"<br/>";
var resultado2 = "La suma es: "+(numero1+numero2)+"\n"+
                "La resta es: "+(numero1-numero2)+"\n"+
                "La multiplicacion es: "+(numero1*numero2)+"\n"+ // "\n" sirve para hacer un salto de linea en la consola o en una alerta
                "La division es: "+(numero1/numero2)+"\n";

document.write(resultado);
alert(resultado2);