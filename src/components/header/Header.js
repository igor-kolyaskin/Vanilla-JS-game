import streetlightInstance from "./Streetlight";
import progressBarInstance from "./ProgressBar";
import onClickStreetlight from "../../listeners/onClickStreetlight";
import modal from "../Modal";

const Header = () => {
  const header = document.createElement("header");
  header.setAttribute("id", "header");

  const btnNewGame = document.createElement("button");
  btnNewGame.setAttribute("id", "btn-new-game");

  const streetlight = streetlightInstance.render();
  streetlight.addEventListener("click", onClickStreetlight);

  const progressBar = progressBarInstance.render();

  const btnSettings = document.createElement("button");
  btnSettings.setAttribute("id", "btn-settings");
  btnSettings.addEventListener("click", () => modal.open());

  header.append(btnNewGame, streetlight, progressBar, btnSettings);
  streetlightInstance.green();

  return header;
};

export default Header;
