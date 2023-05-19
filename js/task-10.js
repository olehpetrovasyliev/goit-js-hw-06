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
  addBtn: document.querySelector("[data-create]"),
  delBtn: document.querySelector("[data-destroy]"),
  input: document.querySelector("input"),
}; // refs are ok

//
let boxSize = 30;
const createBoxes = (event) => {
  let amount = refs.input.value;

  for (let i = 1; i <= amount; i++) {
    boxSize += i * 10;

    const newDiv = document.createElement("div");
    newDiv.style.width = boxSize + "px";
    newDiv.style.height = boxSize + "px";
    newDiv.style.backgroundColor = getRandomHexColor();

    refs.boxes.append(newDiv);
  }
  // it doesn`t work`
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
};
refs.addBtn.addEventListener("click", createBoxes);

refs.delBtn.addEventListener("click", destroyBoxes); //
