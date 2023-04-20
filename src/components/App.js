import Header from "./header/Header";
import Element from "./common/Element";
import fieldInstance from "./field/Field";
import messageInstance from "./Message";
import SideBar from "./sidebar/SideBar";
import onClickTile from "../listeners/onClickTile";

function App() {
  const header = Header();
  const field = fieldInstance.render();
  field.addEventListener("click", onClickTile);

  const sidebar = SideBar();
  const message = messageInstance.render();

  const configMain = {
    tag: "main",
    attributes: [["id", "main"]],
    classes: [],
    children: [header, field, message],
    innerText: null,
  };
  const main = Element(configMain);

  const configApp = {
    tag: "div",
    attributes: [["id", "app"]],
    classes: [],
    children: [main, sidebar],
    innerText: null,
  };
  const app = Element(configApp);

  return app;
}
export default App;
