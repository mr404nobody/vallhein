const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const millisecsEl = document.querySelector(".millisecs");

const start = document.getElementById("start");
const pause = document.getElementById("pause");
const resume = document.getElementById("resume");
const reset = document.getElementById("reset");
const add = document.getElementById("add");
const remove = document.getElementById("remove");

let timer;
let isPaused = false;
let min = 0;
let sec = 0;
let mil = 0;

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
resume.addEventListener("click", resumeTimer);
reset.addEventListener("click", resetTimer);
add.addEventListener("click", addMin);
remove.addEventListener("click", remMin);

function addMin() {
    min++;
    minutesEl.textContent = formatTime(min);
}

function remMin() {
    min--;
    minutesEl.textContent = formatTime(min);
}

function pauseTimer() {
    isPaused = true;
    pause.style.display = "none";
    resume.style.display = "inline-block";
}

function resumeTimer() {
    isPaused = false;
    pause.style.display = "inline-block";
    resume.style.display = "none";
}

function resetTimer() {
    clearInterval(timer);
    isPaused = false;

    min = 0;
    sec = 0;
    mil = 0;

    minutesEl.textContent = formatTime(min);
    secondsEl.textContent = formatTime(sec);
    millisecsEl.textContent = formatMillisecs(mil);

    start.style.display = "inline-block";
    pause.style.display = "none";
    resume.style.display = "none";
}

function startTimer() {

    timer = setInterval(() => {
        
        if(!isPaused) {
        
            mil += 10;

            if(mil === 1000) {
                sec++;
                mil = 0;
            }

            if(sec === 60) {
                min++;
                sec = 0;
            }

            millisecsEl.textContent = formatMillisecs(mil);
            secondsEl.textContent = formatTime(sec);
            minutesEl.textContent = formatTime(min);
        }
    }, 10);
    start.style.display = "none";
    pause.style.display = "inline-block";
}

function formatTime(time) {
    return time < 10 && time >= 0 ? `0${time}` : time;
}

function formatMillisecs(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}