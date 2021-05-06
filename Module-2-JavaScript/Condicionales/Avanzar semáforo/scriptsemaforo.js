const avanzarSemaforo = (colorActual)=>{
        if (colorActual === "verde") return "amarillo";
        if (colorActual === "amarillo") return "rojo";
        if (colorActual === "rojo") return "verde";
    } 


console.log (avanzarSemaforo('verde'))
console.log (avanzarSemaforo('amarillo'))
console.log (avanzarSemaforo('rojo'))