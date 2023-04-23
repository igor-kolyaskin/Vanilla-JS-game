import Slider from "../common/Slider";
import onChangeSlider from "../../listeners/onChangeSlider";
import sliderConfig from "../../constants/sliderConfig";
import state from "../../store/state";
import { Section } from "../../elements";

const Settings = () => {
  const sliderArray = sliderConfig.map((sl) => Slider({
    ...sl,
    value: state.fieldConfig[sl.id],
  }));

  const configSettingsWrapper = {
    attributes: [["id", "settings-wrapper"]],
    children: [...sliderArray],
  };
  const settingsWrapper = Section(configSettingsWrapper);

  settingsWrapper.addEventListener("input", onChangeSlider);

  return settingsWrapper;
};

export default Settings;
