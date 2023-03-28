class Slider {
  constructor(label, config) {
    this.label = label;
    this.config = config;
  }

  render() {
    const { id, value } = this.config;

    const sliderContainer = document.createElement("section");
    sliderContainer.setAttribute("id", `slider-container-${id}`);

    const sliderLabel = document.createElement("div");
    sliderLabel.setAttribute("id", `slider-label-${id}`);
    sliderLabel.innerText = `${this.label}: ${value}`;

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

    sliderWrapper.append(slider);
    sliderContainer.append(sliderLabel, sliderWrapper);

    return sliderContainer;
  }
}

export default Slider;
