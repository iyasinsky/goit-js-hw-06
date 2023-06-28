const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log('formData', formData);

  loginForm.reset();
}
