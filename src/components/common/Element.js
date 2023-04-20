const Element = ({
  tag, attributes, classes, children, innerText,
}) => {
  // eslint-disable-next-line no-undef
  const element = document.createElement(tag);

  attributes.forEach((attribute) => {
    element.setAttribute(...attribute);
  });

  classes.forEach((cls) => {
    element.classList.add(cls);
  });

  children.forEach((child) => {
    element.append(child);
  });

  if (innerText !== null) element.innerText = innerText;

  return element;
};

export default Element;
