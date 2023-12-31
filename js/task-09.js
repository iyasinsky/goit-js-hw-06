const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;

  const colorSpan = document.querySelector('.color');
  colorSpan.textContent = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
