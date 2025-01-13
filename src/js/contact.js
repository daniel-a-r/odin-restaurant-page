import * as htmlHelper from './htmlHelper.js';

export const createPage = () => {
  const main = document.querySelector('main');
  const title = htmlHelper.createTitle('Contact Us');
  const section = htmlHelper.createSection();
  createContactSubSections(section);

  main.appendChild(title);
  main.appendChild(section);
};

const createContactSubSections = (parent) => {
  const people = [
    {
      title: 'General Manager',
      name: 'Thor',
      phone: '(555) 555-1234',
      email: 'thor@non.com'
    },
    {
      title: 'Head Chef',
      name: 'Loki',
      phone: '(555) 555-1235',
      email: 'loki@non.com'
    },
    {
      title: 'Owner',
      name: 'Bob Ross',
      phone: '(555) 555-1236',
      email: 'bobross@non.com'
    }
  ];

  people.forEach((person) => {
    const contactSubSection = htmlHelper.createSubSection(person.title);
    const content = htmlHelper.createContainer('content');
    const name = htmlHelper.createElem('div', 'contact-name', person.name);
    const phone = htmlHelper.createElem('div', 'contact-phone', person.phone);
    const email = htmlHelper.createElem('div', 'contact-email', person.email);
    htmlHelper.appendChildren(content, name, phone, email);
    contactSubSection.appendChild(content);
    parent.appendChild(contactSubSection);

  })
};