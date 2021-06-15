const array=[1, 1, 2, 2, 3, 3]

const removerDuplicados=(array)=>{
    let unicos = [];

    for(let i = 0; i < array.length; i++) {

    let elemento = array[i];

    if (!unicos.includes(array[i])) {
        unicos.push(elemento);
    }
    }
    console.log(unicos);
}
removerDuplicados(array);