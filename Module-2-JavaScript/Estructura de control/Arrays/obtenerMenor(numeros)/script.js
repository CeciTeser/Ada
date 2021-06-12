const numbers = [5, 10, 55, 27, 9, 35];
const questionBox=document.getElementById('question-box');
const winnerBox=document.getElementById('winner-box');

const prueba=()=>{
    const min= Math.min.apply(Math, numbers);  
    winnerBox.innerHTML=min;
    console.log(min);
}


questionBox.addEventListener('click', prueba);


const resetButton = document.querySelector('#reset-button');

function reloadPage(){
    window.location.reload();
}
resetButton.addEventListener('click', reloadPage)