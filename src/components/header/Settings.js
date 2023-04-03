import Slider from "../common/Slider";
import onChangeSlider from "../../listeners/onChangeSlider";
import sliderConfig from "../../constants/sliderConfig";

const Settings = () => {
  const settingsWrapper = document.createElement("section");
  settingsWrapper.setAttribute("id", "settings-wrapper");

  const sliderArray = sliderConfig.map((slider) => Slider(slider));

  settingsWrapper.addEventListener("input", onChangeSlider);
  settingsWrapper.append(...sliderArray);

  return settingsWrapper;
};

export default Settings;
