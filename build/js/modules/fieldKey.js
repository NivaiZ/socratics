// Создаем массив для хранения выбранных значений
const selectedLabels = [];

export function handleHintClick(label) {
  const input = document.getElementById('lesson__topic');
  if (label && label.innerText) {
    const labelText = label.innerText;

    if (!selectedLabels.includes(labelText)) {
      input.value += (input.value ? ', ' : '') + labelText;
      selectedLabels.push(labelText);
      label.parentElement.remove();
      label.removeEventListener('click', handleHintClick);

      // Проверяем, является ли элемент последним
      const remainingLabels = document.querySelectorAll('.hints__sign:not([style*="display: none"])');
      if (remainingLabels.length === 0) {
        // Добавляем класс hints__item--visible для элементов с data-hints="hidden"
        const hiddenLabels = document.querySelectorAll('.hints__sign[data-hints="hidden"]');
        hiddenLabels.forEach(function(hiddenLabel) {
          const listItem = hiddenLabel.parentElement;
          listItem.classList.add('hints__item--visible');
        });

        // Удаляем кнопку hints__button
        const button = document.querySelector('.hints__button');
        if (button) {
          button.remove();
        }
      }
    }
  }
}

// Находим все элементы label с классом hints__sign и назначаем обработчик события
const labels = document.querySelectorAll('.hints__sign');
labels.forEach(function (label) {
  label.addEventListener('click', function () {
    handleHintClick(label);
  });
});
