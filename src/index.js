import './style.css';
import * as home from './home.js';
import * as menu from './menu.js';
import * as contact from './contact.js';

const page = (function () {
  const pageInit = () => {
    const buttons = document.querySelectorAll('button');
    const homeButton = document.querySelector('button.home');
    homeButton.classList.add('selected');

    buttons.forEach((button) => {
      button.addEventListener('click', () => HandleButtonEventListners(button));
    });
  };

  const HandleButtonEventListners = (button) => {
    const buttonName = button.classList[0];
    selectButton(button);

    switch (buttonName) {
      case 'home':
        console.log(home.greeting);
        break;
      case 'menu':
        console.log(menu.greeting);
        break;
      case 'contact': 
        console.log(contact.greeting);
        break;
    }
  };

  const selectButton = (newSelectedButton) => {
    const prevSelectedButton = document.querySelector('button.selected');
    prevSelectedButton.classList.remove('selected');
    newSelectedButton.classList.add('selected');
  };

  pageInit();
})();