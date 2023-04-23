import elements from "../../store/elements";
import Element from "../../elements/Element";

const Slider = (config) => {
  const {
    id, value, min, max, labelText,
  } = config;

  const configSliderLabel = {
    tag: "div",
    attributes: [["id", `slider-label-${id}`]],
    innerText: `${labelText}: ${value}`,
  };
  const sliderLabel = Element(configSliderLabel);

  const configMinValue = {
    tag: "div",
    classes: ["slider-min-max"],
    innerText: min,
  };
  const minValue = Element(configMinValue);

  const configMaxValue = {
    tag: "div",
    classes: ["slider-min-max"],
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
  };
  const slider = Element(configSlider);

  const configSliderWrapper = {
    tag: "div",
    attributes: [["id", `slider-wrapper-${id}`]],
    classes: ["slider-wrapper"],
    children: [minValue, slider, maxValue],
  };
  const sliderWrapper = Element(configSliderWrapper);

  const configSliderContainer = {
    tag: "section",
    attributes: [["id", `slider-container-${id}`]],
    classes: ["slider-container"],
    children: [sliderLabel, sliderWrapper],
  };
  const sliderContainer = Element(configSliderContainer);

  elements.sliders = Object.assign(elements.sliders, { [id]: slider });
  elements.sliderLabels = Object.assign(elements.sliderLabels, {
    [id]: [sliderLabel, labelText],
  });

  return sliderContainer;
};

export default Slider;
