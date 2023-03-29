import state from "../state/state";

function onClickApplySettings(event) {
  state.fieldConfig = { ...state.fieldConfigTemp };
}

export default onClickApplySettings;
