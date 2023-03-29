import "../src/styles/main.scss";
import App from "./components/App";
import fieldInstance from "./components/Field";
import state from "./state/state";
import gameInstance from "./bll/Game";

fieldInstance.init(state.fieldConfig);
const body = document.getElementById("body");
body.append(App());
body.classList.add("theme-main");
body.style.setProperty("--tile-size", `${state.fieldConfig.tileSize}rem`);

gameInstance.startNewGame();
