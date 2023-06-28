const refs = {
  textInput: document.getElementById('name-input'),
  output: document.getElementById('name-output'),
};

const onTextInputChange = event => {
  if (event.currentTarget.value !== '') {
    return (refs.output.textContent = event.currentTarget.value);
  }
  refs.output.textContent = 'Anonymous';
};

refs.textInput.addEventListener('input', onTextInputChange);
