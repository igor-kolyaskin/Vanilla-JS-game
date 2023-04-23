/* eslint-disable no-undef */
import Slider from "../common/Slider";
import onChangeSlider from "../../listeners/onChangeSlider";
import sliderConfig from "../../constants/sliderConfig";
import state from "../../store/state";
import Element from "../../elements/Element";

const Settings = () => {
  const sliderArray = sliderConfig.map((sl) => Slider({
    ...sl,
    value: state.fieldConfig[sl.id],
  }));

  const configSettingsWrapper = {
    tag: "section",
    attributes: [["id", "settings-wrapper"]],
    children: [...sliderArray],
  };
  const settingsWrapper = Element(configSettingsWrapper);

  settingsWrapper.addEventListener("input", onChangeSlider);

  return settingsWrapper;
};

export default Settings;
