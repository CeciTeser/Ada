const buttonOne=document.getElementById('button1');
buttonOne.style=`width:100px; height:30px; border:2px solid #DDD; background-color:#D2B4DE;`
const buttonTwo=document.getElementById('button2');
buttonTwo.style=`width:100px; height:30px; border:2px solid #DDD; background-color:#FAD7A0;`
const buttonThree=document.getElementById('button3');
buttonThree.style=`width:100px; height:30px; border:2px solid #DDD;background-color:#AED6F1;`
const buttonFour=document.getElementById('button4');
buttonFour.style=`width:100px; height:30px; border:2px solid #DDD;background-color:#EC7063;`
const buttonFive=document.getElementById('button5');
buttonFive.style=`width:100px; height:30px; border:2px solid #DDD;background-color:#A6ACAF;`
const buttonSix=document.getElementById('button6');
buttonSix.style=`width:100px;height:30px; border:2px solid #DDD;background-color:#5D6D7E;`

const reset=document.getElementById('reset')
reset.style= `margin-top:70px;margin-left:750px; width:200px; height:50px; background-color:#DDD; border-radius:20px; border:2px solid #DDD; font-family: 'Noto Sans JP', sans-serif; box-shadow: 8px 5px 6px -2px #DDD;Text-align:center;`

const box=document.querySelector('div');
box.style=`width:800px; height:20px; border=2px solid #DDD; margin-top:30px; margin-left:400px; display:flex; justify-content:space-between; align-items:center; flex-direction:row; padding-top:30px;`

const bigBox=document.getElementById('big-box');
bigBox.style=`width:500px; height:500px; border:2px solid #DDD; margin-left:600px;margin-top:100px `


const respuesta1=()=>{
    bigBox.style.backgroundColor='#D2B4DE';  
}
const respuesta2=()=>{
    bigBox.style.backgroundColor='#FAD7A0'; 
}

const respuesta3=()=>{
    bigBox.style.backgroundColor='#AED6F1'; 
}
const respuesta4=()=>{
    bigBox.style.backgroundColor='#EC7063'; 
}
const respuesta5=()=>{
    bigBox.style.backgroundColor='#A6ACAF'; 
}
const respuesta6=()=>{
    bigBox.style.backgroundColor='#5D6D7E'; 
}

buttonOne.addEventListener('click', respuesta1)
buttonTwo.addEventListener('click', respuesta2)
buttonThree.addEventListener('click', respuesta3)
buttonFour.addEventListener('click', respuesta4)
buttonFive.addEventListener('click', respuesta5)
buttonSix.addEventListener('click', respuesta6)




function reloadPage(){
    window.location.reload();
}
reset.onclick= reloadPage; 



