import "./styles/main.scss";
import App from "./components/App";
import fieldInstance from "./components/field/Field";
import state from "./store/state";
import gameInstance from "./bll/Game";
import elements from "./store/elements";
import setVariablesCSS from "./utils/setVariablesCSS";
import message from "./components/Message";
import { transitionTileShift } from "./constants/configTimer";

// eslint-disable-next-line no-undef
const config = localStorage.getItem("config");
if (config) {
  const {
    numX, numY, numColors, scoreToWin, movesToWin,
  } = JSON.parse(config);
  const stateUpdates = [
    { numX },
    { numY },
    { numColors },
    { scoreToWin },
    { movesToWin },
  ];
  state.updateState(stateUpdates);
}
fieldInstance.init(state.fieldConfig);
const { tileSize, numX, numY } = state.fieldConfig;

// eslint-disable-next-line no-undef
const body = document.getElementById("body");
body.append(App());
body.classList.add("theme-main");
body.addEventListener("click", () => message.close());

elements.body = body;

const variablesCSS = {
  "--tile-size": `${tileSize}`,
  "--num-x": `${numX}`,
  "--num-y": `${numY}`,
  "--shift-x": `${0.5 + (9 - numX) * 1.5}rem`,
  "--shift-y": `${0.5 + (9 - numY) * 1.5}rem`,
  "--transition-tile-shift": `${transitionTileShift / 1000}s`,
};
setVariablesCSS(variablesCSS);

gameInstance.startNewGame();
