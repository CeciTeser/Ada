const form = document.querySelector('form');

const respuesta = document.querySelector('#rta');


const mostrarFechas=(event)=>{
    event.preventDefault();

    const fechas= event.target.fechas.value;

    switch(fechas){
        case "primavera":
        respuesta.innerHTML = `21 marzo hasta 20 junio`;
        break;

        case "verano":
        respuesta.innerHTML = `21 junio hasta 20 septiembre`;
        break;

        case "otoño":
        respuesta.innerHTML = `21 septiembre hasta 20 diciembre`;
        break;

        case "invierno":
        respuesta.innerHTML = `21 diciembre hasta 20 marzo`;
        break;
    }

};

form.addEventListener("submit",mostrarFechas);