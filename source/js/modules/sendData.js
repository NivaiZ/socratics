export function sendDataOnServer() {
  const form = document.getElementById('general-form');
  const inputElements = form.querySelectorAll('[data-verification="count"]');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const selectedValue = document.getElementById('selectedValue').value;

      const isAnyInputEmpty = checkEmptyInputs(inputElements);

      if (event.submitter && event.submitter.classList.contains('group-button__button--blue')) {
        if (selectedValue === "" || isAnyInputEmpty) {
          scrollToFirstInvalidInput(inputElements);
          return;
        } else {
          const formData = new FormData(form);
          formData.forEach((value, key) => {
            console.log(value, key);
          });
        }
      }
    });
  }
}

function checkEmptyInputs(inputs) {
  let isAnyInputEmpty = false;
  inputs.forEach(input => {
    if (input.value.trim() === "") {
      isAnyInputEmpty = true;
      const errorDiv = input.nextElementSibling;
      errorDiv.style.display = 'block';
      input.classList.add('invalid__field');
    } else {
      const errorDiv = input.nextElementSibling;
      errorDiv.style.display = 'none';
      input.classList.remove('invalid__field');
    }
  });
  return isAnyInputEmpty;
}

function scrollToFirstInvalidInput(inputs) {
  for (const input of inputs) {
    if (input.classList.contains('invalid__field')) {
      const rect = input.getBoundingClientRect();
      const scrollTop = window.clientWidth || document.documentElement.scrollTop;
      const targetTop = rect.top + scrollTop;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
      break;
    }
  }
}

function getValueDropDownList () {
  const dropdownLinks = document.querySelectorAll('.dropdown__link');
  const selectedValueInput = document.getElementById('selectedValue');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', function () {
      const selectedValue = this.textContent;
      selectedValueInput.value = selectedValue;
    });
  });
}
getValueDropDownList();
