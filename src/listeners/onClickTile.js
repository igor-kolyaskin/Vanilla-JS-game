import fieldInstance from "../components/field/Field";
import streetlightInstance from "../components/header/Streetlight";
import state from "../store/state";
import handleClickTile from "../bll/handleClickTile";

function onClickTile(event) {
  if (state.fieldConfig.fieldLock) return;
  streetlightInstance.yellow();
  state.updateState({ key: "fieldLock", value: true });

  const targetId = event.target.id.split("-");
  const [caller, x, y] = targetId;
  if (caller !== "tile") return;

  const aggArea = fieldInstance.getAggregationArea(x, y, true);
  if (aggArea.length < state.fieldConfig.minAggregationSize) {
    state.updateState({ key: "fieldLock", value: false });
    streetlightInstance.green();
    return;
  }

  handleClickTile(x, y, aggArea);
}

export default onClickTile;
