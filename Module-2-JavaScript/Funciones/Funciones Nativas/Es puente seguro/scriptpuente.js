const situacion1='### ##';
const situacion2='##### ####';
const situacion3='########';
const substr=''


function esPuenteSeguro(puente){
    if (puente.includes(' ')){
        return false;}
    else {
        return true;
        }

}

console.log(esPuenteSeguro(situacion1));
console.log(esPuenteSeguro(situacion2));
console.log(esPuenteSeguro(situacion3));


//if (puente.includes(#)){ console.log("true"); 

    //} else if (puente.includes(' ')){console.log("false");}

    