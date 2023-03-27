import fieldInstance from "../components/Field";
import streetlightInstance from "../components/header/Streetlight";
import state from "../state/state";

function tileClickListener(event) {
  if (state.fieldLock) return;
  streetlightInstance.yellow();
  state.fieldLock = true;

  const targetId = event.target.id.split("-");
  const [caller, x, y] = targetId;
  if (caller !== "tile") return;

  const aggArea = fieldInstance.getAggregationArea(x, y, true);
  if (aggArea.length < state.gameConfig.minAggregationSize) {
    state.fieldLock = false;
    return;
  }

  fieldInstance.changeAggregatedTiles(x, y, aggArea);
  fieldInstance.refreshColumns(aggArea);
}

export default tileClickListener;
