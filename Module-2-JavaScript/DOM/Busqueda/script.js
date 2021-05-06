const palabra = prompt("ingrese una palabra");
//Guardo el texto donde aparece
const text = document.querySelectorAll("#text li");

for(let i = 0; i < text.length; i++){
   const textHTML = text[i].innerHTML;
   if (textHTML.includes(palabra)){
      text[i].style.backgroundColor = "red";
   }
}




//text.textContent optengo el texto del html,es decir,que tengo un string con el texto
const textHTML = text.textContent;

//text.innerHTML voy a modificar el html
//replaceAll voy a tomar lo que ingreso el usuario y agrarle la etiqueta de span

// text.innerHTML = textHTML.replaceAll(palabra,`<span style="color:red;font-weight:bold">${palabra}</span>`);

// html

// <p id="text">Lorem casa ipsum dolor sit amet, consectetur adipisicing elit. At optio, odio earum temporibus atque debitis, nihil error assumenda maxime sunt magni inventore expedita neque, exercitationem voluptatum illo recusandae sequi esse? casa</p>

