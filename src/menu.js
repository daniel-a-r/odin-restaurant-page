import * as htmlHelper from './htmlHelper.js';

export const createPage = () => {
  const main = document.querySelector('main');
  const title = htmlHelper.createTitle('Menu');

  main.appendChild(title);
};