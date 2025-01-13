import './style.css';
import * as home from './home.js';
import * as menu from './menu.js';
import * as contact from './contact.js';

const page = (function () {
  const pageInit = () => {
    const buttons = document.querySelectorAll('button');
    const homeButton = document.querySelector('button.home');
    homeButton.classList.add('selected');
    home.createPage();

    buttons.forEach((button) => {
      button.addEventListener('click', () => HandleButtonEventListners(button));
    });
  };

  const HandleButtonEventListners = (button) => {
    const buttonName = button.classList[0];
    selectButton(button);
    clearMain();

    switch (buttonName) {
      case 'home':
        home.createPage();
        break;
      case 'menu':
        menu.createPage();
        break;
      case 'contact': 
        contact.createPage();
        break;
    }
  };

  const clearMain = () => {
    const main = document.querySelector('main');
    while (main.hasChildNodes()) {
      main.removeChild(main.firstChild);
    }
  }

  const selectButton = (newSelectedButton) => {
    const prevSelectedButton = document.querySelector('button.selected');
    prevSelectedButton.classList.remove('selected');
    newSelectedButton.classList.add('selected');
  };

  pageInit();
})();