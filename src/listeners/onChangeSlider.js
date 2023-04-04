import state from "../store/state";
import elements from "../store/elements";

function onChangeSlider(event) {
  const { id, value } = event.target;
  const key = id.split("-")[1];

  const [label, labelText] = elements.sliderLabels[key];
  label.innerText = `${labelText}: ${value}`;
  state.fieldConfigTemp = { ...state.fieldConfigTemp, [key]: +value };
}

export default onChangeSlider;
