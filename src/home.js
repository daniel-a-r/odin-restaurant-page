import './home.css';
import * as htmlHelper from './htmlHelper.js';

export const createPage = () => {
  const createAboutSubsection = () => {
    const about = htmlHelper.createSubSection('About Us');
    const contentText = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Amet eu quam facilisis massa sodales lobortis nisl inceptos. Blandit venenatis volutpat accumsan nullam mauris. Tellus consectetur mus; sollicitudin adipiscing porta iaculis.';
    const content = htmlHelper.createElem('div', 'content', contentText);

    about.appendChild(content);
    return about;
  };

  const createHoursSubSection = () => {
    const hours = htmlHelper.createSubSection('Hours');
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    daysOfWeek.forEach((day) => {
      const dailyHours = htmlHelper.createContainer('daily-hours');
      const dayElem = htmlHelper.createElem('span', 'day', `${day}:`);
      const timeElem = htmlHelper.createElem('span', 'time', '9AM-9PM');
      dailyHours.appendChild(dayElem);
      dailyHours.appendChild(timeElem);
      hours.appendChild(dailyHours);
    });
    return hours;
  };

  const createAddressSubSection = () => {
    const address = htmlHelper.createSubSection('Address');
    const content = htmlHelper.createElem('div', 'content', '123 Jotunheim Rd, Asgard');
    address.appendChild(content);
    return address;
  };

  const main = document.querySelector('main');
  const title = htmlHelper.createTitle("Odin's Tavern");
  const about = createAboutSubsection();
  const hours = createHoursSubSection();
  const address = createAddressSubSection();
  const section = htmlHelper.createSection();
  htmlHelper.appendChildren(section, about, hours, address);

  main.appendChild(title);
  main.appendChild(section);
};