const date1= '03/05/2015';
const date2= '22/01/1987';
const date3= '01/01/2020';


function esAnioNuevo (fecha){
    return (fecha.includes('01/01/2020'));
}

console.log (esAnioNuevo(date1));
console.log (esAnioNuevo(date2));
console.log (esAnioNuevo(date3));