
const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const changeName = () => {
    if (input.value.length !== 0) {
       nameOutput.textContent = input.value
    } else {
        nameOutput.textContent = 'Anonymous'
    }
     
}
   
input.addEventListener('input', changeName);