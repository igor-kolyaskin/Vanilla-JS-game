import elements from "../../state/elements";

const Slider = (labelText, config) => {
  const { id, value, min, max } = config;

  const sliderContainer = document.createElement("section");
  sliderContainer.setAttribute("id", `slider-container-${id}`);
  sliderContainer.classList.add("slider-container");

  const sliderLabel = document.createElement("div");
  sliderLabel.setAttribute("id", `slider-label-${id}`);
  sliderLabel.innerText = `${labelText}: ${value}`;

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
    ...config,
    id: `slider-${id}`,
  });
  configArray.forEach((attr) => {
    slider.setAttribute(`${attr[0]}`, `${attr[1]}`);
  });
  slider.classList.add("slider");

  sliderWrapper.append(minValue, slider, maxValue);
  sliderContainer.append(sliderLabel, sliderWrapper);

  elements.sliders = Object.assign(elements.sliders, { [id]: slider });
  elements._sliderLables = Object.assign(elements.sliderLabels, {
    [id]: [sliderLabel, labelText],
  });

  return sliderContainer;
};

export default Slider;
