const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");
const text = document.querySelector(".text-input");

let timer;
let flag = 0;

btnStart.addEventListener("click", () => {
    
    if(text.value > 0) {
        timer = setInterval(reduceTime, 1000);
    }
    else {
        alert("please enter value greater than 0")
    }
    
})

btnReset.addEventListener("click", () => {
    text.value = 0;
    flag = 1;
})

function reduceTime() {
    if(text.value < 2) { 
        clearInterval(timer);
    }

    if(flag == 0) {
        text.value = text.value-1;
    }
}




