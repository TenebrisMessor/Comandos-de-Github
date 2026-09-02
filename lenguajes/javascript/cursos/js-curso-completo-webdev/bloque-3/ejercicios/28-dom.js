'use strict'

//Dom - Document object mo0del


var cambiaColor = (color) =>{
    caja.style.background = color; 
} 
//conseguir elemenots con un ID concreto
//Conseguir elementos por su etiqueta 
// var todoslosDivs = document.getElementsByTagName('div'); //En esta línea, estás seleccionando todos los elementos <div> en el documento y almacenándolos en la variable todoslosDivs.


/**************************************************************************************************UTILIZANDO FOR IN*******************************************/ 

// var valor;
// for(valor in todoslosDivs){ //Estás usando un bucle for...in para iterar a través de los elementos en el objeto todoslosDivs. Sin embargo, es importante destacar que este bucle no es la forma más adecuada de iterar a través de los elementos en un HTMLCollection (que es lo que devuelve getElementsByTagName). Aunque se puede hacer, hay mejores enfoques.
//     console.log(todoslosDivs[valor]);
//     if(typeof todoslosDivs[valor].textContent == 'string'){
//         var parrafo = document.createElement("p"); // Aquí estás creando un nuevo elemento <p> (párrafo) utilizando document.createElement.
//         var texto = document.createTextNode(todoslosDivs[valor].textContent); //Estás creando un nodo de texto utilizando el contenido de texto de cada elemento <div>. todoslosDivs[valor] accede al elemento <div> actual en cada iteración del bucle y .textContent recupera el contenido de texto dentro de ese elemento.
//         parrafo.append(texto);//Estás agregando el nodo de texto (que contiene el contenido de texto del <div>) como hijo del elemento <p> que creaste antes.
//         document.querySelector("#miseccion").prepend(parrafo);// Aquí, estás seleccionando un elemento con el ID "miseccion" (probablemente un contenedor donde deseas mostrar los párrafos) utilizando document.querySelector. Luego, estás agregando el elemento <p> que creaste como hijo de este elemento.
//     }
// }

/**************************************************************************************************UTILIZANDO FOR EACH*******************************************/ 
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr")

var todoslosDivs = Array.from(document.getElementsByTagName('div')); // Obtienes un HTMLCollection de elementos div
var valor;
todoslosDivs.forEach(valor => {
    console.log(valor);
    if (typeof valor.textContent === 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(valor.textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").append(parrafo);
    }
});

seccion.append(hr);
// Conseguir elementos por su clase


//var caja = document.getElementById("micaja");  // usando getelementbyid podemos solo buscar usando el id
var caja = document.querySelector("#micaja"); // usando el id estamos agregando lo que hay dentro del div con el id micaja a una variable
caja.innerHTML = "TEXTO EN LA CAJA DESDE JS!!" //cambiando el texto desde js
caja.style.background = "red"; // agregando background color desde js
caja.style.padding = "20px"; //agregando padding desde js
caja.style.color = "white";// agregando color al texto desde js
caja.className = "hola hola2"; //agregando clases desde js



console.log(caja);
