"use strict"

// //***************************************************************Funciones.
// //Una funciòn es una agrupaciòn reu7tilizable de un conjunto de instrucciones


// //Definiciòn de la funciòn
// function calculadora(){
//     //Conjunto de instrucciones a ejecutar
//     console.log("Hola soy la calculadora !!");
//     console.log("Soy una funciòn !!");
//     // return "Hola soy la calculadora !!";
// }
// console.log(calculadora());
// calculadora();



// // -------------------------------------------------//Parametros
// function calculadora(numero1, numero2){

//     console.log("Suma: "+(numero1+numero2));
//     console.log("Resta: "+(numero1-numero2));
//     console.log("Multiplicaciòn: "+(numero1*numero2));
//     console.log("Divisiòn: "+(numero1/numero2));
//     console.log("**********************************");
// }

// for(var i = 1; i <= 10; i++){
//     console.log("numero de iteraciòn: "+i);
//     calculadora(i, 8);
// }

// // -------------------------------------------------//Parametros opcionales son los parametros que no son obligatorios de pasar cuando pasamos parametros a la funcion. 


// function calculadora(numero1, numero2, mostrar = false){
//     if(mostrar == false){
//         console.log("Suma: "+(numero1+numero2));
//         console.log("Resta: "+(numero1-numero2));
//         console.log("Multiplicaciòn: "+(numero1*numero2));
//         console.log("Divisiòn: "+(numero1/numero2));
//         console.log("**********************************");
//     }else{
//         document.write("Suma: "+(numero1+numero2)+"<br/>");
//         document.write("Resta: "+(numero1-numero2)+"<br/>");
//         document.write("Multiplicaciòn: "+(numero1*numero2)+"<br/>");
//         document.write("Divisiòn: "+(numero1/numero2)+"<br/>");
//         document.write("**********************************"+"<br/>");
//     }
// }

// //invocar la funcion

// calculadora(1, 5);
// calculadora(2, 5, true);
// calculadora(3, 5, true);

// // -------------------------------------------------//Funciones concatenadas.

function porConsola(numero1, numero2){
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicaciòn: "+(numero1*numero2));
    console.log("Divisiòn: "+(numero1/numero2));
    console.log("**********************************");
}

function porPantalla(numero1, numero2){

    document.write("Suma: "+(numero1+numero2)+"<br/>");
    document.write("Resta: "+(numero1-numero2)+"<br/>");
    document.write("Multiplicaciòn: "+(numero1*numero2)+"<br/>");
    document.write("Divisiòn: "+(numero1/numero2)+"<br/>");
    document.write("**********************************"+"<br/>");
}

function calculadora(numero1, numero2, mostrar = false){

    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
    return true;
}

 calculadora(1, 5);
 calculadora(2, 5, true);
calculadora(3, 5, true);