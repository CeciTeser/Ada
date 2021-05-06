document.body.style= `display:flex; justify-content:center; align-items:center;flex-direction:column;`

const button=document.getElementById('switch-button');
const span=document.querySelectorAll('span');
const moon=document.getElementsByClassName('moon')[0];
const sun=document.getElementsByClassName('sun')[0];


const answer=(event)=>{

    document.body.classList.toggle('dark');

    const mode = document.body.getAttribute('class');

    if(mode !=='dark'){
        document.body.style = 'background-color: #FFF; color: #000';
        moon.style = 'display:none';
        sun.style = '';

    } else {
        document.body.style = 'background-color: #000; color: #FFF';
        moon.style = '';
        sun.style = 'display:none';
    }
}

button.addEventListener('click', answer);


