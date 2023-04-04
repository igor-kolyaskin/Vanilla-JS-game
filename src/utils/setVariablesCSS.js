import elements from "../store/elements";

const setVariablesCSS = (object) => {
  const propArray = Object.entries(object);
  propArray.forEach((prop) => {
    elements.body.style.setProperty(...prop);
  });
};

export default setVariablesCSS;
