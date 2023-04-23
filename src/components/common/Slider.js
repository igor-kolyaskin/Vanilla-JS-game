import elements from "../../store/elements";
import { Div, Input, Section } from "../../elements";

const Slider = (config) => {
  const {
    id, value, min, max, labelText,
  } = config;

  const configSliderLabel = {
    attributes: [["id", `slider-label-${id}`]],
    innerText: `${labelText}: ${value}`,
  };
  const sliderLabel = Div(configSliderLabel);

  const configMinValue = {
    classes: ["slider-min-max"],
    innerText: min,
  };
  const minValue = Div(configMinValue);

  const configMaxValue = {
    classes: ["slider-min-max"],
    innerText: max,
  };
  const maxValue = Div(configMaxValue);

  const configSlider = {
    attributes: Object.entries({
      ...config,
      id: `slider-${id}`,
      type: "range",
    }),
    classes: ["slider"],
  };
  const slider = Input(configSlider);

  const configSliderWrapper = {
    attributes: [["id", `slider-wrapper-${id}`]],
    classes: ["slider-wrapper"],
    children: [minValue, slider, maxValue],
  };
  const sliderWrapper = Div(configSliderWrapper);

  const configSliderContainer = {
    attributes: [["id", `slider-container-${id}`]],
    classes: ["slider-container"],
    children: [sliderLabel, sliderWrapper],
  };
  const sliderContainer = Section(configSliderContainer);

  elements.sliders = Object.assign(elements.sliders, { [id]: slider });
  elements.sliderLabels = Object.assign(elements.sliderLabels, {
    [id]: [sliderLabel, labelText],
  });

  return sliderContainer;
};

export default Slider;
