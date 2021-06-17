const palabra ='hola';
const cantidad = 2

const repetirLetras=(palabra, cantidad)=>{
    let newString="";

    for (let i=0; i<palabra.length; i++){
        for (let j=0; j<cantidad; j++)
        newString=newString + palabra[i]
    }

    console.log(newString);
}
    repetirLetras(palabra, cantidad);


// const repetirLetras=(palabra, cantidad)=>{
//     let separar =palabra.split('');

//     let repetir= separar.map(separar=>separar.repeat(cantidad))

//     console.log(repetir.join(''))

//     return repetir.join('') 
// }

// repetirLetras(palabra, cantidad);