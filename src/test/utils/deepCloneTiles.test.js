/* eslint-disable no-undef */
import deepCloneTiles from "../../utils/deepCloneTiles";

test("глубокое копирование массива с уровнем вложенности 1", () => {
  const mockArr = [
    [
      {
        id: "a", type: 1, aggregation: 3, positionY: 3,
      },
      {
        id: "b", type: 4, aggregation: 5, positionY: 6,
      },
    ],
    [
      {
        id: "c", type: 11, aggregation: 13, positionY: 13,
      },
      {
        id: "d", type: 14, aggregation: 15, positionY: 16,
      },
    ],
  ];
  const refArr = [
    [
      {
        id: "a", type: 1, aggregation: 3, positionY: 3,
      },
      {
        id: "b", type: 4, aggregation: 5, positionY: 6,
      },
    ],
    [
      {
        id: "c", type: 11, aggregation: 13, positionY: 13,
      },
      {
        id: "d", type: 14, aggregation: 15, positionY: 16,
      },
    ],
  ];
  expect(deepCloneTiles(mockArr)).toEqual(refArr);
});
