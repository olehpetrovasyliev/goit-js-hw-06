// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.
//  Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


const changeName = () => {
  
    nameOutput.textContent = input.value
   }

input.addEventListener('input', changeName);