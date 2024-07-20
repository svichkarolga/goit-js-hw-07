const nameInput = document.querySelector('#name-input');
const nameOutPut = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    const inputValue = nameInput.value.trim();
    nameOutPut.textContent = inputValue ? inputValue : "Anonymous";
});

