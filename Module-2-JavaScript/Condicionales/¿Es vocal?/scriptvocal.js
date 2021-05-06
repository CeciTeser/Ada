const esVocal=(letra)=>{
    if (letra ==='a'|| letra === 'e'|| letra ==='i'|| letra === 'o' || letra === 'u'){
        return true;
    }
    else {
        return false;
    }
}

console.log (esVocal('a'))
console.log (esVocal('n'))
console.log (esVocal('e'))