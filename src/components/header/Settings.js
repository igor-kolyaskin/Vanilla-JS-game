import Slider from "../common/Slider";
import onChangeSlider from "../../listeners/onChangeSlider";
import sliderConfig from "../../constants/sliderConfig";
import state from "../../store/state";

const Settings = () => {
  const settingsWrapper = document.createElement("section");
  settingsWrapper.setAttribute("id", "settings-wrapper");

  let sliderArray = sliderConfig.map((sl) =>
    Slider({
      ...sl,
      value: state.fieldConfig[sl["id"]],
    })
  );

  settingsWrapper.addEventListener("input", onChangeSlider);
  settingsWrapper.append(...sliderArray);

  return settingsWrapper;
};

export default Settings;
