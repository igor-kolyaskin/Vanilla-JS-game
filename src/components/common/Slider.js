import elements from "../../store/elements";
import Element from "./Element";

const Slider = (config) => {
  const {
    id, value, min, max, labelText,
  } = config;

  const configSliderLabel = {
    tag: "div",
    attributes: [["id", `slider-label-${id}`]],
    classes: [],
    children: [],
    innerText: `${labelText}: ${value}`,
  };
  const sliderLabel = Element(configSliderLabel);

  const configMinValue = {
    tag: "div",
    attributes: [],
    classes: ["slider-min-max"],
    children: [],
    innerText: min,
  };
  const minValue = Element(configMinValue);

  const configMaxValue = {
    tag: "div",
    attributes: [],
    classes: ["slider-min-max"],
    children: [],
    innerText: max,
  };
  const maxValue = Element(configMaxValue);

  const configSlider = {
    tag: "input",
    attributes: Object.entries({
      ...config,
      id: `slider-${id}`,
      type: "range",
    }),
    classes: ["slider"],
    children: [],
    innerText: null,
  };
  const slider = Element(configSlider);

  const configSliderWrapper = {
    tag: "div",
    attributes: [["id", `slider-wrapper-${id}`]],
    classes: ["slider-wrapper"],
    children: [minValue, slider, maxValue],
    innerText: null,
  };
  const sliderWrapper = Element(configSliderWrapper);

  const configSliderContainer = {
    tag: "section",
    attributes: [["id", `slider-container-${id}`]],
    classes: ["slider-container"],
    children: [sliderLabel, sliderWrapper],
    innerText: null,
  };
  const sliderContainer = Element(configSliderContainer);

  elements.sliders = Object.assign(elements.sliders, { [id]: slider });
  elements.sliderLabels = Object.assign(elements.sliderLabels, {
    [id]: [sliderLabel, labelText],
  });

  return sliderContainer;
};

export default Slider;
