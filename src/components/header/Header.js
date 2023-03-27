import streetlightInstance from "./Streetlight";
import onClickStreetlight from "../../listeners/onClickStreetlight";

const Header = () => {
  const header = document.createElement("header");
  header.setAttribute("id", "header");
  const streetlight = streetlightInstance.render();
  streetlight.addEventListener("click", onClickStreetlight);
  header.append(streetlight);
  streetlightInstance.green();

  return header;
};

export default Header;
