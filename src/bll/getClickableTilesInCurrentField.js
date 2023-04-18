import state from "../store/state";
import { getCommonAggregationArea } from "../utils";

const getClickableTilesInCurrentField = (tiles) => {
  const { numX, numY } = state.fieldConfig;
  const aggType = "standard";
  let moves = 0;

  for (let x = 0; x < numX; x += 1) {
    for (let y = 0; y < numY; y += 1) {
      if (
        getCommonAggregationArea(x, y, numX, numY, tiles, aggType).length
        >= state.fieldConfig.minAggregationSize
      ) {
        moves += 1;
      }
    }
  }

  return moves;
};

export default getClickableTilesInCurrentField;
