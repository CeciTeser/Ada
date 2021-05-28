
const form = document.getElementById("meses");
const rta=document.getElementById('rta');
// const button=document.querySelector('#respuesta');


const eleccionMes=(event)=>{
    event.preventDefault();

    const numero=event.target.numero.value;
    console.log(numero);

    switch(numero){
        case "uno":
        rta.innerHTML=`Enero`;
        break;

        case "dos":
        rta.innerHTML=`Febrero`;
        break;

        case "tres":
        rta.innerHTML=`Marzo`;
        break;

        case "cuatro":
        rta.innerHTML=`Abril`;
        break;

        case "cinco":
        rta.innerHTML=`Mayo`;
        break;
    }
};
form.addEventListener("submit", eleccionMes);
