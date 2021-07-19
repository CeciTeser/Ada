const matriz=[[4, 5],[2, 7, 1],[8, 10]];

const sumar=(matriz)=>{
let output=0;

    for (let x=0;x<matriz.length;x++) 
        for (let y=0;y<matriz[x].length;y++) {
            output += matriz[x][y];   
    
    }

    console.log(output);
}


sumar(matriz);