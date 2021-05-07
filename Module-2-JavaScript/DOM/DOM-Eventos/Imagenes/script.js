const smallImages= document.getElementsByClassName('smallSize');
smallImages.style=`width:200px; height:300px;`

const bigImage= document.querySelector('#bigImg');
bigImage.style=`width:500px, height:500px;`

for(let i=0; i <smallImages.length; i++){
    smallImages[i].style.height="100px";

    const changeSize=()=>{   

        bigImage.setAttribute('src',smallImages[i].src)
    }
    smallImages[i].addEventListener('click', changeSize);
};