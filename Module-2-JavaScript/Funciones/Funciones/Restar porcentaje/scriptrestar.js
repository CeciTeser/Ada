const calcularPorcentaje = (numero,porcentaje) =>{
    return numero * porcentaje /100;
}

const restarPorcentaje=(numero, porcentaje)=>{
    const porc = calcularPorcentaje(numero,porcentaje);
    return numero - porc
}

console.log (restarPorcentaje(100, 15));
console.log (restarPorcentaje(10, 40));
console.log (restarPorcentaje(200, 10));
