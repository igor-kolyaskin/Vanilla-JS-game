import "../src/styles/main.scss";
import App from "./components/App";
import fieldInstance from "./components/field/Field";
import state from "./state/state";
import gameInstance from "./bll/Game";
import elements from "./state/elements";
import setVariablesCSS from "./utils/setVariablesCSS";

fieldInstance.init(state.fieldConfig);
const { tileSize, numX, numY } = state.fieldConfig;

const body = document.getElementById("body");
body.append(App());
body.classList.add("theme-main");
elements.body = body;

const variablesCSS = {
  "--tile-size": `${tileSize}`,
  "--num-x": `${numX}`,
  "--num-y": `${numY}`,
};
setVariablesCSS(variablesCSS);

gameInstance.startNewGame();
