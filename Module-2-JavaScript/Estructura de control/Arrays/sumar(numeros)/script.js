const numbers = [5, 10, 55, 27, 9, 35];
const questionBox=document.getElementById('question-box');
const winnerBox=document.getElementById('winner-box');

const addNumbers=()=>{
    const add= numbers.reduce(function(a, b){
        return a + b;
    });
    winnerBox.innerHTML=add;
    console.log(add);
}


questionBox.addEventListener('click', addNumbers);


const resetButton = document.querySelector('#reset-button');

function reloadPage(){
    window.location.reload();
}
resetButton.addEventListener('click', reloadPage)