function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

const refs = {
  boxes: document.querySelector("#boxes"),
  controls: document.querySelector("#controls"),
  addBtn: document.querySelector("[data-action = create]"),
  delBtn: document.querySelector("[data-action = destroy]"),
};

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    console.log(i);
    i.innerHTML = "<div></div>";
    refs.boxes.append(i);
  }
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
};

refs.addBtn.addEventListener("click", createBoxes);
refs.delBtn.addEventListener("click", destroyBoxes); //done
