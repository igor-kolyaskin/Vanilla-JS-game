import elements from "../../store/elements";

const Element = ({
  tag, attributes, classes, listeners, children, addToElementsAs,
}) => {
  // eslint-disable-next-line no-undef
  const element = document.createElement(tag);

  attributes.forEach((attribute) => {
    element.setAttribute(...attribute);
  });

  classes.forEach((cls) => {
    element.classList.add(cls);
  });

  listeners.forEach((listener) => {
    element.addEventListener(...listener);
  });

  children.forEach((child) => {
    element.append(child);
  });

  if (addToElementsAs) elements[addToElementsAs] = element;
  return element;
};

export default Element;
