const temp= prompt('Ingrese una temperatura');
const temph1=document.querySelector('h1');
const span=document.querySelector('span');

const cambiaTemp=()=>{
    if (temp < 0) {
        temph1.style =`color:#16578C`,
        span.innerText=temp;
    }  else if (temp >=0 && temp <15) {
        temph1.style =`color:#AEC9DF`,
        span.innerText=temp;
    } else if (temp >=15 && temp <25) {
        temph1.style =`color:#7BE194`,
        span.innerText=temp;
    } else if (temp >=25 && temp <30) {
        temph1.style =`color:#E3DC57`,
        span.innerText=temp;
    } else if (temp >=30 && temp <= 35) {
        temph1.style =`color:#DFB245`,
        span.innerText=temp;
    } else if (temp >35) {
        temph1.style =`color:#D12323`,
        span.innerText=temp;
    } 
}
            
cambiaTemp(temp);