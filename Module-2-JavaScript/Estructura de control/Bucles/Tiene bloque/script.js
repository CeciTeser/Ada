const array=[1, 2, 3, 3, 3, 8];

const tieneBloque=(array)=>{
    let resultado= '';

    for (let i=0; i < array.length; i++){
    if (array[i]=== array[i+1] && array[i+1]=== array[i+2]){

            resultado = (array[i]=== array[i+1] && array[i+1]=== array[i+2]);
        }
    }
    return resultado;
};
tieneBloque(array);