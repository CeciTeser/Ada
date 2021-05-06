const palabra1='javascript';
const palabra2='ada lovelace'

function removerVocales (str){
    return str.replace(/[aeiou]/g,'')
}

console.log(removerVocales(palabra1));
console.log(removerVocales(palabra2));
