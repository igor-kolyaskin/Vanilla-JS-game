import fieldInstance from "../components/field/Field";
import streetlightInstance from "../components/header/Streetlight";
import state from "../store/state";
import wait from "../utils/wait";
import setVariablesCSS from "../utils/setVariablesCSS";
import game from "../bll/Game";

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

  const handleClickTile = async (aggArea) => {
    fieldInstance.appendBlastToTile(aggArea);

    let variablesCSS = {
      "--blast-size-x": "0",
      "--blast-size-y": "0",
    };
    setVariablesCSS(variablesCSS);
    await wait(0);

    variablesCSS = {
      "--blast-size-x": "3rem",
      "--blast-size-y": "3rem",
      "--tile-blast-bgn-clr": "rgba(0, 0, 0, .4)",
    };
    setVariablesCSS(variablesCSS);
    await wait(500);

    variablesCSS = { "--tile-blast-bgn-clr": "rgba(0, 0, 0, .1)" };
    setVariablesCSS(variablesCSS);

    fieldInstance.changeAggregatedTiles(x, y, aggArea);
    fieldInstance.refreshColumns(aggArea);

    game.incrementMoves();
    game.incrementScore(aggArea.length);
    game.setGameStatus();
  };
  handleClickTile(aggArea);
}

export default onClickTile;
