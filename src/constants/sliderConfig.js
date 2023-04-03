import state from "../state/state";

const sliderConfig = [
  {
    id: "numX",
    min: 5,
    max: 9,
    step: 1,
    value: state.fieldConfig.numX,
    labelText: "columns",
  },
  {
    id: "numY",
    min: 5,
    max: 9,
    step: 1,
    value: state.fieldConfig.numY,
    labelText: "rows",
  },
  {
    id: "numColors",
    min: 3,
    max: 6,
    step: 1,
    value: state.fieldConfig.numColors,
    labelText: "colors",
  },
];

export default sliderConfig;
