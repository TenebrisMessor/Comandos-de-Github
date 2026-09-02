// Arreglos o Arrays

const numeros = [10,20,30,40,50];

console.log(numeros);
console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

console.table(meses);


//Acceder a los valores de un arreglo

console.log(numeros[4]);
console.log(numeros[2]);
console.log(numeros[200]);


//Conocer la extension de un arreglo

console.log(meses.length);


//Iterar elementos

numeros.forEach(function(numeros){
    console.log(numeros);
})