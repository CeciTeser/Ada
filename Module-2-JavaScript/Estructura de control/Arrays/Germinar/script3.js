

const germinar = (sembrado) => {   
    const plantin =  "π±"   
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

germinar('π·π±π»π±πΈπ±π·π±π»π±πΈπ±');