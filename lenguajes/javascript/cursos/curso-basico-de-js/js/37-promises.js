//Promises
const usuarioAutenticado = new Promise((resolve, reject)=>{   //resolve y reject siempre se van a utilizar en la funcion promise
    const auth= false;
    if (auth){
        resolve('Usuario autenticado');  //EL PROMISE SE CUMPLE
    }else {
        reject('No se pudo iniciar sesion'); //EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado
    .then(resultado=>console.log(resultado))   //Este proceso es para que aparezca directamente el resultado en lugar de un desgloce del resultado.
    .catch(error=> console.log(error));

//En los promises existen 3 valores posibles
//Pending; No se ha cumplido pero tampoco se ha rechazado
//fulfilled: Ya se ha cumplido
//rejected: Se ha rechazado o no se pudo cumplir