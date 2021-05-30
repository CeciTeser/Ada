const optionsHuman= document.querySelector('#options-human');
const optionsPc= document.querySelector('#options-pc');
const winnerBox=document.querySelector('#winner-box');
const pcChoiceItems = ["piedra", "papel","tijera"];

const getNbr=()=>{
    const getOptionsHuman = optionsHuman.value;

    let randomNbr = Math.floor(Math.random()*2);

    let getPcChoice = pcChoiceItems[randomNbr];

    optionsPc.innerHTML=getPcChoice



        if      (getOptionsHuman == "piedra" && getPcChoice == "papel"){
            winnerBox.innerHTML= "Gana Humano!"
        }
        else if (getOptionsHuman == "papel" && getPcChoice == "piedra"){
            winnerBox.innerHTML= "Gana Humano!"
        }
        else if (getOptionsHuman == "tijera" && getPcChoice == "papel"){
            winnerBox.innerHTML= "Gana Humano!"
        }
        else if (getOptionsHuman == "papel" && getPcChoice == "tijera"){
            winnerBox.innerHTML= "Gana pc!"
        }
        else if (getOptionsHuman == "tijera" && getPcChoice == "piedra"){
            winnerBox.innerHTML= "Gana Pc!"
        }
        else if (getOptionsHuman == "piedra" && getPcChoice == "papel"){
            winnerBox.innerHTML= "Gana Pc!"
        }
        else if (getOptionsHuman == getPcChoice ){
            winnerBox.innerHTML= "Empate"
        }
}

optionsHuman.addEventListener('input', getNbr);