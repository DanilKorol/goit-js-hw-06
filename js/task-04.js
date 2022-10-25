let counterValue = 0;

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

decrementBtnEl.addEventListener('click', onDecrementBtnClick);
incrementBtnEl.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}

function onIncrementBtnClick() {
     counterValue += 1;
    counterValueEl.textContent = counterValue;
}