import state from "../store/state";
import { getStandardAggregationArea } from "../utils";

const getClickableTilesInCurrentField = (tiles) => {
  const { numX, numY } = state.fieldConfig;
  let moves = 0;
  for (let x = 0; x < numX; x += 1) {
    for (let y = 0; y < numY; y += 1) {
      if (
        getStandardAggregationArea(x, y, numX, numY, tiles).length
        >= state.fieldConfig.minAggregationSize
      ) {
        moves += 1;
      }
    }
  }
  return moves;
};

export default getClickableTilesInCurrentField;
