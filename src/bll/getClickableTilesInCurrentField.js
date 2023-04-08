import state from "../store/state";
import { getStandardAggregationArea } from "../utils";

const getClickableTilesInCurrentField = (tiles) => {
  const { numX, numY } = state.fieldConfig;
  let moves = 0;
  for (let x = 0; x < numX; x++) {
    for (let y = 0; y < numY; y++) {
      if (
        getStandardAggregationArea(x, y, numX, numY, tiles).length >=
        state.fieldConfig.minAggregationSize
      ) {
        moves++;
      }
    }
  }
  return moves;
};

export default getClickableTilesInCurrentField;
