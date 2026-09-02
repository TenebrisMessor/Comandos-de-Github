// async/await
function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(()=>{
            resolve('Los clientes fueron Descargados');
        }, 5000);


    });
}

async function app(){

try {
    const resultado =await descargarNuevosClientes();
    //cualquier codigo despues de await va a ejecutarse cuando await termine.
    console.log(resultado);
} catch (error) {
    console.log(error)
}
}
app();

console.log('ested codigo es pro')  //No depende de que se descarguen los clientes 
// setTimeout(function(){
//     console.log('Set timeout...')
// }, 5000);  //Espera un tiempo que se coloca en milisegundos para ejecutar la opercion y set interval repite la accion cada determinado tiempo