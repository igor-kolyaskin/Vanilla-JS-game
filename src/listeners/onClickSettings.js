import Settings from "../components/header/Settings";
import modal from "../components/header/Modal";

function onClickSettings() {
  const content = Settings();

  modal.setContent(content);
  modal.open();
}

export default onClickSettings;
