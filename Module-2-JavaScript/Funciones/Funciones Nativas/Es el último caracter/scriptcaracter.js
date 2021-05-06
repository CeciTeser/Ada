const palabra = 'lovelace';
const caracter1 = 'e';
const caracter2 = 'f';

function esElUltimoCaracter (value, value2) {
    return (value.lastIndexOf(value2) === value.length-1)
}
console.log(esElUltimoCaracter (palabra, caracter1));
console.log(esElUltimoCaracter (palabra, caracter2));

