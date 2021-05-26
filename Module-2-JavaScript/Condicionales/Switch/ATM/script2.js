const pin= document.querySelector('#pin');
const boxButton=document.querySelector('#box-button');


const pinChecked =(event)=>{
    
    if( event.keyCode === 13)
    {event.preventDefault();
        if(pin.value=="2323"){
        boxButton.style=`display:flex`;}
        else {
            alert('Pin incorrecto. Intente de nuevo')
        }
    }
}
pin.addEventListener('keydown', pinChecked);

const botones=document.getElementsByTagName('button');
const formExtraer=document.querySelector('#form-extraer');
const formTrasferir = document.querySelector('#form-trasferir');
const formDepositar = document.querySelector('#form-depositar');
const formPin = document.querySelector('#form-pin');

const atm =(event)=>{
    const botonClickeado = event.target.value;
    switch (botonClickeado){
        case "extraer":
            formExtraer.style=`display:flex`;
            formTrasferir.style=`display:none`;
            formDepositar.style=`display:none`;
            formPin.style=`display:none`;
        break

        case "transferir":
            formExtraer.style=`display:none`;
            formTrasferir.style=`display:flex`;
            formDepositar.style=`display:none`;
            formPin.style=`display:none`;
        break

        case "depositar":
            formDepositar.style=`display:flex`;
            formExtraer.style=`display:none`;
            formTrasferir.style=`display:none`;
            formPin.style=`display:none`;
        break

        case "cambiar-pin":
            formPin.style=`display:flex`;
            formDepositar.style=`display:none`;
            formExtraer.style=`display:none`;
            formTrasferir.style=`display:none`;
        break

        case "salir":
            boxButton.style=`display:none`;
            pin.value = "";
            alert(`Fin de la sesión`);
        break
    }

}

for (const boton of botones) {
    boton.addEventListener('click', atm);
}

const initialMoney = document.querySelector('#initial-money');
const inputExtraer = document.querySelector('#input-extraer');
const okButtonExtraer=document.getElementById('ok-buttonextraer');

const extrerDinero=()=>{
    if (inputExtraer.value>parseInt(initialMoney.innerHTML)){
        alert(`El valor a transferir debe ser menor al saldo`);}

    else if (inputExtraer.value<parseInt(initialMoney.innerHTML)){
        initialMoney.innerHTML=parseInt(initialMoney.innerHTML)-inputExtraer.value;
        alert(`Operación exitosa`);
    } 
    inputExtraer.value= "";
}

okButtonExtraer.addEventListener('click',extrerDinero);


const inputDepositar = document.querySelector('#input-depositar');
const okButtonDepositar=document.getElementById('ok-buttondepositar');
const depositarDinero=()=>{
    inputDepositar.value<parseInt(initialMoney.innerHTML)
    initialMoney.innerHTML=parseInt(initialMoney.innerHTML)+parseInt(inputDepositar.value);
    alert(`Operación exitosa`);
    inputDepositar.value= "";
}
okButtonDepositar.addEventListener('click',depositarDinero);


const inputTransferir = document.querySelector('#input-transferir');
const cbu= document.querySelector('#cbu');
const cbu1='aca';
const okButtonTransferir=document.getElementById('ok-buttontransferir');

const transferirDinero=()=>{
    inputTransferir.value<=parseInt(initialMoney.innerHTML); 
    initialMoney.innerHTML=parseInt(initialMoney.innerHTML)-inputTransferir.value;
    alert(`Operación exitosa`);
    inputTransferir.value= "";
}

okButtonTransferir.addEventListener('click',transferirDinero);

const newPin=document.querySelector('#new-pin');
const oldPin=document.querySelector('#old-pin');
const okButtonCambiarPin=document.getElementById('ok-buttoncambiarpin');

const cambiarPin =()=>{
    if(oldPin.value==pin.value){
        pin.value=newPin.value;
        console.log(pin.value)
        alert(`Pin cambiado correctamente`)
    }
    else{
        alert(`El PIN no coincide`)
    }
}

okButtonCambiarPin.addEventListener('click',cambiarPin);
