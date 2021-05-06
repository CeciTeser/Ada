const h3= document.querySelector('h3');
h3.style=`font-family: 'Montserrat'; sans-serif; font-size:30px; color: #D0CDD6`;

const p=document.querySelector('p');
p.style= `font-family: 'Montserrat'; sans-serif; font-size:20px; color: #EB7A3D`;

const span= document.querySelectorAll('span');

for(let i=0; i < span.length; i++){
    span[i].style.backgroundColor= '#D0CDD6';
    span[i].style.width= '100px';
    span[i].style.height= '30px';
    span[i].style.color= 'black';
    span[i].style.borderRadius= '20px';
    span[i].style.fontSize= '10px';
    span[i].style.fontFamily= 'Montserrat,sans-serif';
    span[i].style.display= 'flex';
    span[i].style.justifyContent= 'center';
    span[i].style.alignItems= 'center';
    span[i].style.flexDirection= 'row';
    span[i].style.margin= '15px';
}

const span1= document.getElementById('span1');
const span2= document.getElementById('span2');
const span3= document.getElementById('span3');


const like= prompt ('Ingresa la cantidad de me gusta');
span1.innerText = `${like} Me gusta`;

const loveit= prompt ('Ingresa la cantidad de me encanta');
span2.innerText = `${loveit} Me encanta`;

const awesome= prompt ('Ingresa la cantidad de me asombra');
span3.innerText = `${awesome} Me asombra`;




