const Slider = (label, config) => {
  const { id, value } = config;

  const sliderContainer = document.createElement("section");
  sliderContainer.setAttribute("id", `slider-container-${id}`);

  const sliderLabel = document.createElement("div");
  sliderLabel.setAttribute("id", `slider-label-${id}`);
  sliderLabel.innerText = `${label}: ${value}`;

  const sliderWrapper = document.createElement("div");
  sliderWrapper.setAttribute("id", `slider-wrapper-${id}`);

  const slider = document.createElement("input");
  const configArray = Object.entries({ ...config, id: `slider-${config.id}` });
  configArray.forEach((attr) => {
    slider.setAttribute(`${attr[0]}`, `${attr[1]}`);
  });

  sliderWrapper.append(slider);
  sliderContainer.append(sliderLabel, sliderWrapper);

  return sliderContainer;
};

export default Slider;
