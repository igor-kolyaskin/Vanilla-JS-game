const Element = ({
  tag, attributes, classes, children, innerText,
}) => {
  // eslint-disable-next-line no-undef
  const element = document.createElement(tag);

  if (attributes) {
    attributes.forEach((attribute) => {
      element.setAttribute(...attribute);
    });
  }

  if (classes) {
    classes.forEach((cls) => {
      element.classList.add(cls);
    });
  }

  if (children) {
    children.forEach((child) => {
      element.append(child);
    });
  }

  if (innerText) element.innerText = innerText;

  return element;
};

export default Element;
