const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

const onClickDecrementBtn = () => {
  refs.value.textContent = counterValue -= 1;
};

const onClickIncrementBtn = () => {
  refs.value.textContent = counterValue += 1;
};

refs.decrementBtn.addEventListener('click', onClickDecrementBtn);

refs.incrementBtn.addEventListener('click', onClickIncrementBtn);
