import { Div } from "../../elements";

const Spinner = () => {
  const configSpinner = { classes: ["lds-dual-ring", "street-text-parts", "street-text-spinner"] };

  return Div(configSpinner);
};

export default Spinner;
