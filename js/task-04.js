// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = document.querySelector('#value');
let value = 0;
const incBtn = document.querySelector('[data-action = "increment"]');
const decBtn = document.querySelector('[data-action = "decrement"]');

const increase = () => {
    value += 1;
    counterValue.textContent = value
}

const decrease = () => {
    value -= 1;
    counterValue.textContent = value
}



incBtn.addEventListener('click', increase);

decBtn.addEventListener('click', decrease);
