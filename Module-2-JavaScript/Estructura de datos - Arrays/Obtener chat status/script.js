const usuarias= ['Ada', 'Grace', 'Marie']


const obtenerChatStatus =(usuarias)=>{
    let resultado="";

    for (let i=0; i<usuarias.length; i++){
        if (i<1){
            
            resultado= `${usuarias[0]} conectada`;
            console.log(resultado)
        }

        else if( i>=1 && i<2){
            resultado= `${usuarias[0]} y ${usuarias[1]} están conectadas`;
            console.log(resultado)
        }

        
        else {
            resultado=`${usuarias[0]}, ${usuarias[1]} y 1 persona(s) están conectadas`;
            console.log(resultado);
        }
    }
    return resultado;
}

obtenerChatStatus(usuarias);

