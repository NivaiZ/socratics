import { dropDownSelect } from "./modules/dropdown.js";
import { clearInput } from "./modules/clearInput.js";
import { accordion } from "./modules/accordion.js";
import { characterCount } from "./modules/character-count.js";
import { sendDataOnServer } from "./modules/sendData.js";
import { handleHintClick } from "./modules/fieldKey.js";

function handleDOMContentLoaded () {
  dropDownSelect();
  clearInput();
  accordion();
  characterCount();
  sendDataOnServer();
  handleHintClick();
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
