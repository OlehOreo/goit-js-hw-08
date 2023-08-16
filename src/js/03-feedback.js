import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const elements = {
  email: form.elements.email,
  message: form.elements.message,
};
const history = JSON.parse(localStorage.getItem(storageKey));

form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);

if (history) {
  elements.email.value = history.email;
  elements.message.value = history.message;
}

function handlerInput() {
  const userForm = {
    email: elements.email.value,
    message: elements.message.value,
  };

  localStorage.setItem(storageKey, JSON.stringify(userForm));
}

function handlerSubmit(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem(storageKey)));
  form.reset();
  localStorage.removeItem(storageKey);
}
