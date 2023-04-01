import Header from "./header/Header";
import fieldInstance from "./field/Field";
import Score from "./score/Score";
import onClickTile from "../listeners/onClickTile";

function App() {
  const app = document.createElement("div");
  app.setAttribute("id", "app");

  const main = document.createElement("main");
  main.setAttribute("id", "main");

  const header = Header();
  const fieldDomElement = fieldInstance.render();
  fieldDomElement.addEventListener("click", onClickTile);
  const score = Score();

  main.append(header, fieldDomElement);
  app.append(main, score);

  return app;
}
export default App;
