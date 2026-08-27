
function sumar(numero1, numero2) {  //Numero1, 2 son parametros       
    console.log(numero1 + numero2);
}
sumar(10,10); //argumentos o valores reales
sumar(3,3);
sumar(3,6);
sumar(1,2);//se pueden mandar varias veces con diferentes valores


const sumar2 = function(n1,n2){  
        console.log(n1+n2);
}
sumar2(10,5);


function sumar(numero1=0, numero2=0) {  //se pueden dar valores por default en caso de que falte algun argumento       
    console.log(numero1 + numero2);
}
sumar(10); //si solo se pasa un argumento o ninguno se tomaran los valores de los parametros por default. 