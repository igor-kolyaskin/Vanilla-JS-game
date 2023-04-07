import "../src/styles/main.scss";
import App from "./components/App";
import fieldInstance from "./components/field/Field";
import state from "./store/state";
import gameInstance from "./bll/Game";
import elements from "./store/elements";
import setVariablesCSS from "./utils/setVariablesCSS";
import message from "./components/Message";

const config = localStorage.getItem("config");
if (config) {
  const { numX, numY, numColors, scoreToWin, movesToWin } = JSON.parse(config);
  state.updateState({ key: "numX", value: numX });
  state.updateState({ key: "numY", value: numY });
  state.updateState({ key: "numColors", value: numColors });
  state.updateState({ key: "scoreToWin", value: scoreToWin });
  state.updateState({ key: "movesToWin", value: movesToWin });
}

fieldInstance.init(state.fieldConfig);
const { tileSize, numX, numY } = state.fieldConfig;

const body = document.getElementById("body");
body.append(App());
body.classList.add("theme-main");
body.addEventListener("click", () => message.close());

elements.body = body;

const variablesCSS = {
  "--tile-size": `${tileSize}`,
  "--num-x": `${numX}`,
  "--num-y": `${numY}`,
};
setVariablesCSS(variablesCSS);

gameInstance.startNewGame();
