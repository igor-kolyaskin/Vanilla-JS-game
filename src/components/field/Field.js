/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
import elements from "../../store/elements";
import wait from "../../utils/wait";
import state from "../../store/state";
import streetlightInstance from "../header/Streetlight";
import deepCloneTiles from "../../utils/deepCloneTiles";
import getRandomTileType from "../../utils/getRandomTileType";
import TileBlast from "./TileBlast";
import Tile from "./Tile";
import { Div } from "../../elements";
import getClickableTilesInCurrentField from "../../bll/getClickableTilesInCurrentField";

class Field {
  constructor() {
    this.numX = 0;
    this.numY = 0;
    this.numColors = 0;
    this.tiles = [];
  }

  init({ numX, numY, numColors }) {
    this.numX = +numX;
    this.numY = +numY;
    this.numColors = +numColors;

    this.tiles = Array(+numX)
      .fill(0)
      .map((column, indexX) => Array(+numY)
        .fill(0)
        .map((_, indexY) => this._createTile(indexX, indexY, 0)));
  }

  _createTile(
    x,
    y,
    type = getRandomTileType(this.numColors),
    aggregation = 0,
    position = y,
  ) {
    return {
      id: `${x}-${y}`,
      type,
      aggregation,
      positionY: position, // shows actual place along y-axis
    };
  }

  // creates DOM-tree of tiles first time
  render() {
    let fieldWrapper;
    let field;
    if (elements.field) {
      fieldWrapper = elements.fieldWrapper;
      field = elements.field;
      elements.field.innerHTML = "";
    } else {
      const configField = { attributes: { id: "field" } };
      field = Div(configField);

      const configFieldWrapper = {
        attributes: { id: "field-wrapper" },
        children: [field],
      };
      fieldWrapper = Div(configFieldWrapper);

      elements.field = field;
      elements.fieldWrapper = fieldWrapper;
    }

    const domTiles = this._createDomTiles();
    field.append(...domTiles);
    return fieldWrapper;
  }

  _createDomTiles() {
    const domColumnRefs = [];
    const domTiles = Array(this.numX)
      .fill(0)
      .map((clmn, indexX) => {
        const tiles = Array(this.numY)
          .fill(0)
          .map((_, indexY) => this._getDomTile(indexX, indexY, indexY));

        const configColumn = {
          attributes: { id: `column-${indexX}` },
          classes: ["column"],
          children: tiles,
        };
        const column = Div(configColumn);
        domColumnRefs.push(column);

        return column;
      });
    elements.domColumns = domColumnRefs;

    return domTiles;
  }

  _getDomTile(x, y, top) {
    const { type } = this.tiles[x][y];

    return Tile(x, y, top, type);
  }

  // changeAggregatedTiles(x, y, aggArea)
  // applies visible changes to aggregated DOM-tiles in accordance with aggArea
  // currently sets color = 0
  changeAggregatedTiles(x, y, aggArea) {
    const tile = this.tiles[x][y];
    const { type } = tile;

    aggArea.forEach((tl) => {
      const tileModel = this.tiles[tl.x][tl.y];
      tileModel.type = 0;
      tileModel.aggregation = type;

      const tileDOM = document.getElementById(`tile-${tl.x}-${tl.y}`);
      tileDOM.style.backgroundColor = "var(--tile-0-clr)";
    });
  }

  // attachBlastToTile(aggArea)
  // attaches to all tiles a div with animated cirle
  appendBlastToTile(aggArea) {
    aggArea.forEach((tile) => {
      const tileDOM = document.getElementById(`tile-${tile.x}-${tile.y}`);
      tileDOM.append(TileBlast());
    });
  }

  // setPropertiesToTile(x, y, type, aggregation)
  // sets properties to certain tile in model and in DOM
  setPropertiesToTile(x, y, type, aggregation) {
    const tileDOM = document.getElementById(`tile-${x}-${y}`);
    tileDOM.style.backgroundImage = `url(./assets/png/tile_${type}.png)`;

    const tile = this.tiles[x][y];
    tile.aggregation = aggregation;
    tile.type = type;
  }

  // refreshColumns(aggArea)
  // 1) changes columns in model
  // 2) changes columns in DOM
  refreshColumns(aggArea) {
    const columnArray = [];
    aggArea.forEach((tile) => {
      if (!columnArray.includes(tile.x)) columnArray.push(+tile.x);
    });

    const promiseArray = columnArray.map((columnNum) => {
      const aggregatedTilesInThisColumn = aggArea
        .filter((tile) => tile.x === columnNum)
        .map((tile) => tile.y);
      return this._refreshColumn(columnNum, aggregatedTilesInThisColumn);
    });

    Promise.all(promiseArray).then(() => {
      if (
        state.fieldConfig.status !== "win"
        && state.fieldConfig.status !== "losing"
      ) {
        const stateUpdates = [{ fieldLock: false }];
        state.updateState(stateUpdates);
      }
      const moves = getClickableTilesInCurrentField(deepCloneTiles(this.tiles));

      if (moves) {
        if (
          state.fieldConfig.status === "win"
          || state.fieldConfig.status === "losing"
        ) {
          streetlightInstance.showMessage("pressButtonGo");
        } else {
          streetlightInstance.showMessage("remainingTiles", moves);
        }
      } else {
        streetlightInstance.showMessage("noClicableTiles");
        const stateUpdates = [{ fieldLock: true }];
        state.updateState(stateUpdates);
      }
    });
  }

  // refreshColumn(columnNum, aggTiles)
  // 1) changes a column in model
  // 2) changes a column in DOM
  // 3) returns a promise for tiles shift
  _refreshColumn(columnNum, aggTiles) {
    const modelColumn = this.tiles[columnNum];
    const gap = modelColumn.filter((tile) => tile.type === 0).length;

    // 1) changes in model ------------------------------------------------------------------

    const filteredModelColumn = modelColumn
      .filter((tile) => tile.type !== 0)
      .map((tile, index) => ({ ...tile, id: `${columnNum}-${index + gap}` }));

    const modelReplenishment = Array(gap)
      .fill(0)
      .map((_, index) => this._createTile(columnNum, index, undefined, 0, index - gap));

    const refreshedModelColumn = modelReplenishment.concat(filteredModelColumn);
    this.tiles[columnNum] = [...refreshedModelColumn];

    // 2) changes in DOM ---------------------------------------------------------------------

    // remove aggregated tiles
    const domColumn = elements.domColumns[columnNum];
    aggTiles.forEach((tile) => document.getElementById(`tile-${columnNum}-${tile}`).remove());

    // change id
    let tileNum = gap;
    // eslint-disable-next-line no-restricted-syntax, prefer-const
    for (let domTile of domColumn.children) {
      domTile.setAttribute("id", `tile-${columnNum}-${tileNum}`);
      tileNum += 1;
    }

    // create replenishment for DOM
    const domReplenishment = Array(gap)
      .fill(0)
      .map((_, index) => this._getDomTile(columnNum, index, index - gap));

    // add replenishment tiles to DOM column
    domColumn.prepend(...domReplenishment);

    // 3) promise for reassign y-position of model tiles and top-property for DOM tiles ------------

    const currentColumn = this.tiles[columnNum];

    const shiftTiles = async () => {
      let whileCondition = true;
      while (whileCondition) {
        whileCondition = false;
        // eslint-disable-next-line no-await-in-loop
        await wait(100);

        tileNum = 0;
        // eslint-disable-next-line no-restricted-syntax, prefer-const
        for (let domTile of domColumn.children) {
          const currentPositionY = currentColumn[tileNum].positionY;
          if (currentPositionY - tileNum) {
            currentColumn[tileNum].positionY += 1;
            whileCondition = true;
          }
          domTile.style.top = `${
            currentColumn[tileNum].positionY * state.fieldConfig.tileSize
          }rem`;
          tileNum += 1;
        }
      }
    };

    return shiftTiles();
  }
}

export default new Field();
