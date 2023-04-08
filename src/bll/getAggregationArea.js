import fieldInstance from "../components/field/Field";
import deepCloneTiles from "../utils/deepCloneTiles";
import state from "../store/state";
import getStandardAggregationArea from "../utils/getStandardAggregationArea";
import getSquareBangArea from "../utils/getSquareBangArea";

const getAggregationArea = (x, y, tileColor) => {
  const tiles = deepCloneTiles(fieldInstance.tiles);
  const { numX, numY } = state.fieldConfig;

  let aggArea;
  if (tileColor === '10.png")') {
    aggArea = getSquareBangArea(x, y, numX, numY);
  } else {
    aggArea = getStandardAggregationArea(x, y, numX, numY, tiles);
  }

  return aggArea;
};

export default getAggregationArea;
