//estructura de control
const puntuaje = 1000;

if(puntuaje !== 5000){
    console.log('Si es mil');
}else{
    console.log('No es igual');
} 

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito){
    console.log('El usuario puede pagar');
}else{
    console.log('Fondos insuficientes');
}
const rol= "Visitante";

if (rol = 'Administrador'){
    console.log("Acceso a todo el sistema");
}else if(rol === "EDITOR"){
    console.log("Eres editor, puedes entrar pero no hacer mucho")
}