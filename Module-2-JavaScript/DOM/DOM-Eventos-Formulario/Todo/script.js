function addLi()
{
    let txtVal= document.getElementById('txtVal').value;
        listNode = document.getElementById('list');
        liNode = document.createElement("li");
        txtNode= document.createTextNode(txtVal);

        liNode.appendChild(txtNode);
        listNode.appendChild(liNode);
        document.getElementById('txtVal').value = "";

}










