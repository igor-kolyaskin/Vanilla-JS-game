import Element from "./Element";

const Spinner = () => {
  const configSpinner = {
    tag: "div",
    classes: ["lds-dual-ring", "street-text-parts", "street-text-spinner"],
  };

  return Element(configSpinner);
};

export default Spinner;
