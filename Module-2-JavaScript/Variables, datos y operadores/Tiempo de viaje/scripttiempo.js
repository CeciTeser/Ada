const distancia= Number (prompt('Ingresá la distancia del recorrido'));

const resultadoEnBicicleta = distancia/10; 

const resultadoAPie = distancia/5; 

const resultadoEnAuto = distancia/50; 

alert ('Para la distancia ' +distancia+ ' km en bicicleta el tiempo de viaje es ' +resultadoEnBicicleta+ 'hora/s, a pie ' +resultadoAPie+ 'hora/s y en auto '+resultadoEnAuto+ 'hora/s');