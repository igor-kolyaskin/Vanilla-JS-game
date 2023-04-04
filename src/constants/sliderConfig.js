const sliderConfig = [
  {
    id: "numX",
    min: 5,
    max: 9,
    step: 1,
    labelText: "Количество столбцов",
  },
  {
    id: "numY",
    min: 5,
    max: 9,
    step: 1,
    labelText: "Количество рядов",
  },
  {
    id: "numColors",
    min: 3,
    max: 6,
    step: 1,
    labelText: "Количество цветов",
  },
  {
    id: "scoreToWin",
    min: 0,
    max: 300,
    step: 10,
    labelText: "Сумма очков для победы",
  },
  {
    id: "movesToWin",
    min: 3,
    max: 30,
    step: 1,
    labelText: "Максимальное количество ходов",
  },
];

export default sliderConfig;
