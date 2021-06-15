const palabra ='hola';
const cantidad = 2

const repetirLetras=(palabra, cantidad)=>{
    let respuesta="";

    for (let i=0; i<palabra.length; i++){
        respuesta=palabra[i].repeat(cantidad);

        
    }
    let respuesta2=respuesta.join('');
    console.log(respuesta2);
}
    repetirLetras(palabra, cantidad);


// const repetirLetras=(palabra, cantidad)=>{
//     let separar =palabra.split('');

//     let repetir= separar.map(separar=>separar.repeat(cantidad))

//     console.log(repetir.join(''))

//     return repetir.join('') 
// }

// repetirLetras(palabra, cantidad);