const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (nameValue === '') {
    setErrorFor(nameInput, 'Nome não pode estar em branco');
  } else {
    setSuccessFor(nameInput);
  }

  if (emailValue === '') {
    setErrorFor(emailInput, 'E-mail não pode estar em branco');
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailInput, 'E-mail inválido');
  } else {
    setSuccessFor(emailInput);
  }

  if (passwordValue === '') {
    setErrorFor(passwordInput, 'Senha não pode estar em branco');
  } else {
    setSuccessFor(passwordInput);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('small');
  formControl.className = 'form-control error';
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


