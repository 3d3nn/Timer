const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timer = document.getElementById("timer");

startBtn.addEventListener("click", () => {
  startTimer();
});

stopBtn.addEventListener("click", () => {
  stopTimer();
});

resetBtn.addEventListener("click", () => {
  resetTimer();
});

let interval = 0;
let timeLeftInSec = eval(25 * 60);

function formatTimer() {
  let min = Math.floor(timeLeftInSec / 60);
  let sec = timeLeftInSec % 60;
  let displayTime = `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;

  timer.textContent = displayTime;
}
function startTimer() {
  interval = setInterval(() => {
    timeLeftInSec--;
    formatTimer();
    startBtn.disabled = true;
    if(timeLeftInSec === 0){
      clearInterval(interval);
      alert("Time's up!!")
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}
function resetTimer() {
  timer.textContent = "25:00";
  clearInterval(interval);
  stopBtn.disabled = false;
  startBtn.disabled = false;
}
