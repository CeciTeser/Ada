const body = document.querySelector('body');
body.style = `display:flex; justify-content: center; align-items:center; flex-direction:column; margin-top: 50px; margin-left:500px; width:400px; height:400px; background-color:'black'; border-radius:20px; border:2px solid #DDD; font-family: 'Noto Sans JP', sans-serif; box-shadow: 8px 5px 6px -2px #DDD;`


const title= prompt ('Ingrese un titulo');
const h1=document.querySelector('h1');
h1.innerHTML= title; 
h1.style=`font-size:40px; color:#DDD`;


const image= prompt ('Ingrese una url de una imagen');
document.querySelector('#imageurl').src = image;
imageurl.style= `width:200px; height:150px`;


const article= prompt ('Ingrese una url de un artículo');
document.querySelector('#articleurl').href = article;





//https://www.ngenespanol.com/wp-content/uploads/2018/09/Fotos-Divertidas-del-mundo-animal-P.png
//https://www.tuabogadodefensor.com/responsabilidad-propietario-animales/#:~:text=El%20art.,del%20que%20lo%20hubiera%20sufrido.%C2%BB