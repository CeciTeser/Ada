const imagen= prompt('Ingrese un tamaño de imagen chica (200px), mediana (500px) o grande (800px)');
const tamanioimg=document.querySelector('img');


const cambiaTamanio=()=>{
    if (imagen =='chica') {
        tamanioimg.style =`width:200px`;
    }  else if (imagen =='mediana') {
        tamanioimg.style =`width:500px`;
    } else if (imagen =='grande') {
        tamanioimg.style =`width:800px`;
    } 
}
            
cambiaTamanio(imagen);