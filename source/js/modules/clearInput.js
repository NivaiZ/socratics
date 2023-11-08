export function clearInput() {
  const inputs = document.querySelectorAll('[data-input="search"]');
  if (inputs) {
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      const closeBtn = input.closest('.frame__width').querySelector('[data-button="close"]');

      input.addEventListener('input', (e) => {
        const element = e.target;
        if (element.value) {
          closeBtn.style.display = 'block';
        } else {
          closeBtn.style.display = 'none';
        }
      });

      closeBtn.addEventListener('click', (e) => {
        const frameItem = e.target.closest('.frame__width');
        if (!frameItem) return;

        const input = frameItem.querySelector('[data-input="search"]');
        if (input) {
          input.value = '';
          input.focus();
          closeBtn.style.display = 'none';
        }
      });
    }
  }
}
