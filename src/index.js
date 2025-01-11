import './style.css';
import * as home from './home.js';
import * as menu from './menu.js';
import * as contact from './contact.js';

const page = (function () {
  const homeButton = document.querySelector('button.home');
  const menuButton = document.querySelector('button.menu');
  const contactButton = document.querySelector('button.contact');

  homeButton.addEventListener('click', () => {
    console.log(home.greeting);
  });

  menuButton.addEventListener('click', () => {
    console.log(menu.greeting);
  });

  contactButton.addEventListener('click', () => {
    console.log(contact.greeting);
  });
})();