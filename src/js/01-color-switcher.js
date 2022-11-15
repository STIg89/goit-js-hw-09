const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let timerId = null;
refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', onClickStart);
refs.stopBtn.addEventListener('click', onClickStop);

function onClickStart() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onClickStop() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;

  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
