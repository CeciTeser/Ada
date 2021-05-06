const estaEnRango = (valor, nromin, nromax) =>{
    return valor>=1 && valor<=10
}

console.log (estaEnRango (3, 1, 10));
console.log (estaEnRango (1, 1, 10));
console.log (estaEnRango (10, 1, 10));
console.log (estaEnRango (12, 1, 10));
console.log (estaEnRango (-3, 1, 10));
