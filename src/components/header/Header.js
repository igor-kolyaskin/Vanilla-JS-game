import streetlightInstance from "./Streetlight";
import onClickStreetlight from "../../listeners/onClickStreetlight";
import onClickSettings from "../../listeners/onClickSettings";
import onClickNewGame from "../../listeners/onClickNewGame";

const Header = () => {
  const header = document.createElement("header");
  header.setAttribute("id", "header");

  const btnNewGame = document.createElement("button");
  btnNewGame.setAttribute("id", "btn-new-game");
  btnNewGame.classList.add("header-button");
  btnNewGame.innerText = "Go!";
  btnNewGame.addEventListener("click", onClickNewGame);

  const streetlight = streetlightInstance.render();
  streetlight.addEventListener("click", onClickStreetlight);

  const btnSettings = document.createElement("button");
  btnSettings.setAttribute("id", "btn-settings");
  btnSettings.classList.add("header-button");
  btnSettings.addEventListener("click", onClickSettings);

  header.append(btnNewGame, streetlight, btnSettings);
  streetlightInstance.showMessageLittleBlockDoesNotBurn();

  return header;
};

export default Header;
