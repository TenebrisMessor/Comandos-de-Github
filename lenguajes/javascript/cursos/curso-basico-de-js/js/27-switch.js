const metodoPago = 'bitcoin';

switch(metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('pagaste con cheque');
        break;

    default:
        console.log('Aun no has pagado');
        break;
    
}
