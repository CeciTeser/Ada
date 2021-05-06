const rojo = Number (prompt ('Ingrese un primer valor de 0 a 255 correspondiente al color rojo en sistema rgb'))
const verde = Number (prompt ('Ingrese un primer valor de 0 a 255 correspondiente al color verde en sistema rgb'))
const azul = Number (prompt ('Ingrese un primer valor de 0 a 255 correspondiente al color azul en sistema rgb'))

const colorRgb = `rgb(${rojo},${verde},${azul})`;

const color=document.querySelector('body')

color.style=`background-color:${colorRgb}`; 



 



