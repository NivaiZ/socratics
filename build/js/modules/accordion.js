export function accordion () {
  const hints = document.querySelectorAll('[data-hints="hidden"]');
  const button = document.querySelector('[data-dynamic="button"]');

  if (button && hints) {
    for (let i = 0; i < hints.length; i++) {
      const element = hints[i];
      button.addEventListener('click', () => {
        element.classList.toggle('hints__item--visible');
      })
    }
  }

}
