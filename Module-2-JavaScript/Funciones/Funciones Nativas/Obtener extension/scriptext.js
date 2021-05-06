const extension1='imagen.png' 
const extension2='index.html' 
const extension3='notas.txt'



function obtenerExtension(archivo){
    const value=archivo.split('.');
    return value[1]
}
console.log(obtenerExtension (extension1));
console.log(obtenerExtension (extension2));
console.log(obtenerExtension (extension3));