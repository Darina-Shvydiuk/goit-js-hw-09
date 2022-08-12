import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const submit = document.querySelector('button');

submit.addEventListener('submit', onSubmitBtn);

let position = amount.value;
function onSubmitBtn() {
  createPromise() = amount.value;
  console.log(amount.value);
}
function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve([position, delay]);
      } else {
        reject(position);
      }
    }, delay);
  });
}

createPromise(2, 1500)
  .then(([position, delay]) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    // Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(([position, delay]) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    // Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
