import Header from "./header/Header";
import field from "./Field";
import Score from "./score/Score";

function App() {
  const app = document.createElement("div");
  app.classList.add("app");

  const header = Header();
  const score = Score();

  app.append(header, field.render(), score);

  return app;
}
export default App;
