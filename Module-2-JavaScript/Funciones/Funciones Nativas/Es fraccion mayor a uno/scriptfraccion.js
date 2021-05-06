
const p1 = '1/2';
const p2 = '2/2';
const p3 = '4/2';

function esFraccionMayorAUno(fraccion){
    const numerador = parseInt(fraccion[0]);
    const denominador = parseInt(fraccion[2]);
    const resultado = numerador/denominador;
    return resultado > 1 
}

console.log(esFraccionMayorAUno (p1));
console.log(esFraccionMayorAUno (p2));
console.log(esFraccionMayorAUno (p3));
