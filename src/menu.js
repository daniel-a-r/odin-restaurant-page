import * as htmlHelper from './htmlHelper.js';
import './menu.css';

export const createPage = () => {
  const main = document.querySelector('main');
  const title = htmlHelper.createTitle('Menu');
  const sides = createSidesSection();
  const bevs = createBevsSection();
  const entrees = createEntreesSection();

  htmlHelper.appendChildren(main, title, sides, entrees, bevs);
};

const createSidesSection = () => {
  const sideObjs = [
    {
      name: 'Fries',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor nunc fames felis cursus vivamus.',
      price: '$4'
    },
    {
      name: 'Mozerella Sticks',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Non senectus vel elementum ut purus.',
      price: '$5'
    }
  ];

  return createMenuSection('Sides', sideObjs);
};

const createBevsSection = () => {
  const bevObjs = [
    {
      name: 'Beer',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit.',
      price: '$5'
    },
    {
      name: 'Iced Tea',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit.',
      price: '$3'
    }
  ];

  return createMenuSection('Beverages', bevObjs);
};

const createEntreesSection = () => {

  const entreeObjs = [
    {
      name: 'Burger',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti leo luctus class felis dapibus. Fames donec rhoncus curabitur pretium mauris, pharetra odio nam enim.',
      price: '$9'
    },
    {
      name: 'Rotisserie Chicken',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Magnis nam sit consequat vivamus rutrum parturient. Arcu congue primis purus finibus mi.',
      price: '$14'
    },
    {
      name: 'Pizza Pie',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi in velit quis morbi pharetra lacinia maximus nisi. Neque gravida habitant vivamus imperdiet elit nec.',
      price: '$14'
    }
  ];

  return createMenuSection('Entrees', entreeObjs);
};

const createMenuSection = (subTitleName, menuObjs) => {
  const menuSection = htmlHelper.createSection();
  const subTitle = createSubTitle(subTitleName);
  menuSection.appendChild(subTitle);

  menuObjs.forEach((menuObj) => {
    const subSection = createMenuSubSection(menuObj);
    menuSection.appendChild(subSection);
  });

  return menuSection;
}

const createSubTitle = (subTitleName) => {
  return htmlHelper.createElem('div', 'sub-title', subTitleName);
};

const createMenuSubSection = (menuObj) => {
  const menuSubSection = htmlHelper.createSubSection(menuObj.name);
  const desc = htmlHelper.createElem('div', 'desc', menuObj.desc);
  const price = htmlHelper.createElem('div', 'price', menuObj.price);
  const contentContainer = htmlHelper.createContainer('content');
  htmlHelper.appendChildren(contentContainer, desc, price);

  menuSubSection.appendChild(contentContainer);
  return menuSubSection;
}