const str = 'programar es dificil';

function burlarse (value){
    return value.replace(/[aeiou]/g, 'i');
}

console.log (burlarse(str));