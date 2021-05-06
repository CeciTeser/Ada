const redInput = document.getElementById('red'); 
let red = redInput.value; 

const greenInput = document.getElementById('green'); 
let green = greenInput.value; 

const blueInput = document.getElementById('blue');
let blue = blueInput.value; 

const fondo = document.querySelector('body'); 



const setColor = (r,g,b) => {
    fondo.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
}

redInput.addEventListener('keyup', () => { 
red=redInput.value; 
green=greenInput.value; 
blue=blueInput.value; 
setColor(red, green,blue)
});


greenInput.addEventListener('keyup', () => { 
red=redInput.value; 
green=greenInput.value; 
blue=blueInput.value; 
setColor(red, green,blue)
});

blueInput.addEventListener('keyup', () => { 
red=redInput.value; 
green=greenInput.value; 
blue=blueInput.value; 
setColor(red, green,blue)
});
