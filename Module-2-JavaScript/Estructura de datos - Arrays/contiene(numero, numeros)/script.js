const numbers = [5, 10, 55, 27, 9, 35];
const questionBox=document.getElementById('question-box');
const winnerBox=document.getElementById('winner-box');

const contiene=()=>{
    const add= numbers.includes(55);
    winnerBox.innerHTML=add;
    console.log(add);
}


questionBox.addEventListener('click', contiene);


const resetButton = document.querySelector('#reset-button');

function reloadPage(){
    window.location.reload();
}
resetButton.addEventListener('click', reloadPage)

// const contiene =(numero, numeros)=>{
//     for (const num of numeros){
//         return numeros.includes(numero)
//     }
// }