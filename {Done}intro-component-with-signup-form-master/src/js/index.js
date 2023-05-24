const inputElements = document.querySelectorAll('input');

function validateInput() {
  inputElements.forEach((input) => {
    const icon = input.nextElementSibling;
    const msg = icon.nextElementSibling;

    if (input.value === '') {
      input.style.border = '2px solid #ff7a7a';
      icon.style.display = 'block';
      msg.style.display = 'block';

      if (input.getAttribute('type') === 'email') {
        input.classList.add('custom-placeholder');
        input.placeholder = 'email@example.com';
      }
    } else {
      input.style.border = '1px solid #ccc';
      icon.style.display = 'none';
      msg.style.display = 'none';
    }
  });
}

inputElements.forEach((input) => {
  input.addEventListener('blur', validateInput);
});
