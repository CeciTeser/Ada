const containerImg= document.querySelector('#container');
containerImg.style=`width:1000px; height: 1000px; border:1px solid #DDD`;

const buttonAdd=document.querySelector('button');

const urlAdd=document.querySelector('src')

const imgInput=document.querySelector('#img-input');



function showImg(){
    let urlAdd = imgInput.value
    const imgAdd = document.querySelector('#img');
    imgAdd.style=`width:900px; height: 900px;`;
    imgAdd.style.backgroundImage =`url("${urlAdd}")`;
    document.getElementById('img-input').value = "";
}

buttonAdd.addEventListener('click', showImg);

