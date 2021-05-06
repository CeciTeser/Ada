const valor1='123456';
const valor2='111222333';

function ocultarContrasenia (contrasenia){
    return contrasenia.replace(/[0-9]/g, "*")
    
}

console.log(ocultarContrasenia(valor1));
console.log(ocultarContrasenia(valor2));