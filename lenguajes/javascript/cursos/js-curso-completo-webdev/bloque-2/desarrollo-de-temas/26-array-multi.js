'use strict'

var categorias = ['accion', 'terror', 'comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];
/*console.log(cine[0][1]); //El pirmer indice indica a que array se esta accediendo dentro del array multidimencional que en este caso esc categorias y el segundo muestra el indice dentro de ese otro array en este caso terror
console.log(cine[1][0]); // Entra en el array peliculas en el indice La verdad duele.
*/



//Ordenar array
console.log(peliculas.sort()); //Ordena en orden afabetico
console.log(peliculas.reverse()); // da el orden inverso





//AGREGANDO ELEMENTOS AL ARRAY
var elemento = "";
do{
    elemento = prompt("Introduce tu pelicula:");
    peliculas.push(elemento);
}
while(elemento != "ACABAR"){
}





// ELIMINANDO ELEMENTOS DEL ARRAY
peliculas.pop(); // elimina el ultimo elemento de un array
peliculas[0] = undefined; // Cambia un elemento por undefined

console.log(peliculas);

var indice = peliculas.indexOf("Gran torino"); // PARA PODER ELIMINAR UN ELEMENTO ESPECIFICO NECESITAMOS ENCONTRAR EL INDICE DE DICHO ELEMENTO PARA LO QUE USAMOS INDEXOF
if(indice > -1){
    peliculas.splice(indice, 1); //Con splice eliminamos el elemento indicando el indice y con una coma ponemos el numero de elementos a borrar a partir de ese indice.
}


// CONVIERTE EL ARRAY EN TEXTO UNIDO string
var peliculas_string = peliculas.join();


//convertir el string en array

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ")

console.log(peliculas);
console.log(peliculas_string);
console.log(cadena_array);



