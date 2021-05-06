const palabra1='javascript';
const palabra2='soy una hacker';
const palabra3='ADA LOVELACE';

function aHackerSpeak (value){
    return value.replace (/i/ig,1).replace (/e/ig,3).replace (/a/ig,4).replace (/s/ig,5).replace (/o/ig,0)       
}

console.log(aHackerSpeak(palabra1));
console.log(aHackerSpeak(palabra2));
console.log(aHackerSpeak(palabra3));