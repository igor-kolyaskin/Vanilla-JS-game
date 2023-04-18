import state from "../store/state";
import fieldInstance from "../components/field/Field";
import gameInstance from "../bll/Game";
import setVariablesCSS from "../utils/setVariablesCSS";
import scoreInstance from "../components/sidebar/Score";
import progressBarInstance from "../components/sidebar/ProgressBar";

function onClickApplySettings() {
  state.fieldConfig = { ...state.fieldConfigTemp };
  fieldInstance.init(state.fieldConfig);
  scoreInstance.updateMovesIndication();
  fieldInstance.render();
  progressBarInstance.updateScoreMaxValue();

  const { numX, numY } = state.fieldConfig;
  const variablesCSS = {
    "--num-x": `${numX}`,
    "--num-y": `${numY}`,
    "--shift-x": `${0.5 + (9 - numX) * 1.5}rem`,
    "--shift-y": `${0.5 + (9 - numY) * 1.5}rem`,
  };
  setVariablesCSS(variablesCSS);

  gameInstance.startNewGame();

  const config = JSON.stringify(state.fieldConfig);
  // eslint-disable-next-line no-undef
  localStorage.setItem("config", config);
}

export default onClickApplySettings;
