/* eslint-disable no-undef */
import getRightWordClick from "../../utils/getRightWordClick";

test("test-de-test", () => {
  expect(() => getRightWordClick(82)).toThrow(
    "invalid argument (82) in func getRightWordClick",
  );
  expect(() => getRightWordClick(-1)).toThrow(
    "invalid argument (-1) in func getRightWordClick",
  );
  expect(() => getRightWordClick(true)).toThrow(
    "invalid argument (true) in func getRightWordClick",
  );
  expect(() => getRightWordClick()).toThrow(
    "invalid argument (undefined) in func getRightWordClick",
  );
  expect(getRightWordClick(1)).toBe("клик");
  expect(getRightWordClick(3)).toBe("клика");
  expect(getRightWordClick(12)).toBe("кликов");
  expect(getRightWordClick(25)).toBe("кликов");
});
