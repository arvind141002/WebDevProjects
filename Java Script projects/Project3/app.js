
const lower = document.querySelector(".decrement");
const higher = document.querySelector(".increment");
const counter = document.querySelector(".counter-value");

lower.addEventListener('click',decrease);
higher.addEventListener('click',increase);

function increase(){
    let value = parseInt(counter.textContent,10);
    value+=1;
    if(value>0){
        counter.classList.remove("negative-color");
        counter.classList.add("positive-color");
    }
    else{
        counter.classList.remove("positive-color");
    }
    counter.textContent = value.toString();
}

function decrease(){
    let value = parseInt(counter.textContent,10);
    value-=1;
    if(value<0){
        counter.classList.add("negative-color");
        counter.classList.remove("positive-color");
    }
    else{
        counter.classList.remove("negative-color");
    }
    counter.textContent = value.toString();
}