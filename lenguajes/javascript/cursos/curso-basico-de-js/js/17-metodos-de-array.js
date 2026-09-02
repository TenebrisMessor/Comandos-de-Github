const numeros = [10,20,30,40,50];

console.log(numeros);
console.table(numeros);


//numeros[5]=60;//Su usamos una posicion que no existe se añade al arreglo
numeros[2]=16; //si usamos una posicion que ya existe se modifica dicha posicion

numeros.push(60,70,80); //si no sabemos la extension del arreglo se puden agregar elementos con push

numeros.unshift(-10,-20,-30);//Agrega al inicio del arreglo a diferencia que push

console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.pop(); //elimina el ultimo elemento del arreglo
// meses.shift(); //elimina el primer elemento del arreglo

meses.splice(2, 2);//elimina un valor indicado el primer indice nos dice la coordenada donde se comienza a leminar y el segundo la cantidad de elementos a eliminar. 

console.table(meses);

const nuevoArreglo = [...meses, 'Junio'];//mas recomendado que modificar el arreglo original y para ccolocarlo al inicio solo se cambia el orden de los elementos.  ['junio',...meses]
console.table(nuevoArreglo);