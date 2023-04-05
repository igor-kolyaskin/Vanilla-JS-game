import fieldInstance from "../components/field/Field";
import wait from "../utils/wait";
import setVariablesCSS from "../utils/setVariablesCSS";
import game from "../bll/Game";

const handleClickTile = async (x, y, aggArea) => {
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

export default handleClickTile;
