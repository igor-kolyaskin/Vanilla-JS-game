import state from "../../state/state";
class Slider {
  constructor(labelText, config) {
    this.labelText = labelText;
    this.config = config;
    this.labelElement = null;
  }

  render() {
    const { id, value, min, max } = this.config;

    const sliderContainer = document.createElement("section");
    sliderContainer.setAttribute("id", `slider-container-${id}`);
    sliderContainer.classList.add("slider-container");

    const sliderLabel = document.createElement("div");
    sliderLabel.setAttribute("id", `slider-label-${id}`);
    sliderLabel.innerText = `${this.labelText}: ${value}`;
    this.labelElement = sliderLabel;

    const minValue = document.createElement("div");
    minValue.classList.add("slider-min-max");
    minValue.innerText = min;

    const maxValue = document.createElement("div");
    maxValue.classList.add("slider-min-max");
    maxValue.innerText = max;

    const sliderWrapper = document.createElement("div");
    sliderWrapper.setAttribute("id", `slider-wrapper-${id}`);
    sliderWrapper.classList.add("slider-wrapper");

    const slider = document.createElement("input");
    const configArray = Object.entries({
      ...this.config,
      id: `slider-${id}`,
    });
    configArray.forEach((attr) => {
      slider.setAttribute(`${attr[0]}`, `${attr[1]}`);
    });
    slider.classList.add("slider");

    sliderWrapper.append(minValue, slider, maxValue);
    sliderContainer.append(sliderLabel, sliderWrapper);

    return sliderContainer;
  }

  set value(num) {
    this.labelElement.innerText = `${this.labelText}: ${num}`;
    const newConfig = { ...state.fieldConfig, numX: num };
    state.fieldConfig = newConfig;
  }

  get value() {
    return this.inputElement.value;
  }
}

export default Slider;
