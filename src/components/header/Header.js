import streetlightInstance from "./Streetlight";

const Header = () => {
  const header = document.createElement("header");
  header.setAttribute("id", "header");

  header.append(streetlightInstance.render());
  streetlightInstance.green();

  return header;
};

export default Header;
