const plantines= ('π·π±π»π±πΈπ±π·π±π»π±πΈπ±');

const germinar =(plantines)=>{
    const newArray= Array.from(plantines);
    console.log(newArray);
    const flor1='π·';
    const flor2='π»';
    const flor3='πΈ';
    const plant='π±';
    

    for(let i=0; i<newArray.length; i++){
    
        if (newArray[i]===flor1 && newArray[i+1]===plant){   

            newArray[i+1]=flor1  
        }  
        if (newArray[i]===flor2 && newArray[i+1]===plant){   

            newArray[i+1]=flor2  
        }  
        if (newArray[i]===flor3 && newArray[i+1]===plant){   

            newArray[i+1]=flor3  
        }  
    }

    console.log(newArray.join(''))
    return newArray.join('');
    
}

germinar(plantines);




