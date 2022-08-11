import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minEl = document.querySelector('[data-minutes]');
const seconEl = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]');
let timerId = null;
let startTime = 0;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const currentTime = new Date().getTime();
    if (selectedDates[0] < currentTime) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
      return;
    } else {
      startTime = selectedDates[0].getTime();
      startBtn.disabled = false;
    }
  },
};
flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', onTargetBtn);
startBtn.disabled = true;
function onTargetBtn() {
  const timerId = setInterval(() => {
    const timerComponents = startTime - new Date().getTime();
    if (timerComponents <= 0) {
      clearInterval(timerId);
      return;
    }

    const obj = ({ days, hours, minutes, seconds } =
      convertMs(timerComponents));

    function addLeadingZero(value) {
      return value.padStart(2, '0');
    }
    daysEl.textContent = addLeadingZero(String(days));
    hoursEl.textContent = addLeadingZero(String(hours));
    minEl.textContent = addLeadingZero(String(minutes));
    seconEl.textContent = addLeadingZero(String(seconds));
  }, 1000);
}
