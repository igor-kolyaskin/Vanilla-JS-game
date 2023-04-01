import elements from "../state/elements";

const setVariablesCSS = (object) => {
  const propArray = Object.entries(object);
  propArray.forEach((prop) => {
    elements.body.style.setProperty(...prop);
  });
};

export default setVariablesCSS;
