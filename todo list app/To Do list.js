let ItemContainer = document.getElementById('items');
let itemInput = document.getElementById('item');

function select(){
    let singleItem = document.createElement('li')
    let itemName = itemInput.value;
    let itemText =  document.createTextNode(itemName)
    ItemContainer.appendChild(singleItem);
    singleItem.append(itemText);
}
let btn = document.getElementById('btn');
let body = document.getElementById('body');

btn.addEventListener("click", ()=>{
    body.style.backgroundColor = "red";
})