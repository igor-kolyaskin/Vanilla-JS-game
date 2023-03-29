import Header from "./header/Header";
import fieldInstance from "./Field";
import Score from "./score/Score";
import onClickTile from "../listeners/onClickTile";

function App() {
  const app = document.createElement("div");
  app.setAttribute("id", "app");

  const header = Header();
  const fieldDomElement = fieldInstance.render();
  fieldDomElement.addEventListener("click", onClickTile);
  const score = Score();

  app.append(header, fieldDomElement, score);

  return app;
}
export default App;
