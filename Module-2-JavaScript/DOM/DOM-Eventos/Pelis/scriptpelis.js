document.body.style=`display:flex; justify-content:center; align-items: center; flex-direction:column;`;


const buttonsContainer = document.querySelector('#buttons-container');
buttonsContainer.style=`margin:30px; display:flex; justify-content:center; align-items: center;`;

const images=document.querySelectorAll('img');

for(let i=0; i<images.length; i++){
    images[i].style.width="250px";
    images[i].style.height="350px";
    
}

const eachButton = document.getElementsByClassName('myButton');

for(let i=0; i<eachButton.length; i++){
    eachButton[i].style.backgroundColor="#DDD";
    eachButton[i].style.width="150px";
    eachButton[i].style.fontSize="15px";
    eachButton[i].style.margin="10px";
    eachButton[i].style.height="40px";
    eachButton[i].style.borderRadius="10px";
    eachButton[i].style.border="1px solid #DDD";
}


const movies = document.getElementsByClassName('movie');

const filter = (event) => {

    const eachButton = event.target;
    const genero = eachButton.getAttribute('data-genero');

    for(let i = 0; i < movies.length; i++) {
        if(genero === movies[i].getAttribute('data-cat') || genero === 'all') {
            movies[i].style=`display:in-line;`;
        } else {
            movies[i].style=`display:none;`;
        }
    }

}

for(let i = 0; i < eachButton.length; i++) {

    eachButton[i].addEventListener('click', filter)

}

// const movies = document.getElementsByClassName ('movie')
// const kids = document.getElementById('kidsMovies');
// const comedy = document.getElementById('comedyMovies');
// const fiction = document.getElementById('fictionMovies');



// allButton.addEventListener ('click', function (){
//     kids.style=`display:in-line`;
// } )

// comedyButton.addEventListener ('click', function (){
//     movies.style=`display:in-line`;
// } )
// kidsButton


// ScienceFictionButton


// const genero=()=>{
//     if(eachButton[0]){
//         movies.style=`display:in-line;`;
//     }
//     else if(eachButton[1]){
//         kids.style=`display:in-line;`;
//         fiction.style=`display:none`;
//         comedy.style=`display:none`;
//     }
//     else if(eachButton[2]){
//         horrorSection.style=`display:none;`;
//         actionSection.style=`display:none;`;
//         dramaSection.style=`display:in-line;`;
//     }
//     else if(eachButton[3]){
//         horrorSection.style=`display:none;`;
//         actionSection.style=`display:in-line;`;
//         dramaSection.style=`display:none;`;   
//     }
// }
//     for(let i = 0; i < buttons.length; i++) {
// eachButton[i].addEventListener('click', genero);
// }




// const filter = (event)=>{
//     const button = event.target;
//     const category = button.getAttribute('data-genero');

//     for(let i = 0; i <movies.length; i++) {
//         if(movies[i].classList.contains(genero) || genero === 'all') {
//             movies[i].style=`display:in-line;`;
//         } else {
//             movies[i].style=`display:none;`;
//         }
//     }
// }
//     for(let i = 0; i < eachButton.length; i++) {

//         eachButton[i].addEventListener('click', filter)

// }       




