function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

const DELAY = 1000;
let timeoutId = null;
btnStart.addEventListener('click', onTargetBtnStart);
btnStop.addEventListener('click', onTargetBtnStop);

function onTargetBtnStart() {
  timeoutId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, DELAY);

  btnStart.disabled = true;
}
function onTargetBtnStop() {
  clearInterval(timeoutId);
  btnStart.disabled = false;
}
