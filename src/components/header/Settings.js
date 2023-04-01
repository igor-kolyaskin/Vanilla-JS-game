import Slider from "../common/Slider";
import onChangeSlider from "../../listeners/onChangeSlider";
import state from "../../state/state";

const Settings = () => {
  const settingsWrapper = document.createElement("section");
  settingsWrapper.setAttribute("id", "settings-wrapper");

  const sliderConfigNumX = {
    id: "numX",
    type: "range",
    min: 5,
    max: 9,
    step: 1,
    value: state.fieldConfig.numX,
  };
  const numXSlider = Slider("columns", sliderConfigNumX);

  const sliderConfigNumY = {
    id: "numY",
    type: "range",
    min: 5,
    max: 9,
    step: 1,
    value: state.fieldConfig.numY,
  };
  const numYSlider = Slider("rows", sliderConfigNumY);

  const sliderConfigNumColors = {
    id: "numColors",
    type: "range",
    min: 3,
    max: 6,
    step: 1,
    value: state.fieldConfig.numColors,
  };
  const numColorsSlider = Slider("colors", sliderConfigNumColors);

  settingsWrapper.addEventListener("input", onChangeSlider);
  settingsWrapper.append(numXSlider, numYSlider, numColorsSlider);

  return settingsWrapper;
};

export default Settings;
