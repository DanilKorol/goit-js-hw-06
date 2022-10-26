function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция.При нажатии на кнопку Очистить,
//     коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
//  Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

//     1 Размеры самого первого <div> - 30px на 30px.
//     2 Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//     3 Все элементы должены иметь случайный цвет фона в формате HEX. 
//     Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.

const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', createCollectionEl);
btnDestroyEl.addEventListener('click', destroyBoxes);

function createCollectionEl(event) {
  boxesEl.innerHTML = '';
  boxesEl.append(...createBoxes(inputEl.value));
}

function destroyBoxes(event) {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}

function createBoxes(amount) {
  const elements = [];
  let initialBoxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    initialBoxSize += 10;

    element.style.width = `${initialBoxSize}px`;
    element.style.height = `${initialBoxSize}px`;
    element.style.backgroundColor = getRandomHexColor();

    elements.push(element);
  }
  return elements;
}
