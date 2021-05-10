const mensaje = document.getElementById('mensaje');

const contador = document.getElementById('contador');

const boton=document.querySelector('button')

mensaje.addEventListener('input', function(a) {
    const target = a.target;
    const maxLength = target.getAttribute('maxlength');
    const actuallength = target.value.length;
    contador.innerHTML = `${actuallength-maxLength}/${maxLength}`;

    boton.addEventListener('click', function(){
        document.getElementById('mensaje').value = "Comentario enviado";
    });

    if (actuallength < 240) {
        mensaje.style ='border: 1px solid green';
    }  else {
        mensaje.style ='border: 1px solid red';
    }

});

