const numeros= [5, 7, 15, 22, 40];
let multiplicador = 2;

const multiplicar=(a, b)=>{
    let output = numeros.map(x => x * multiplicador);
    console.log(output)

}

multiplicar(numeros);

    // for(let i=0; i<numeros.length; i++){
    //     let multiplicador = 2;
    //     multiplicador=multiplicador * numeros[i];
    // }
    // console.log(numeros)
    // return multiplicador


multiplicar(numeros);

// console.log(Array.from([5, 7, 15, 22, 40], x => x *2))

// var multiplicar = 1;
//   for (var i = 0; i < num.length; i++){
//      multiplicar = multiplicar * num[i];
//   }
//   return multiplicar;
// }



// const contiene=(numero, numeros)=>{
//     for (const num of numeros){
//       return numeros.includes(numero);
//     }

// }

// let numeros = [1, 2, 3, 4];
// let triples = numeros.map(function(numero) {
//   return numero * 3;