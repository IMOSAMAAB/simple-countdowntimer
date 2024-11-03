let timer;
let timeLeft = 60; // Countdown from 60 seconds
const timerDisplay = document.getElementById("timer");

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        timer = null;
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function restartTimer() {
  stopTimer();
  timeLeft = 60; // Reset to 60 seconds
  updateDisplay();
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("restartBtn").addEventListener("click", restartTimer);

updateDisplay(); // Initial display
