import * as htmlHelper from './htmlHelper.js';
export const greeting = 'hello from contact';

export const createPage = () => {
  const main = document.querySelector('main');
  const title = htmlHelper.createTitle('Contact Us');

  main.appendChild(title);
}