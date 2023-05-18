const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
const body = document.getElementById('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

document.querySelectorAll('.nav-links').forEach((i) => {
  i.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  });
});

const form = document.getElementById('fs-frm');
form.addEventListener('submit', validateForm);
function validateForm(event) {
  const emailInput = document.querySelector('input[name="email"]');
  const email = emailInput.value.toLowerCase(); // Convert email to lower case
  if (emailInput.value !== email) {
    event.preventDefault();
    const errorElement = document.createElement('p');
    errorElement.textContent =
      'Please enter the email in lower case.';
    errorElement.style.color = 'red';
    const existingError = document.getElementById('email-error');
    if (existingError) {
      existingError.remove();
    }
    const submitButton = document.getElementById('form-btn');
    submitButton.insertAdjacentElement('beforebegin', errorElement);
    errorElement.id = 'email-error';
  }
}
