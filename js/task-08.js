// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector(".login-form");

const validator = (event) => {
  event.preventDefault();

  const { email, password } = event.target.elements;
  if (email.value === "" || password.value.length === 0) {
    return alert("please fill all the fields");
  }
  console.log({
    email: email.value,
    password: password.value,
  });
  event.target.reset();
};

form.addEventListener("submit", validator);
