import "../src/styles/main.scss";
import App from "./components/App";
import fieldInstance from "./components/Field";
import state from "./state/state";
import gameInstance from "./bll/Game";
import elements from "./state/elements";

fieldInstance.init(state.fieldConfig);
const { tileSize, numX, numY } = state.fieldConfig;

const body = document.getElementById("body");
body.append(App());
body.classList.add("theme-main");
body.style.setProperty("--tile-size", `${tileSize}`);
body.style.setProperty("--num-x", `${numX}`);
body.style.setProperty("--num-y", `${numY}`);

elements.body = body;

gameInstance.startNewGame();
