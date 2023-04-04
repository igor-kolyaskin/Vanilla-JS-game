import state from "../store/state";
import fieldInstance from "../components/field/Field";
import gameInstance from "../bll/Game";
import setVariablesCSS from "../utils/setVariablesCSS";
import scoreInstance from "../components/sidebar/Score";

function onClickApplySettings(event) {
  state.fieldConfig = { ...state.fieldConfigTemp };
  fieldInstance.init(state.fieldConfig);
  scoreInstance.updateMovesIndication();
  fieldInstance.render();

  const { numX, numY } = state.fieldConfig;
  const variablesCSS = {
    "--num-x": `${numX}`,
    "--num-y": `${numY}`,
    "--shift-x": `${0.5 + (9 - numX) * 1.5}rem`,
    "--shift-y": `${0.5 + (9 - numY) * 1.5}rem`,
  };
  setVariablesCSS(variablesCSS);

  gameInstance.startNewGame();
}

export default onClickApplySettings;
