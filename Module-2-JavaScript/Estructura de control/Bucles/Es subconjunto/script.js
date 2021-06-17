const conjunto =[1, 2, 3, 4, 5]
const subconjunto =[1, 2, 3]
console.log('conjunto', conjunto);
console.log('subconjunto',subconjunto);

const esSubconjunto=(conjunto,subconjunto)=>{
    let resultado= '';
    for (let i=0; i<conjunto.length;i++)
    
    for (let j=0; j<subconjunto.length;j++)

    resultado = (conjunto.includes(subconjunto[j]))
    

    console.log(resultado);

}
esSubconjunto(conjunto,subconjunto);


