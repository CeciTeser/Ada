
const calcularPorcentaje = (numero,porcentaje) =>{
    return numero * porcentaje /100;
}

const sumarPorcentaje=(numero, porcentaje)=>{
    const porc = calcularPorcentaje(numero,porcentaje);
    return numero + porc
}

console.log (sumarPorcentaje(100, 15));
console.log (sumarPorcentaje(10, 50));
console.log (sumarPorcentaje(200, 10));