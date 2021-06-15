const valor = 'lovelace';
const cantidad = 3

console.log(valor);

const repetir=(valor)=>{
    let newArray=[];
    let resultado="";

    for (let i = 0; i < cantidad; i++){
    
    newArray[i]=valor;
    
    let newArray2=Array.from(newArray);
    resultado=newArray2

    console.log(resultado);
}
    
}
repetir(valor);





