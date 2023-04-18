import fieldInstance from "../components/field/Field";
import state from "../store/state";
import {
  deepCloneTiles,
  getSquareBangArea,
  getCommonAggregationArea,
} from "../utils";

const getAggregationArea = (x, y, tileColor) => {
  const tiles = deepCloneTiles(fieldInstance.tiles);
  const { numX, numY } = state.fieldConfig;

  let aggArea;
  if (tileColor === "10.png\")") {
    aggArea = getSquareBangArea(x, y, numX, numY);
  } else {
    const aggType = tileColor === "11.png\")" ? "twin" : "standard";
    aggArea = getCommonAggregationArea(x, y, numX, numY, tiles, aggType);
  }

  return aggArea;
};

export default getAggregationArea;
