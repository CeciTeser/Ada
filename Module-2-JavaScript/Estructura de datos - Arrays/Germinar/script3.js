

const germinar = (sembrado) => {   
    const plantin =  "🌱"   
    let plantaAnt = "";   
    let resultado = "";   
    for(const planta of sembrado){        
    if(planta !== plantin){       
        plantaAnt = planta;       
        resultado += planta;     
    }else{       
        resultado += plantaAnt;     
    }        
    }   
    console.log(resultado); 
};

germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱');