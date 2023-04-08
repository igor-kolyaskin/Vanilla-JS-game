import fieldInstance from "../components/field/Field";
import deepCloneTiles from "../utils/deepCloneTiles";
import state from "../store/state";
import getStandardAggregationArea from "../utils/getStandardAggregationArea";

const getAggregationArea = (x, y, tileColor) => {
  const tiles = deepCloneTiles(fieldInstance.tiles);
  const { numX, numY } = state.fieldConfig;

  let aggArea;
  if (tileColor === '10.png")') {
    aggArea = fieldInstance.getSquareBangArea(x, y);
  } else {
    aggArea = getStandardAggregationArea(x, y, numX, numY, tiles);
  }

  return aggArea;
};

export default getAggregationArea;
