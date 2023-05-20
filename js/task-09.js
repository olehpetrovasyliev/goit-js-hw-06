function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const colorChanger = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
};

btn.addEventListener("click", colorChanger);
