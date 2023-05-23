const inputElements = document.querySelectorAll('input');

function validateInput() {
  inputElements.forEach((input) => {
    const icon = input.nextElementSibling; 
    const msg = icon.nextElementSibling; 
    if (input.value === '') {
      icon.style.display = 'block';
      msg.style.display = 'block'; 
    } else {
      icon.style.display = 'none'; 
      msg.style.display = 'none'; 
    }
  });
}

inputElements.forEach((input) => {
  input.addEventListener('blur', validateInput); 
});
