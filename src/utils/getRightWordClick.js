function funcWithError(num) {
  if (num > 81 || num < 1 || !Number.isInteger(num)) {
    throw new Error(`invalid argument (${num}) in func getRightWordClick`);
  }
  let wordClick = "кликов";
  if (+num >= 5 && +num <= 20) wordClick = "кликов";
  else if (+num % 10 === 1) wordClick = "клик";
  else if (+num % 10 >= 2 && +num % 10 <= 4) wordClick = "клика";

  return wordClick;
}
export default funcWithError;
