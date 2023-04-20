import streetlightInstance from "../components/header/Streetlight";
import state from "../store/state";
import handleClickTile from "../bll/handleClickTile";
import getAggregationArea from "../bll/getAggregationArea";

function onClickTile(event) {
  if (state.fieldConfig.fieldLock) return;

  const tileColor = event.target.style.backgroundImage.split("_")[1];
  const targetId = event.target.id.split("-");
  const [caller, x, y] = targetId;
  if (caller !== "tile") return;

  streetlightInstance.showMessage("wait");
  let stateUpdates = [{ fieldLock: true }];
  state.updateState(stateUpdates);

  const aggArea = getAggregationArea(x, y, tileColor);

  if (aggArea.length < state.fieldConfig.minAggregationSize) {
    stateUpdates = [{ fieldLock: false }];
    state.updateState(stateUpdates);
    streetlightInstance.showMessage("blockIsTooSmall");
    return;
  }

  handleClickTile(x, y, tileColor, aggArea);
}

export default onClickTile;
