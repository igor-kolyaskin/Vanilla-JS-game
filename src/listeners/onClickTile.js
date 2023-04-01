import fieldInstance from "../components/field/Field";
import streetlightInstance from "../components/header/Streetlight";
import state from "../state/state";
import wait from "../utils/wait";
import elements from "../state/elements";

function onClickTile(event) {
  if (state.fieldLock) return;
  streetlightInstance.yellow();
  state.lockField();

  const targetId = event.target.id.split("-");
  const [caller, x, y] = targetId;
  if (caller !== "tile") return;

  const aggArea = fieldInstance.getAggregationArea(x, y, true);
  if (aggArea.length < state.fieldConfig.minAggregationSize) {
    state.unlockField();
    streetlightInstance.green();
    return;
  }

  const handleClickTile = async (aggArea) => {
    fieldInstance.appendBlastToTile(aggArea);

    elements.body.style.setProperty("--blast-size-x", "0");
    elements.body.style.setProperty("--blast-size-y", "0");
    await wait(0);

    elements.body.style.setProperty("--blast-size-x", "3rem");
    elements.body.style.setProperty("--blast-size-y", "3rem");
    elements.body.style.setProperty(
      "--tile-blast-bgn-clr",
      "rgba(0, 0, 0, .4)"
    );

    await wait(500);

    elements.body.style.setProperty(
      "--tile-blast-bgn-clr",
      "rgba(0, 0, 0, 0.1)"
    );

    fieldInstance.changeAggregatedTiles(x, y, aggArea);
    fieldInstance.refreshColumns(aggArea);
  };
  handleClickTile(aggArea);
}

export default onClickTile;
