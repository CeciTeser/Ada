const puedeRenovarCarnet = (pasoTests,tieneMultasImpagas,pagoImpuestos)=>{
    return pasoTests==='true' && tieneMultasImpagas ==='false' && pagoImpuestos==='true'

    
}

console.log (puedeRenovarCarnet('true', 'true', 'true'))
console.log (puedeRenovarCarnet('true', 'true', 'false'))
console.log (puedeRenovarCarnet('true', 'false', 'true'))
console.log (puedeRenovarCarnet('true', 'false', 'false'))
console.log (puedeRenovarCarnet('false', 'true', 'true'))
console.log (puedeRenovarCarnet('false', 'true', 'false'))
console.log (puedeRenovarCarnet('false', 'false', 'true'))
console.log (puedeRenovarCarnet('false', 'false', 'false'))