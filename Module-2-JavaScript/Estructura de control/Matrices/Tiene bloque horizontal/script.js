const matriz= [
        [1, 2, 3, 4],
        [1, 2, 2, 2],
        [1, 2, 4, 5],]

const tieneBloqueHorizontal =(matriz)=>{
    let output= false;

    for (let i=0; i< matriz.length; i++){

        const array=matriz[i];
        console.log(array);

        for (let j=0; j< array.length; j++){
            if(array[j] === array [j+1] && array[j+1] === array [j+2]){
                output=true 
            }
        }
        console.log(output);
    }
    return output; 
}

tieneBloqueHorizontal(matriz)



