const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onChangeTextSize);

function onChangeTextSize(event) {
    textEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
}

