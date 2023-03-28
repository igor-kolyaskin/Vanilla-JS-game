class Slider {
  constructor(labelText, config) {
    this.labelText = labelText;
    this.config = config;
    this.inputElement = null;
    this.labelElement = null;
  }

  render() {
    const { id, value } = this.config;

    const sliderContainer = document.createElement("section");
    sliderContainer.setAttribute("id", `slider-container-${id}`);

    const sliderLabel = document.createElement("div");
    sliderLabel.setAttribute("id", `slider-label-${id}`);
    sliderLabel.innerText = `${this.label}: ${value}`;
    this.labelElement = sliderLabel;

    const sliderWrapper = document.createElement("div");
    sliderWrapper.setAttribute("id", `slider-wrapper-${id}`);

    const slider = document.createElement("input");
    const configArray = Object.entries({
      ...this.config,
      id: `slider-${id}`,
    });
    configArray.forEach((attr) => {
      slider.setAttribute(`${attr[0]}`, `${attr[1]}`);
    });
    this.inputElement = slider;

    sliderWrapper.append(slider);
    sliderContainer.append(sliderLabel, sliderWrapper);

    return sliderContainer;
  }

  set value(num) {
    this.inputElement.value = num;
    this.labelElement.innerText = `${this.labelText}: ${num}`;
  }

  get value() {
    return this.inputElement.value;
  }
}

export default Slider;
