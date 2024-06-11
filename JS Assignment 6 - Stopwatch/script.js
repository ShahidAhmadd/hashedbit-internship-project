let hours = 0, minutes = 0, seconds = 0;
let intervalId = null;
let isPaused = false;

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById('time').innerText = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function start() {
    if (intervalId === null) {
        intervalId = setInterval(updateTime, 1000);
        document.getElementById('start').disabled = true;
        document.getElementById('pause').disabled = false;
        document.getElementById('stop').disabled = false;
    }
}

function pause() {
    if (isPaused) {
        intervalId = setInterval(updateTime, 1000);
        document.getElementById('pause').innerText = 'Pause';
        isPaused = false;
    } else {
        clearInterval(intervalId);
        intervalId = null;
        document.getElementById('pause').innerText = 'Continue';
        isPaused = true;
    }
}

function stop() {
    clearInterval(intervalId);
    intervalId = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('time').innerText = '00:00:00';
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
    document.getElementById('stop').disabled = true;
    document.getElementById('pause').innerText = 'Pause';
    isPaused = false;
}
