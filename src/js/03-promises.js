import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', onCreatePromises);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onCreatePromises(e) {
  e.preventDefault();

  let { delay, step, amount } = e.target.elements;
  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  if (delayValue < 0 || stepValue < 0 || amountValue < 0) {
    Notify.failure(`❌ Negative number!`, {
      position: 'center-top',
    });
    return;
  }

  for (let posNumber = 1; posNumber <= amountValue; posNumber += 1) {
    createPromise(posNumber, delayValue).then(onSuccess).catch(onError);
    delayValue += stepValue;
  }
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
    position: 'center-top',
  });
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
    position: 'center-top',
  });
}
