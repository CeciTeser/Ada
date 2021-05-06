
const esVocal = (letra) => {
return (letra === 'a'|| letra === 'e'|| letra ==='i'|| letra === 'o' || letra === 'u')

}

const esConsonante=(a)=>{
    return !esVocal(a);
}

console.log (esVocal('a'))
console.log (esVocal('n'))
console.log (esVocal('e'))