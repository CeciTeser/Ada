
const questionBox=document.getElementById('question-box');
const result=document.getElementById('result');
const tasks= [];

function addLi(){
    let number= document.getElementById('number').value;
        listNode = document.getElementById('list');
        liNode = document.createElement("li");
        numberNode= document.createTextNode(number);

        liNode.appendChild(numberNode);
        listNode.appendChild(liNode);
        document.getElementById('number').value= "";
        tasks.push(number);
        
}













