const palabra1 = "javascript";
const palabra2 = "java";
const palabra3 = "manzana";
const palabra4 = "cerveza";

function tienenMismaLongitud (a , b){
    if(a.length == b.length){
        return true
    }
    else{ return false}
}
console.log(tienenMismaLongitud('javascript', 'java'))
console.log(tienenMismaLongitud(palabra3, palabra4))