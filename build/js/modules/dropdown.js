export function dropDownSelect() {
  const dropDownButton = document.querySelector('[data-dropdown="button"]');
  const dropDownSelect = document.querySelector('[data-dropdown="select"]');
  const dropDownLinks = document.querySelectorAll('[data-dropdown="link"]');

  const CLASS_OPEN = "frame__dropdown--js";
  const ARIA_HIDDEN = "data-hidden";
  const ARIA_EXPANDED = "data-expanded";

  if (dropDownButton) {
    dropDownButton.addEventListener("click", toggleDropdown);
    dropDownButton.addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        toggleDropdown();
      }
    });
  }

  if (dropDownSelect) {
    dropDownSelect.addEventListener("blur", closeDropdown);
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!target.closest(`.${CLASS_OPEN}`) && !target.closest('[data-dropdown="button"]')) {
        closeDropdown();
      }
    });
  }

  dropDownLinks.forEach((link) => {
    link.addEventListener("click", selectValue);
    link.addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        selectValue();
      }
    });
  });

  function toggleDropdown() {
    if (dropDownSelect.getAttribute(ARIA_HIDDEN) === "true") {
      setDropdownState(false, true);
    } else {
      setDropdownState(true, false);
    }
  }

  function closeDropdown() {
    setDropdownState(true, false);
  }

  let selectionIndicator;

  function selectValue(event) {
    event.preventDefault();

    const previouslySelected = dropDownSelect.querySelector('.dropdown__active');
    if (previouslySelected) {
      previouslySelected.classList.remove('dropdown__active');
    }

    if (!selectionIndicator) {
      selectionIndicator = document.createElement('div');
      selectionIndicator.className = 'dropdown__svg';
    }

    this.appendChild(selectionIndicator);

    dropDownButton.innerText = this.innerText;

    this.classList.add('dropdown__active');

    closeDropdown();
    dropDownButton.classList.add('frame__input--choose');
  }

  function setDropdownState(hidden, expanded) {
    dropDownSelect.setAttribute(ARIA_HIDDEN, hidden);
    dropDownButton.setAttribute(ARIA_EXPANDED, expanded);
    dropDownSelect.classList.toggle(CLASS_OPEN, !hidden);
  }
}
