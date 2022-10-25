function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnChangeColorEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

btnChangeColorEl.addEventListener('click', onBodyColorChange);

function onBodyColorChange(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = document.body.style.backgroundColor;
};

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };