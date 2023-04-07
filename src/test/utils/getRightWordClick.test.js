import getRightWordClick from "../../utils/getRightWordClick";

test("правильное склонение слова 'клик' в зависимости от числа", () => {
  expect(getRightWordClick(1)).toBe("клик");
  expect(getRightWordClick(2)).toBe("клика");
  expect(getRightWordClick(5)).toBe("кликов");
  expect(getRightWordClick(undefined)).toBe("кликов");
  expect(getRightWordClick(-1)).toBe("кликов");
});
