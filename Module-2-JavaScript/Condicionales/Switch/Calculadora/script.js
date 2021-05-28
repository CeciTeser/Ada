const form = document.getElementById("calculadora");

console.log();

const calcular = (event) => {
  event.preventDefault();

  const num1 = parseInt(event.target.num1.value);
  const num2 = parseInt(event.target.num2.value);
  const op = event.target.operacion.value;

  let respuesta;

  switch (op) {
    case "suma":
      respuesta = num1 + num2;
      break;

    case "resta":
      respuesta = num1 - num2;
      break;

    case "multiplicacion":
      respuesta = num1 * num2;
      break;

    default:
      respuesta = num1 / num2;
  }

  rta.innerText = respuesta;
};

form.addEventListener("submit", calcular);
