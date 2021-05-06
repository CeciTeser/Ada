const puedeVerPelicula = (edad,tieneAutorizacion)=>{
    return edad>=15 || tieneAutorizacion==='true'
}


console.log (puedeVerPelicula (12, 'false'));
console.log (puedeVerPelicula (12, 'true'));
console.log (puedeVerPelicula (16, 'false'));
console.log (puedeVerPelicula (18, 'true'));
