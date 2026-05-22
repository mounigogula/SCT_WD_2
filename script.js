let startTime = 0;
let elapsedTime = 0;
let timerInterval;
const display = document.getElementById("display");
const laps = document.getElementById("laps");

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return (
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0")
  );
}

function startTimer() {
  if (!timerInterval) { // Prevent multiple intervals
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null; // Stop the timer completely
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
}

function recordLap() {
  if (elapsedTime > 0) {
    const li = document.createElement("li");
    li.textContent = formatTime(elapsedTime);
    laps.appendChild(li);
  }
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);
