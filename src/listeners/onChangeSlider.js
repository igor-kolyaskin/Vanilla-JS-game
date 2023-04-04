import state from "../state/state";
import elements from "../state/elements";

function onChangeSlider(event) {
  const { id, value, dataset } = event.target;
  const key = id.split("-")[1];

  const [label, labelText] = elements.sliderLabels[key];
  label.innerText = `${labelText}: ${value}`;

  if (dataset.cluster === "fieldConfig") {
    state.fieldConfigTemp = { ...state.fieldConfigTemp, [key]: +value };
  }

  if (dataset.cluster === "game") {
    state._gameTemp = { ...state._gameTemp, [key]: +value };
    // state.gameTemp = { ...state.gameTemp, [key]: +value };
    console.log(key, value, state);
  }
}

export default onChangeSlider;
