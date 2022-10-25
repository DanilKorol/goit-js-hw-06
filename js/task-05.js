const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onTextInput);

function onTextInput(event) {
    if (event.currentTarget.value === '') {
        outputEl.textContent = 'Anonymous';
    }
    outputEl.textContent = event.currentTarget.value;

}