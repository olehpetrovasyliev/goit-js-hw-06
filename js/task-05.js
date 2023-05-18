
const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const changeName = () => {
    nameOutput.textContent = input.value
}
   
input.addEventListener('input', changeName);