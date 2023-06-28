const rangeInput = document.querySelector('#font-size-control');

rangeInput.addEventListener('input', () => {
  const textEl = document.querySelector('#text');

  textEl.style.fontSize = `${rangeInput.value}px`;
});
