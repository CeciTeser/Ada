const box=document.querySelector('div');
const title=document.querySelector('h1');
const answer=document.querySelector('h2');
const button1=document.getElementById('banana');
const button2=document.getElementById('manzana');
const button3=document.getElementById('durazno');
const reset=document.getElementById('reset')

box.style= `display:flex; justify-content: center; align-items:center; flex-direction:column; margin-top: 50px; margin-left:500px; width:600px; height:700px; border-radius:20px; border:2px solid #DDD; font-family: 'Noto Sans JP', sans-serif; box-shadow: 8px 5px 6px -2px #DDD;Text-align:center;`

title.style= `font-family: 'Noto Sans JP', sans-serif; font-size:30px; color:#C3C0C0; padding-bottom:70px;`

reset.style= `margin-top:70px; width:200px; height:50px; background-color:#F9EDED; border-radius:20px; border:2px solid #DDD; font-family: 'Noto Sans JP', sans-serif; box-shadow: 8px 5px 6px -2px #DDD;Text-align:center;`

button1.style= `margin-top:20px; width:100px; height:30px; background-color:#EBA128; border-radius:20px; border:2px solid #DDD; font-family: 'Noto Sans JP', sans-serif; box-shadow: 8px 5px 6px -2px #DDD;Text-align:center;`

button2.style= `margin-top:20px; width:100px; height:30px; background-color:#EBA128; border-radius:20px; border:2px solid #DDD; font-family: 'Noto Sans JP', sans-serif; box-shadow: 8px 5px 6px -2px #DDD;Text-align:center;`

button3.style= `margin-top:20px; width:100px; height:30px; background-color:#EBA128; border-radius:20px; border:2px solid #DDD; font-family: 'Noto Sans JP', sans-serif; box-shadow: 8px 5px 6px -2px #DDD;Text-align:center;`

const respuesta1=()=>{
    button1.style.backgroundColor='green';
    answer.innerText='¡Correcto!'; 
}
const respuesta2=()=>{
    answer.innerText='¡Incorrecto!';
    button1.style.backgroundColor='green';
    button2.style.backgroundColor='red';
    button3.style.backgroundColor='red'; 
}

const respuesta3=()=>{
    answer.innerText='¡Incorrecto!';
    button1.style.backgroundColor='green';
    button2.style.backgroundColor='red';
    button3.style.backgroundColor='red'; 
}

button1.addEventListener('click', respuesta1)
button2.addEventListener('click', respuesta2)
button3.addEventListener('click', respuesta3)


function reloadPage(){
    window.location.reload();
}
reset.onclick= reloadPage; //Para resetear la página con el "onclick"


// const buttonstyle= document.getElementByClassName('.buttonstyle');

// for(let i=0; i <buttonstyle.length; i++){
//     buttonstyle[i].style.backgroundColor= '#DDD';
//     buttonstyle[i].style.width= '100px';
//     buttonstyle[i].style.height= '30px';
//     buttonstyle[i].style.color= 'black';
//     buttonstyle[i].style.borderRadius= '20px';
//     buttonstyle[i].style.fontSize= '10px';
//     buttonstyle[i].style.fontFamily= 'Noto Sans JP,sans-serif';
//     buttonstyle[i].style.boxShadow= '8px 5px 6px -2px #DDD';
//     buttonstyle[i].style.textAlign= 'center';
//     buttonstyle[i].style.marginBottom= '10px';
//     buttonstyle[i].style.border= '1px solid #DDD';
// }

