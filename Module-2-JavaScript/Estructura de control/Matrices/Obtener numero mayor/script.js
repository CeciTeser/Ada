const matriz=[[2, 7, 12, 1],[8, 23],[9, 45, 7],[22, 3, 24, 4],]

const obtenerNumeroMayor=(matriz)=>{
    let maximo=0;

    for (let x=0;x<matriz.length;x++) {
        for (let y=0;y<matriz[x].length;y++) {
            if(maximo < matriz[x][y]){
                maximo = matriz[x][y];
            }
        }                
      
    }
    console.log(maximo)
    // console.log(Math.max(...[].concat(...matriz)));
    // return Math.max(...[].concat(...matriz));
}

obtenerNumeroMayor(matriz);