//global variables
const timer = document.querySelector(".timer");
const stop_btn = document.querySelector(".stop");
const start_btn = document.querySelector(".start");
const reset_btn = document.querySelector(".reset");

let interval = null;
let seconds = 0;
let hours = 0;
let minutes = 0;
let sec = 58;

// event listeners
// start timer
start_btn.addEventListener("click", () => {
    if(interval) {
        return
    }

    interval = setInterval(time, 1000);
});

// stop timer
stop_btn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
})

// reset timer
reset_btn.addEventListener("click", () => {
    clearInterval(interval);
    timer.innerText = "00:00:00"
})


const time = () => {
    sec++;

    hours = Math.floor(sec / 3600);
    minutes = Math.floor(Math.abs((hours*3600) - sec) / 60);
    seconds = Math.floor(sec % 60);

    if(hours < 10) {
        hours = "0" + hours;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    timer.innerText = `${hours}:${minutes}:${seconds}`
}


