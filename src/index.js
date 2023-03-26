import "../src/styles/main.scss";
import App from "./components/App";
import field from "./components/Field";
import state from "./state/state";

const fieldConfig = state.fieldConfig;
field.init(fieldConfig);
const body = document.getElementById("body");
body.append(App());
body.classList.add("theme-main");
body.style.setProperty("--tile-size", `${fieldConfig.tileSize}rem`);
