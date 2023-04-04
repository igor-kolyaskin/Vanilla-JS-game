import state from "../state/state";

const sliderConfig = [
  {
    id: "numX",
    min: 5,
    max: 9,
    step: 1,
    labelText: "Количество столбцов",
    "data-cluster": "fieldConfig",
  },
  {
    id: "numY",
    min: 5,
    max: 9,
    step: 1,
    labelText: "Количество рядов",
    "data-cluster": "fieldConfig",
  },
  {
    id: "numColors",
    min: 3,
    max: 6,
    step: 1,
    labelText: "Количество цветов",
    "data-cluster": "fieldConfig",
  },
  {
    id: "scoreToWin",
    min: 0,
    max: 300,
    step: 10,
    labelText: "Сумма очков для победы",
    "data-cluster": "game",
  },
];

export default sliderConfig;
