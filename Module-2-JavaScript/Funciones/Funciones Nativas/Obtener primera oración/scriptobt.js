const oracion1= 'A mí no me preguntes, sólo soy una oración';
const oracion2='Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.'

function obtenerPrimeraOracion (str){
    return str.split('. ')[0]
}
console.log(obtenerPrimeraOracion (oracion1));
console.log(obtenerPrimeraOracion (oracion2));
