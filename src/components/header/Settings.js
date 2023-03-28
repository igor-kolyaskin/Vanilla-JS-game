import Slider from "../common/Slider";

const Settings = () => {
  const settingsWrapper = document.createElement("section");
  settingsWrapper.setAttribute("id", "settings-wrapper");

  const sliderConfig = {
    id: "x",
    type: "range",
    min: 4,
    max: 12,
    step: 1,
    value: 6,
  };
  const slider = Slider("columns", sliderConfig);
  settingsWrapper.append(slider);

  return settingsWrapper;
};

export default Settings;
