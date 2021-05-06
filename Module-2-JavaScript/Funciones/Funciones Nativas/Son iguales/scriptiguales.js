const palabra1= 'javascript';
const palabra2= 'JavaScript';
const palabra3= 'AdA LoVeLaCe';
const palabra4= 'Ada Lovelace';
const palabra5= 'NO ESTOY GRITANDO';
const palabra6= 'ESTOY GRITANDO';

function sonIguales (iguales, iguales1){
    return iguales.length === iguales1.length    
}
// o esta es otra solución
//return (iguales.toLowerCase()===iguales1.toLowerCase())


console.log (sonIguales (palabra1 , palabra2));
console.log (sonIguales (palabra3 , palabra4));
console.log (sonIguales (palabra5 , palabra6));

