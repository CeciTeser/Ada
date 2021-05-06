document.body.style= `width:1000px; height:100px; display:flex; justify-content:center; align-items:center;`;

const containerBar= document.getElementById('container-bar');
containerBar.style= `width:1000px; height:40px; display:flex; justify-content:center; align-items:center; background-color:#DDD; border:1px solid black`;

const innerBar= document.getElementById('inner-bar');

const buttonOne= document.getElementById('button-1');
buttonOne.style= `width:50px; height:20px; background-color:#AEB6BF; border:1px solid black; margin:0px 10px`;

const buttonTwo= document.getElementById('button-2');
buttonTwo.style= `width:50px; height:20px; background-color:#AEB6BF; border:1px solid black`;

const result= document.querySelector('span');


const progressMore=()=>{
    result.innerText= Number(result.innerText)+10;
    let percent = (result.innerText*1000)/100;
    console.log(percent);
    innerBar.style= `width:${percent}; height:20px; background-color:#566573; border:1px solid black`;
}

const progressLess=()=>{
    result.innerText= Number(result.innerText)-10;
    let percent = (result.innerText*1000)/100;
    console.log(percent);
    innerBar.style= `width:${percent}; height:20px; background-color:#E59866; border:1px solid black`;
}



buttonOne.addEventListener('click',progressLess);

buttonTwo.addEventListener('click',progressMore);

