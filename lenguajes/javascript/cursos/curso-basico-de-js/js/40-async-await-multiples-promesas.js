// async/await
function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(()=>{
            resolve('Los clientes fueron Descargados');
        }, 5000);


    });
}

function descargarUltimosPedidos(){
    return new Promise(resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout(()=>{
            resolve('Los pedidos fueron Descargados');
        }, 3000);


    });
}

async function app(){

try {
//     const clientes =await descargarNuevosClientes();
//     const pedidos=await descargarUltimosPedidos();
//     console.log(clientes);
//     console.log(pedidos);

const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
console.log(resultado[0]);
console.log(resultado[1]);
} catch (error) {
    console.log(error)
}
}
app();

console.log('ested codigo es pro')  //No depende de que se descarguen los clientes 
// setTimeout(function(){
//     console.log('Set timeout...')
// }, 5000);  //Espera un tiempo que se coloca en milisegundos para ejecutar la opercion y set interval repite la accion cada determinado tiempo