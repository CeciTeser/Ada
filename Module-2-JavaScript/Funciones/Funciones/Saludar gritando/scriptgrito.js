const gritar = (a)=>{
    return ('¡')+ a + ('!');

}

const obtenerNombreCompleto = (nombre, apellido)=> {
    const nomape=(nombre +' '+ apellido);
    return nomape;
}

const saludar = (nombre)=> {
    return 'Hola ' + nombre + ', un gusto conocerte'

}


const saludarGritando = (nombre,apellido) => {
    const nomape= obtenerNombreCompleto(nombre, apellido);

    const saludo= saludar (nomape);

    const grito= gritar (saludo);

    return grito
}

console.log (saludarGritando('Ada', 'Lovelace'));   