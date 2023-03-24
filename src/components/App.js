import Header from "./header/Header";
import Field from "./Field";
import Score from "./score/Score";
import cellClickListener from "../listeners/cellClickListener";

function App() {
  const app = document.createElement("div");
  app.classList.add("app");

  const header = Header();
  const field = Field.render();
  field.addEventListener("click", cellClickListener);
  const score = Score();

  app.append(header, field, score);

  return app;
}
export default App;
