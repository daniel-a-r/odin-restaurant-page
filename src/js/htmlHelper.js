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

export const createSection = () => createContainer('section');

export const createSubSection = (headingText) => {
  const subSection = createContainer('sub-section');
  const heading = createHeading(headingText)
  subSection.appendChild(heading);
  return subSection;
};

export const createTitle = (titleName, titleType='main-title') => {
  return createElem('div', titleType, titleName); 
};

export const createHeading = (headingText) => {
  return createElem('div', 'heading', headingText);
};

export const appendChildren = (parent, ...children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

