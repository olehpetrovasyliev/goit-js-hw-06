// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
//  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const rover = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

// ranger.value === text.fontSize
const textChanger = () => {
    text.style.fontSize = rover.value + 'px';
}
rover.addEventListener("input", textChanger)