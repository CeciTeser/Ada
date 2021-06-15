const numeroInicial= 3

const crearCuentaRegresiva=(numeroInicial)=>{
    let respuesta=[];
    let resultado="";
    for (let i=0; i <=numeroInicial; i++){
        
        respuesta[i]=i

        let newArray=Array.from(respuesta);
        
        console.log(newArray);
        
        resultado=newArray.reverse();
    }
    console.log(resultado)
}
crearCuentaRegresiva(numeroInicial);