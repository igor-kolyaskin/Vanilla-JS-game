const getRightWordClick = (num) => {
  let wordClick = "кликов";
  if (+num >= 5 && +num <= 20) wordClick = "кликов";
  else if (+num % 10 === 1) wordClick = "клик";
  else if (+num % 10 >= 2 && +num % 10 <= 4) wordClick = "клика";

  return wordClick;
};

export default getRightWordClick;
