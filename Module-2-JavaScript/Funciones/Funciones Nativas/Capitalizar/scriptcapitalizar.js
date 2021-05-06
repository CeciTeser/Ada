const palabra1 = 'lovelace';
const palabra2 = 'había una vez...';

function capitalizar(frase) {
    return frase.charAt(0).toUpperCase() + frase.slice(1);
}

console.log (capitalizar(palabra1));
console.log (capitalizar(palabra2));

