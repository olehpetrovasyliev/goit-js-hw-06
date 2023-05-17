const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.classList.add('item');
  console.log(li);
   li.textContent = ingredient;
list.append(li)

});

console.log(list);