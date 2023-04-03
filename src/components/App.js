import Header from "./header/Header";
import fieldInstance from "./field/Field";
import messageInstance from "./Message";
import SideBar from "./sidebar/SideBar";
import onClickTile from "../listeners/onClickTile";

function App() {
  const app = document.createElement("div");
  app.setAttribute("id", "app");

  const main = document.createElement("main");
  main.setAttribute("id", "main");

  const header = Header();
  const field = fieldInstance.render();
  field.addEventListener("click", onClickTile);
  const sidebar = SideBar();

  const message = messageInstance.render();

  main.append(header, field, message);
  app.append(main, sidebar);

  return app;
}
export default App;
