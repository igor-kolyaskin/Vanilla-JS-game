import state from "../state/state";
import fieldInstance from "../components/field/Field";
import gameInstance from "../bll/Game";
import elements from "../state/elements";

function onClickApplySettings(event) {
  state.fieldConfig = { ...state.fieldConfigTemp };
  fieldInstance.init(state.fieldConfig);
  fieldInstance.render();

  const { numX, numY } = state.fieldConfig;

  elements.body.style.setProperty("--num-x", `${numX}`);
  elements.body.style.setProperty("--num-y", `${numY}`);
  elements.body.style.setProperty("--shift-x", `${0.5 + (9 - numX) * 1.5}rem`);
  elements.body.style.setProperty("--shift-y", `${0.5 + (9 - numY) * 1.5}rem`);

  gameInstance.startNewGame();
}

export default onClickApplySettings;
