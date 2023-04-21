import Element from "./Element";

const Spinner = () => {
  const configSpinner = {
    tag: "div",
    attributes: [],
    classes: ["lds-dual-ring", "street-text-parts", "street-text-spinner"],
    children: [],
    innerText: null,
  };

  return Element(configSpinner);
};

export default Spinner;
