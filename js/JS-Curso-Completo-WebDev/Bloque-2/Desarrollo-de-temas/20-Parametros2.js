"use strict"

//parametros rest y spread.



// //Parametros rest que juntan los parametros faltantes dentro de un array
function listadoFrutas(fruta1, fruta2, ...restodeFrutas){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log(restodeFrutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

// //Parametros spread que separa los parametros de un array en elementos individuales.
var frutas = ["Naranja", "Manzana"]
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");


