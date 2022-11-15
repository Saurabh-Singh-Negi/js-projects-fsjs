const timer = document.querySelector(".timer");
const reset = document.querySelector(".btn-reset");
const toggle_btn = document.querySelector(".btn-toggle");
const text_area = document.querySelector(".text-area");

let seconds = 0;
let minutes = 0;
let sec = 0;
let flag = false;
let interval = null;

toggle_btn.addEventListener("click", () => {
    if(interval) {
        clearInterval(interval);
    }
    flag = !flag;

    interval = setInterval(toggle,1000);
})

reset.addEventListener("click", () => {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    sec = 0;
    timer.innerText = "00:00";
    text_area.value = " ";
})

function toggle() {
    if(flag) {
        sec++;
        minutes = Math.floor(sec / 60);
        seconds = sec % 60;

        if(minutes < 10) minutes = "0" + minutes;
        if(seconds < 10) seconds = "0" + seconds;

        timer.innerText = `${minutes}:${seconds}`;
    }
    else {
        clearInterval(interval);
    }
}