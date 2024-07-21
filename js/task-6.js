function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Пошук елементів 
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

// Функція для створення колекції елементів
function createBoxes(amount) {
  // Очищення попередніх елементів
  boxesContainer.innerHTML = '';

  // Створення нових елементів
  const fragment = document.createDocumentFragment();
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginTop = '10px';
    box.style.marginRight = '10px';
    boxSize += 10;
    fragment.appendChild(box);
  }

  // Додавання нових елементів до контейнера
  boxesContainer.appendChild(fragment);
}

// Функція для очищення колекції елементів
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Додавання обробника події для кнопки Create
createButton.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

// Додавання обробника події для кнопки Destroy
destroyButton.addEventListener('click', () => {
  destroyBoxes();
  input.value = '';
});