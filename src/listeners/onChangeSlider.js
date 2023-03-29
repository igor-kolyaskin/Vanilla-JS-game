import state from "../state/state";
import elements from "../state/elements";

function onChangeSlider(event) {
  const value = event.target.value;
  const id = event.target.id.split("-")[1];

  const [label, labelText] = elements._sliderLabels[id];
  label.innerText = `${labelText}: ${value}`;

  state.fieldConfigTemp = { ...state.fieldConfigTemp, [id]: value };
}

export default onChangeSlider;
