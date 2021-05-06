const div=document.getElementById('box100'); 
const div2=document.getElementById('box-change'); 
const span=document.querySelector('span');
const progreso= Number(prompt('Seleccione uno de los siguientes porcentajes:25, 50, 75 o 100'))
div.style=`width:1000px; height:30px; border: 1px solid black; background-color:grey`;


const barra = (a)=>{
    if (a===25){
        div2.style=`width:250px; height:29px; border: 1px solid black; background-color:orange`;
        span.innerText='25%';
    } else if (a===50){
        div2.style= `width:500px; height:29px; border: 1px solid black; background-color:blue`;
        span.innerText='50%';
    } else if (a===75){
        div2.style= `width:750px; height:29px; border: 1px solid black; background-color:green`;
        span.innerText='75%';
    } else if (a===100){
        div2.style= `width:1000px; height:29px; border: 1px solid black; background-color:grey`;
        span.innerText='100%';
    }
}

barra(progreso);
