const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red', 'green','blue','yellow','brown','pink','purple'];

button.addEventListener('click',changeB);


function changeB(){
    let a = parseInt(Math.floor(Math.random()*color.length));
    body.style.backgroundColor = color[a];
}