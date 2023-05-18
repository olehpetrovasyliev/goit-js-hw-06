// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
//  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const ranger = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

// ranger.value === text.fontSize
const textChanger = () => {
    text.style.fontSize = `${ranger.value}px`;
}
console.log(text.style.fontSize);
console.log(ranger.value);
ranger.addEventListener("input", textChanger)