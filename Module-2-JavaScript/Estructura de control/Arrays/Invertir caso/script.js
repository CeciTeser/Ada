const palabras = 'jAvAsCrIpT';
 


const invertirCaso =(palabras)=>{
    let resultado="";
    for (const letra of palabras){
        if (letra===letra.toLowerCase()){   
        resultado= resultado + letra.toUpperCase();

    }
    else{
        resultado= resultado + letra.toLowerCase();
}
}
return resultado;

}

console.log (invertirCaso(palabras));
