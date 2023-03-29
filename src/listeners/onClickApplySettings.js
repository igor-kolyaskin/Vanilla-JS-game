import state from "../state/state";
import fieldInstance from "../components/Field";
import gameInstance from "../bll/Game";

function onClickApplySettings(event) {
  state.fieldConfig = { ...state.fieldConfigTemp };
  fieldInstance.init(state.fieldConfig);
  fieldInstance.render();
  gameInstance.startNewGame();
}

export default onClickApplySettings;
