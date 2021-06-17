const string = 'Esto es un título'

const capitalizarPalabras=(string)=>{
    let output="";
    for (let i=0; i<string.length;i++){
       output = string.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))); 
        console.log(output)
    }
}
capitalizarPalabras(string);