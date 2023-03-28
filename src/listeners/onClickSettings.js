import Settings from "../components/header/Settings";
import modal from "../components/header/Modal";

function onClickSettings() {
  const content = Settings();

  modal.setContent(content);
  //   modal.setContent("<h1>here's some content</h1>");
  modal.open();
}

export default onClickSettings;
