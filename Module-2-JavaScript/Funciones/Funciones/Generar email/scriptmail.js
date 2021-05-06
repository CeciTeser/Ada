const generarEmail = (usuario, dominio) =>{
    return usuario +'@'+dominio + '.com';
}
console.log (generarEmail('adalovelace', 'gmail'));
