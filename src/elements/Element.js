const Element = (tag, {
  attributes, classes, children, innerText, styles,
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

  if (styles) {
    Object.entries(styles).forEach(([key, value]) => {
      element.style[key] = value;
    });
  }

  if (innerText) element.innerText = innerText;

  return element;
};

export default Element;

// const configElement = {
//   attributes: [["id", "streetlight"]],
//   classes: ["slider-min-max"],
//   children: [this.text, this.refreshButton],
//   innerText: "innerText",
//   styles: {width: "100px", backgrounImage: "url()"}
// };
// const element = Element(configElement);
