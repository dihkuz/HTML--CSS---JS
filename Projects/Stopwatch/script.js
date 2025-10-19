const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function formatTime(elapsedTime) {
    const miliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));

    return (
        (hours > 9 ? hours : "0" + hours) +
        ":" +
        (minutes > 9 ? minutes : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds) +
        "." +
        (miliseconds > 9 ? miliseconds : "0" + miliseconds)
    );
}

function startTimer() {
    timeStart = Date.now() - elapsedTime;

    timeInterval = setInterval(() => {
        elapsedTime = Date.now() - timeStart;
        
        timerEl.textContent = formatTime(elapsedTime);
    }, 10);

    startButtonEl.disabled = true;
    stopButtonEl.disabled =  false;
}

function stopTimer() {
    clearInterval(timeInterval);

    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}

function resetTimer() {
    clearInterval(timeInterval);
    
    elapsedTime = 0;

    timerEl.textContent = "00:00:00";
    
    startButtonEl.disabled = false;
    stopButtonEl.disabled = false;
}

startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);
