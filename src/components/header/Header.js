import streetlightInstance from "./Streetlight";
import onClickStreetlight from "../../listeners/onClickStreetlight";
import onClickSettings from "../../listeners/onClickSettings";
import onClickNewGame from "../../listeners/onClickNewGame";
import { Header, Button } from "../../elements";

export default () => {
  const configButtonNewGame = {
    attributes: [["id", "btn-new-game"]],
    classes: ["header-button"],
    innerText: "Go!",
  };
  const btnNewGame = Button(configButtonNewGame);
  btnNewGame.addEventListener("click", onClickNewGame);

  const streetlight = streetlightInstance.render();
  streetlight.addEventListener("click", onClickStreetlight);

  const configButtonSettings = {
    attributes: [["id", "btn-settings"]],
    classes: ["header-button"],
  };
  const btnSettings = Button(configButtonSettings);
  btnSettings.addEventListener("click", onClickSettings);

  streetlightInstance.showMessage("blockIsTooSmall");

  const headerConfig = {
    attributes: [["id", "header"]],
    children: [btnNewGame, streetlight, btnSettings],
  };

  return Header(headerConfig);
};
