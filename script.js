const form = document.querySelector('form');
const button = document.querySelector('button');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');

const emailArray = [];
const passwordArray = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  emailArray.push(email.value);
  passwordArray.push(password.value);
  console.log(emailArray);
  console.log(passwordArray);
});

button.addEventListener('click', () => {
  if(email.value.length > 0 && password.value.length > 0) {
    console.log('You have successfully signed up!');
    email.style.border = '1px solid green';
    password.style.border = '1px solid green';
  }

  else{
    console.log('Please enter a valid email and password');
    email.style.border = '1px solid red';
    password.style.border = '1px solid red';
  }
});