import Slider from "../common/Slider";
import onChangeSliderX from "../../listeners/onChangeSliderX";
import state from "../../state/state";

const Settings = () => {
  const settingsWrapper = document.createElement("section");
  settingsWrapper.setAttribute("id", "settings-wrapper");

  const sliderConfig = {
    id: "x",
    type: "range",
    min: 4,
    max: 12,
    step: 1,
    value: state.fieldConfig.numX,
  };
  const sliderX = new Slider("columns", sliderConfig);
  const sliderXElement = sliderX.render();
  sliderXElement.addEventListener("input", (event) =>
    onChangeSliderX(event, sliderX)
  );
  settingsWrapper.append(sliderXElement);

  return settingsWrapper;
};

export default Settings;
