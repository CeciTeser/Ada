const jugarPiedraPapelTijera = (a,b)=>{
    if (a===b) {
        return '¡Empate!'
    }
    if ((a==='tijera') && (b==='papel')){
        return '¡Ganó tijera!'
    }
    if ((a==='papel') && (b==='tijera')){
        return '¡Ganó tijera!'
    }
    if ((a==='piedra') && (b==='papel')){
        return '¡Ganó papel!'
    }
    if ((a==='papel') && (b==='piedra')){
        return '¡Ganó papel!'
    }
    if ((a==='tijera') && (b==='piedra')){
        return '¡Ganó piedra!'
    }
    if ((a==='piedra') && (b==='tijera')){
        return '¡Ganó piedra!'
    }
    
}

console.log(jugarPiedraPapelTijera('tijera','piedra'))
console.log(jugarPiedraPapelTijera('piedra', 'tijera'))
console.log(jugarPiedraPapelTijera('papel', 'piedra'))
console.log(jugarPiedraPapelTijera('piedra', 'papel'))
console.log(jugarPiedraPapelTijera('papel', 'tijera'))
console.log(jugarPiedraPapelTijera('tijera', 'papel'))
console.log(jugarPiedraPapelTijera('piedra', 'piedra'))
console.log(jugarPiedraPapelTijera('papel', 'papel'))
console.log(jugarPiedraPapelTijera('tijera', 'tijera'))