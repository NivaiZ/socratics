export function characterCount() {
  const textMin = document.querySelector('[data-count="min"]');
  const textMax = document.querySelector('[data-count="max"]');
  const textarea = document.querySelector('[data-count="textarea"]');
  const button = document.querySelector('[data-button="submit"]');

  if (textMin && textMax && textarea && button) {
    textMin.textContent = "0";
    textMax.textContent = textarea.getAttribute("maxlength");
    button.disabled = true;

    textarea.addEventListener('input', () => {
      const text = textarea.value;
      const currentLength = text.length;

      if (currentLength > 0) {
        button.disabled = false;
        button.querySelector('.group-button__sign').textContent = 'Создать презентацию';
      } else {
        button.disabled = true;
        button.querySelector('.group-button__sign').textContent = 'Следующий шаг';
      }

      textMin.textContent = currentLength;
    });
  }
}
