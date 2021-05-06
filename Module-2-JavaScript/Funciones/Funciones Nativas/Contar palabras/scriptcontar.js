const palabra1 = 'javascript';
const palabra2 = 'ada lovelace';

const palabra3 = 'si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos';

function contarPalabras(frase){
    return (frase.split(/\W+/).length);
}
console.log (contarPalabras(palabra1))
console.log (contarPalabras(palabra2))
console.log (contarPalabras(palabra3))



