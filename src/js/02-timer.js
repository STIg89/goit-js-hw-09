import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  dateInput: document.querySelector('#datetime-picker'),
  daysField: document.querySelector('[data-days]'),
  hoursField: document.querySelector('[data-hours]'),
  minutesField: document.querySelector('[data-minutes]'),
  secondsField: document.querySelector('[data-seconds]'),
};

let timerId = null;
refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onClickStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    onSwitchDate(selectedDates);
  },
};

const fp = flatpickr('#datetime-picker', options);

function onSwitchDate(selectedDates) {
  if (selectedDates[0] > new Date()) {
    refs.startBtn.disabled = false;
  } else {
    refs.startBtn.disabled = true;
    Notify.failure('Please choose a date in the future', {
      position: 'center-center',
      fontSize: '35px',
      width: '600px',
    });
  }
}

function onClickStart() {
  const selectedDate = fp.selectedDates[0];
  refs.dateInput.disabled = true;
  refs.startBtn.disabled = true;

  timerId = setInterval(() => {
    const currentDate = new Date();
    const timerValue = selectedDate - currentDate;

    if (timerValue <= 0) {
      clearInterval(timerId);
      return;
    }
    addTimerFace(convertMs(timerValue));
  }, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

function addTimerFace({ days, hours, minutes, seconds }) {
  refs.daysField.textContent = addLeadingZero(days);
  refs.hoursField.textContent = addLeadingZero(hours);
  refs.minutesField.textContent = addLeadingZero(minutes);
  refs.secondsField.textContent = addLeadingZero(seconds);
}

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
