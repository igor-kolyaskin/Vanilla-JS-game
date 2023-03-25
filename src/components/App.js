import Header from "./header/Header";
import fieldInstance from "./Field";
import Score from "./score/Score";
import tileClickListener from "../listeners/tileClickListener";

function App() {
  const app = document.createElement("div");
  app.classList.add("app");

  const header = Header();
  const fieldDomElement = fieldInstance.render();
  fieldDomElement.addEventListener("click", tileClickListener);
  const score = Score();

  app.append(header, fieldDomElement, score);

  return app;
}
export default App;
