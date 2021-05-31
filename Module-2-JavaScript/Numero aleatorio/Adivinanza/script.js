const playButton=document.querySelector('#play-button');
const formBox= document.getElementById('form');
const allRiddles=document.getElementsByClassName('riddles');

const letsPlay=()=>{
    playButton.style= "display:none"
    formBox.style= "display: block";
    let getRiddles= Math.floor(Math.random()*2);
    let getChoice = allRiddles[getRiddles];
    getChoice.style= "display:flex";
    console.log(getChoice)
}

playButton.addEventListener('click',letsPlay);


let winnerBox=document.querySelector('#winner-box');
const riddle1=document.querySelector('#riddle-1');
const riddle2=document.querySelector('#riddle-2');
const riddle3=document.querySelector('#riddle-3');

const getAnswer=()=>{
    if (riddle1.value ==="rana"){
        winnerBox.innerHTML="Win!"
    }

    else if (riddle2.value ==="murcielago"){
        winnerBox.innerHTML="Win!"
    }
    else if (riddle3.value ==="loro"){
        winnerBox.innerHTML="Win!"
    }
    else{
        winnerBox.innerHTML="Try again"
    }
    console.log(getAnswer)
}

riddle1.addEventListener('change',getAnswer);
riddle2.addEventListener('change',getAnswer);
riddle3.addEventListener('change',getAnswer);


const resetButton = document.querySelector('#reset-button');

function reloadPage(){
    window.location.reload();
}
resetButton.addEventListener('click', reloadPage)