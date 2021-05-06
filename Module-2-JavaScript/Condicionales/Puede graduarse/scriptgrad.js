const puedeGraduarse = (asistencia,materiasAprobadas,tesisAprobada)=>{
    return asistencia>=75 && materiasAprobadas>=50 && tesisAprobada

}

console.log (puedeGraduarse(80, 50, true))
console.log (puedeGraduarse(80, 50, false))
console.log (puedeGraduarse(80, 45, true))
console.log (puedeGraduarse(80, 45, false))
console.log (puedeGraduarse(65, 50, true))
console.log (puedeGraduarse(42, 45, true))
console.log (puedeGraduarse(28, 45, false))