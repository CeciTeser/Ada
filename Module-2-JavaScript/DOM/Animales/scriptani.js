const animal = prompt('Elige un aminal: conejo, delfin y jirafa');
const imagen= document.getElementsByClassName('imagen');
const img= document.querySelector('img');

const elijeAnimal=(a)=>{
    if (a==='conejo'){
        img.setAttribute('src','https://t2.ea.ltmcdn.com/es/images/0/7/1/cuidados_del_conejo_3170_orig.jpg');
    } else if (a==='delfin'){
        img.setAttribute('src','http://www.fabulasdecomunicacion.es/files/2018/12/Delf%C3%ADn-1024x602.jpg');
    } else if (a==='jirafa'){
        img.setAttribute('src','https://www.oasysparquetematico.com/wp-content/uploads/2019/01/jirafa.jpg');
    }
}

elijeAnimal(animal);