import fieldInstance from "../components/field/Field";
import streetlightInstance from "../components/header/Streetlight";
import state from "../store/state";
import handleClickTile from "../bll/handleClickTile";

function onClickTile(event) {
  if (state.fieldConfig.fieldLock) return;

  const tileColor = event.target.style.backgroundImage.split("_")[1];
  const targetId = event.target.id.split("-");
  const [caller, x, y] = targetId;
  if (caller !== "tile") return;

  streetlightInstance.showMessageWaitNumberRemainingTiles();
  state.updateState({ key: "fieldLock", value: true });

  let aggArea;
  if (tileColor === '10.png")') {
    aggArea = fieldInstance.getSquareBangArea(x, y);
  } else {
    aggArea = fieldInstance.getAggregationArea(x, y, true);
  }

  if (aggArea.length < state.fieldConfig.minAggregationSize) {
    state.updateState({ key: "fieldLock", value: false });
    streetlightInstance.showMessageLittleBlockDoesNotBurn();
    return;
  }

  handleClickTile(x, y, tileColor, aggArea);
}

export default onClickTile;
