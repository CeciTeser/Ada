
const plantines= ('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱');

const germinar =(plantines)=>{

    const grupo = Array.from(plantines);
    
    for(let i=0; i<grupo.length; i++){
        const verde="🌱";
        const flor1="🌷";
        const flor2="🌻";
        const flor3="🌸";
        
        if(grupo[i+1]===verde){
            switch(grupo[i]){
                case (flor1):
                    grupo[i+1]="🌷";
                    break;

                case (flor2):
                    grupo[i+1]="🌻";
                    break;

            case (flor3):
                grupo[i+1]="🌸";
                    break

            } 
        }
        const final=grupo.join("");
    }

    return final;
}