
const plantines= ('π·π±π»π±πΈπ±π·π±π»π±πΈπ±');

const germinar =(plantines)=>{

    const grupo = Array.from(plantines);
    
    for(let i=0; i<grupo.length; i++){
        const verde="π±";
        const flor1="π·";
        const flor2="π»";
        const flor3="πΈ";
        
        if(grupo[i+1]===verde){
            switch(grupo[i]){
                case (flor1):
                    grupo[i+1]="π·";
                    break;

                case (flor2):
                    grupo[i+1]="π»";
                    break;

            case (flor3):
                grupo[i+1]="πΈ";
                    break

            } 
        }
        const final=grupo.join("");
    }

    return final;
}