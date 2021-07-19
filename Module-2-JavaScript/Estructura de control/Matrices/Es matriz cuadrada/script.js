const matriz= [[4, 5],[2, 7, 1],[8, 10],];

const esMatrizCuadrada=(matriz)=>{
    let output = false;

    for (let x=0;x<matriz.length;x++) {
        for (let y=0;y<matriz[x].length;y++) {
            if(maximo < matriz[x][y]){
                maximo = matriz[x][y];
            }
        }                
    
    }
    console.log(maximo)
}

esMatrizCuadrada(matriz)