import state from "../state/state";
import fieldInstance from "../components/Field";
import gameInstance from "../bll/Game";
import elements from "../state/elements";

function onClickApplySettings(event) {
  state.fieldConfig = { ...state.fieldConfigTemp };
  fieldInstance.init(state.fieldConfig);
  fieldInstance.render();
  elements.body.style.setProperty(
    "--column-height",
    `${state.fieldConfig.tileSize * state.fieldConfig.numY}rem`
  );

  gameInstance.startNewGame();
}

export default onClickApplySettings;
