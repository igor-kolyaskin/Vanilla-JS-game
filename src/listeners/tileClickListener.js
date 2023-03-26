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

  const aggArea = fieldInstance.getAggregationArea(x, y);

  // fieldInstance.changeAggregatedDomTiles(aggArea, 0);
  fieldInstance.refreshColumns(aggArea);
}

export default tileClickListener;
