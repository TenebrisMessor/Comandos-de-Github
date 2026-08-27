//this

const reservacion = {
    nombre: "Ariel",
    apellido: "Hernandez",
    total: 5000,
    pagado: false,
    informacion: function(){   //el this solo puede hacer referencia a objetos usando funciones function dado que arrow function hace referencia a la ventana general de window
        console.log(`el cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }

}
reservacion.informacion();

const reservacion2 = {
    nombre: "Ariel",
    apellido: "Hernandez",
    total: 5000,
    pagado: false,
    informacion: function(){   //el this solo puede hacer referencia a objetos usando funciones function dado que arrow function hace referencia a la ventana general de window
        console.log(`el cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }

}
reservacion2.informacion();