function onChangeSliderX(event, slider) {
  const value = event.target.value;
  console.log(value);
  slider.value = value;
}

export default onChangeSliderX;
