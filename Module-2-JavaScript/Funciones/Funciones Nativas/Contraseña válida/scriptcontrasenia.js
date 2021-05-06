const valida='contraseniaMuySegura';
const invalida = 'abc123';

function esValida (javascript){
    if (javascript.length >= 8) 
    {
        return true
    }
    else {
        return false
    }
}

console.log (esValida (valida));
console.log (esValida (invalida));
