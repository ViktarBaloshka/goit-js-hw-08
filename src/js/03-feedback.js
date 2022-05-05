import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

updateForm();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(formData);
}

function updateForm() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    const { message, email } = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    form.email.value = email;
    form.message.value = message;
    formData.email = email;
    formData.message = message;
  }
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}
