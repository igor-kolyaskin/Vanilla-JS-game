import fieldInstance from "../components/field/Field";
import game from "../bll/Game";
import { wait, setVariablesCSS } from "../utils";

const handleClickTile = async (x, y, tileColor, aggArea) => {
  // if aggregation area >= 5, and this tile isn't Bang (color === 10) itself, then
  // this tile is exluded from area and gets special properties
  // it will be super blast tile
  if (aggArea.length >= 5 && tileColor !== '10.png")') {
    fieldInstance.setPropertiesToTile(x, y, 10, 0);
    aggArea = aggArea.filter((tile) => !(tile.x === +x && tile.y === +y));
  }

  // blast properties is added to all remaining tiles in aggregation area
  // it's for disappearing
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
