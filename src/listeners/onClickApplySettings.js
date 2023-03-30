import state from "../state/state";
import fieldInstance from "../components/Field";
import gameInstance from "../bll/Game";
import elements from "../state/elements";

function onClickApplySettings(event) {
  state.fieldConfig = { ...state.fieldConfigTemp };
  fieldInstance.init(state.fieldConfig);
  fieldInstance.render();
  elements.body.style.setProperty("--num-x", `${state.fieldConfig.numX}`);
  elements.body.style.setProperty("--num-y", `${state.fieldConfig.numY}`);

  gameInstance.startNewGame();
}

export default onClickApplySettings;
