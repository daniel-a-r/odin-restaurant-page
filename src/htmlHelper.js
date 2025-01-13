export const createElem = (tag, className, text) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.textContent = text;
  return element;
};

export const createContainer = (containerClassName) => {
  const container = document.createElement('div');
  container.classList.add(containerClassName);
  return container;
};

export const createSection = () => {
  const section = createContainer('section');
  return section;
};

export const createSubSection = (headingText) => {
  const subSection = createContainer('sub-section');
  const heading = createHeading(headingText)
  subSection.appendChild(heading);
  return subSection;
};

export const createTitle = (titleName, titleType='main-title') => {
  const title = createElem('div', titleType, titleName);
  return title;    
};

export const createHeading = (headingText) => {
  const heading = createElem('div', 'heading', headingText);
  return heading;
};

export const appendChildren = (parent, ...children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

