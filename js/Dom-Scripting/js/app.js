//*************************************SELECTORES*********************************************** */
    // querySelector
        const heading = document.querySelector('.header__texto h2')//retorna 0 o 1 elementos
        console.log(heading);

    //querySelectorAll
        const enlaces = document.querySelectorAll('.navegacion a'); //retorna de 0 a todos los elementos que concuerden con el selector
        enlaces[0].textContent = 'Nuevo Texto para enlace'; //cambiamos el texto del primer enlace
        enlaces[0].classList.add('nueva-clase'); //agrega una clase
        enlaces[0].classList.remove('navegacion__enlace'); //remueve la clase
        console.log(enlaces); //retorna un arreglo con todos los elementos que concuerden con el selector

    //getElementByID 
        const heading2 = document.getElementById('heading'); //retorna 0 o 1 elementos usando solamente id sin necesidad de usar el numeral
        console.log(heading);

//*************************************GENERAR CODIGO HTML DESDE JS************************************************************** */
    //Generar un nuevo enlace

        const nuevoEnlace = document.createElement('A') //Agregar el href
        nuevoEnlace.href= 'nuevo-enlace.html'; //Agregar el texto
        nuevoEnlace.textContent='Un nuevo enlace'; //Agregar la clase
        nuevoEnlace.classList.add('navegacion__enlace');//Agregando una nueva clase
        const navegacion = document.querySelector('.navegacion');//Agregar al documento
        navegacion.appendChild(nuevoEnlace);//Agrega un hijo al final del elemento padre
        console.log(nuevoEnlace);

// //************************************EVENTOS**************************************** */
console.log(1);
window.addEventListener('load', function(){ //load espera a que el js y los archovos que depende de html esten listos
    console.log(2);
} );
window.onload = function() { //lo mismo de arriba pero con diferente sintaxis
    console.log(3);
}
document.addEventListener('DOMContentLoaded', function(){ //solo espera por el html, pero no espera css o imagenes
    console.log(4);
});

console.log(5);

window.onscroll = function(event) {
    console.log(event); //se ejecuta cada vez que se hace un scroll en la pagina
}
// //***********************seleccionar elementos y asociarles un evento*************** */
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento.target);
//     evento.preventDefault();

//     //Validar formulario 
//     console.log('enviando formulario...');

// });

//************************Evento de los inputs y textarea********************** */

const datos = {
    nombre: '',
    email: '',
    mensaje: '',
}

 const nombre = document.querySelector('#nombre');
 const email = document.querySelector('#email');
 const mensaje = document.querySelector('#mensaje');
 const formulario = document.querySelector('.formulario');  
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// //*************************El evento de submit*************************************** */
formulario.addEventListener('submit', function(evento){     //El submit siempre debe de estar relacionado con el formulario a diferencia que el click que se relaciona con cualquier cosa como un texto, imagen o boton.
    evento.preventDefault();

//************************Validar el formulario********************************** */

const {nombre, email, mensaje} = datos;
if(nombre === '' || email === '' || mensaje === ''){
    mostrarAlerta('Todos los campos son obligatorios',true);
    return; //Corta la ejecucion del codigo por lo que no se ejecuta el codigo de abajo
}
    //Crear la otra alerta
    mostrarAlerta('Mensaje enviado correctamente');
//************************Enviar el formulario********************************** */

console.log('enviando formulario');

});

function leerTexto(e){
    datos[e.target.id] = e.target.value;  //e.target.id es el id del elemento que se esta escribiendo y e.target.value es el valor que se esta escribiendo esto es posible dado que los id concuerdan con los elementos del objeto datos.
    // console.log(datos);
}
function mostrarAlerta(mensaje, error = null){   //simplificar las dos funciones de alerta en una sola
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('envio');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);    
}
//************************Mostrar un error********************************** */
// function mostrarErorr(mensaje){
//     const mensajeError = document.createElement('P');
//     mensajeError.textContent = mensaje;
//     mensajeError.classList.add('error');
//     formulario.appendChild(mensajeError);
    
//     setTimeout(() => {                   //setTimeOut ejecuta una funcion despues de un tiempo en milisegundos
//         mensajeError.remove();
        
//     }, 5000);
// }
//************************Mostrar un mensaje de envio********************************** */

// function mostrarEnvio(mensaje){
//     const alerta = document.createElement('P');
//     alerta.textContent = mensaje;
//     alerta.classList.add('envio');
//     formulario.appendChild(alerta);
    
//     setTimeout(() => {                   //setTimeOut ejecuta una funcion despues de un tiempo en milisegundos
//         alerta.remove();
// }, 5000);
// }

