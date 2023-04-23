import Header from "./header/Header";
import { Div, Main } from "../elements";
import fieldInstance from "./field/Field";
import messageInstance from "./Message";
import SideBar from "./sidebar/SideBar";
import onClickTile from "../listeners/onClickTile";

function App() {
  const field = fieldInstance.render();
  field.addEventListener("click", onClickTile);

  const message = messageInstance.render();

  const configMain = {
    attributes: { id: "main" },
    children: [Header(), field, message],
  };

  const configApp = {
    attributes: { id: "app" },
    children: [Main(configMain), SideBar()],
  };
  const app = Div(configApp);

  return app;
}
export default App;
