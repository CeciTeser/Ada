const obtenerNota = (puntaje)=>{
    if (puntaje <6 ) return "Desaprobado";
    if (puntaje >=6 && puntaje<7) return "Regular";
    if (puntaje >=7 && puntaje<8 ) return "Bueno";
    if (puntaje >=8 && puntaje<10 ) return "Muy bueno";
    if (puntaje ===10) return "Excelente";
    if (puntaje <0 || puntaje >10) return "Puntaje inválido";
}

console.log (obtenerNota(7))
console.log (obtenerNota(9.6))
console.log (obtenerNota(12))