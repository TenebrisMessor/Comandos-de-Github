//Fetch API

async function obtenerEmpleados() {
    const archivo = 'JS/empleados.json';
    
    // fetch(archivo)
    //     .then(resultado=>console.log(resultado))
    //     .then(datos=>console.log(datos.empleados)
    //         const {empleados} =datos;
    //         console.log(empleados);

        
    //     )
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados();