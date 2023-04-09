import fieldInstance from "../components/field/Field";
import state from "../store/state";
import {
  deepCloneTiles,
  getSquareBangArea,
  getStandardAggregationArea,
  getTwinTileArea,
} from "../utils";

const getAggregationArea = (x, y, tileColor) => {
  const tiles = deepCloneTiles(fieldInstance.tiles);
  const { numX, numY } = state.fieldConfig;

  let aggArea;
  if (tileColor === '10.png")') {
    aggArea = getSquareBangArea(x, y, numX, numY);
  } else if (tileColor === '11.png")') {
    aggArea = getTwinTileArea(x, y, numX, numY, tiles);
  } else {
    aggArea = getStandardAggregationArea(x, y, numX, numY, tiles);
  }

  return aggArea;
};

export default getAggregationArea;
