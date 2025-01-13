import './home.css';
export const greeting = 'hello from home';

export const createPage = () => {
  const createElem = (tag, className, text) => {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.textContent = text;
    return element;
  };

  const createContainer = (containerClassName) => {
    const container = document.createElement('div');
    container.classList.add(containerClassName);
    return container;
  };

  const createSection = () => {
    const section = createContainer('section');
    return section;
  };

  const createSubSection = (headingText) => {
    const subSection = createContainer('sub-section');
    const heading = createHeading(headingText)
    subSection.appendChild(heading);
    return subSection;
  };

  const createTitle = (titleName, titleType='main-title') => {
    const title = createElem('div', titleType, titleName);
    return title;    
  };

  const createHeading = (headingText) => {
    const heading = createElem('div', 'heading', headingText);
    return heading;
  };

  const createAboutSubsection = () => {
    const about = createSubSection('About Us');
    const contentText = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Amet eu quam facilisis massa sodales lobortis nisl inceptos. Blandit venenatis volutpat accumsan nullam mauris. Tellus consectetur mus; sollicitudin adipiscing porta iaculis.';
    const content = createElem('div', 'content', contentText);

    about.appendChild(content);
    return about;
  };

  const createHoursSubSection = () => {
    const hours = createSubSection('Hours');
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    daysOfWeek.forEach((day) => {
      const dailyHours = createContainer('daily-hours');
      const dayElem = createElem('span', 'day', `${day}:`);
      const timeElem = createElem('span', 'time', '9AM-9PM');
      dailyHours.appendChild(dayElem);
      dailyHours.appendChild(timeElem);
      hours.appendChild(dailyHours);
    });
    return hours;
  };

  const createAddressSubSection = () => {
    const address = createSubSection('Address');
    const content = createElem('div', 'content', '123 Jotunheim Rd, Asgard');
    address.appendChild(content);
    return address;
  };

  const appendChildren = (parent, ...children) => {
    children.forEach((child) => {
      parent.appendChild(child);
    });
  };

  const main = document.querySelector('main');
  const title = createTitle("Odin's Tavern");
  const about = createAboutSubsection();
  const hours = createHoursSubSection();
  const address = createAddressSubSection();
  const section = createSection();
  appendChildren(section, about, hours, address);

  main.appendChild(title);
  main.appendChild(section);
};