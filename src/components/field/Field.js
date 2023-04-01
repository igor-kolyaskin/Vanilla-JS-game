import elements from "../../state/elements";
import wait from "../../utils/wait";
import state from "../../state/state";
import streetlightInstance from "../header/Streetlight";
import deepCloneTiles from "../../utils/deepCloneTiles";
import TileBlast from "./TileBlast";

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
      .map((column, indexX) => {
        return Array(+numY)
          .fill(0)
          .map((_, indexY) => this._createTile(indexX, indexY, 0));
      });
  }

  _createTile(
    x,
    y,
    type = this._getRandomTileType(),
    aggregation = 0,
    position = y
  ) {
    return {
      id: `${x}-${y}`,
      type: type,
      aggregation: aggregation,
      positionY: position, // shows actual place along y-axis
    };
  }

  // creates DOM-tree of tiles first time
  render() {
    let fieldWrapper, field;
    if (elements.field) {
      fieldWrapper = elements.fieldWrapper;
      field = elements.field;
      elements.field.innerHTML = "";
    } else {
      field = document.createElement("div");
      field.setAttribute("id", "field");
      elements.field = field;

      fieldWrapper = document.createElement("div");
      fieldWrapper.setAttribute("id", "field-wrapper");
      elements.fieldWrapper = fieldWrapper;

      fieldWrapper.append(field);
    }

    const domTiles = this._createDomTiles();
    field.append(...domTiles);
    return fieldWrapper;
  }

  _getRandomTileType() {
    return Math.ceil(Math.random() * this.numColors);
  }

  _createDomTiles() {
    const domColumnRefs = [];
    const domTiles = Array(this.numX)
      .fill(0)
      .map((clmn, indexX) => {
        const column = document.createElement("div");
        domColumnRefs.push(column);
        column.setAttribute("id", `column-${indexX}`);
        column.classList.add("column");

        const tiles = Array(this.numY)
          .fill(0)
          .map((_, indexY) => this._createDomTile(indexX, indexY));
        column.append(...tiles);

        return column;
      });
    elements.domColumns = domColumnRefs;

    return domTiles;
  }

  _createDomTile(x, y, top = y) {
    const type = this.tiles[x][y]["type"];
    const tile = document.createElement("div");
    tile.setAttribute("id", `tile-${x}-${y}`);
    tile.classList.add("tile");
    tile.style.backgroundImage = `url(../assets/png/tile_${type}.png)`;
    // tile.style.backgroundColor = `var(--tile-${type}-clr)`;
    tile.style.top = `${state.fieldConfig.tileSize * top}rem`;
    // tile.innerText = type;

    return tile;
  }

  // getAggregationArea(x, y, clone)
  // 1) sets type = 0 for aggregated tiles in model
  // 2) returns array of aggregated tiles' coordinates
  getAggregationArea(x, y, clone) {
    const tiles = clone ? deepCloneTiles(this.tiles) : this.tiles;
    const clickedTile = tiles[x][y];
    const type = clickedTile.type;

    let agg = [{ x: +x, y: +y }];
    clickedTile.aggregation = type;
    clickedTile.type = 0;
    let prevLength = 1;

    const _getNeighbourTiles = (x, y, targetType) => {
      const aggr = [];
      const __getNeighbourTile = ([a, b]) => {
        const tile = tiles[a][b];
        if (tile.type === targetType && !tile.aggregation) {
          tile.aggregation = targetType;
          tile.type = 0;
          aggr.push({ x: a, y: b });
        }
      };

      // neighbor tile top
      if (y > 0) __getNeighbourTile([x, y - 1]);
      // neighbor tile right
      if (x < this.numX - 1) __getNeighbourTile([x + 1, y]);
      // neighbor tile bottom
      if (y < this.numY - 1) __getNeighbourTile([x, y + 1]);
      // neighbor tile left
      if (x > 0) __getNeighbourTile([x - 1, y]);

      return aggr;
    };

    while (true) {
      agg.forEach((tile) => {
        agg = [...agg, ..._getNeighbourTiles(+tile.x, +tile.y, type)];
      });
      if (prevLength === agg.length) break;
      prevLength = agg.length;
    }
    return agg;
  }

  // changeAggregatedTiles(aggArea, color)
  // applies visible changes to aggregated DOM-tiles in accordance with aggArea
  // currently sets color = 0
  changeAggregatedTiles(x, y, aggArea) {
    const tile = this.tiles[x][y];
    const type = tile.type;

    aggArea.forEach((tile) => {
      const tileModel = this.tiles[tile.x][tile.y];
      tileModel.type = 0;
      tileModel.aggregation = type;

      const tileDOM = document.getElementById(`tile-${tile.x}-${tile.y}`);
      tileDOM.style.backgroundColor = `var(--tile-0-clr)`;
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
      state.unlockField();
      streetlightInstance.green();
      const moves = this.getClickableTilesInThisField();
      if (moves) {
        streetlightInstance.green(moves);
      } else {
        streetlightInstance.red();
        state.lockField();
      }
    });
  }

  // refreshColumn(columnNum, aggTiles)
  // 1) changes a column in model
  // 2) changes a column in DOM
  // 3) returns a promise for tiles shift
  _refreshColumn(columnNum, aggTiles) {
    let modelColumn = this.tiles[columnNum];
    const gap = modelColumn.filter((tile) => tile.type === 0).length;

    // 1) changes in model ------------------------------------------------------------------

    const filteredModelColumn = modelColumn
      .filter((tile) => tile.type !== 0)
      .map((tile, index) => ({ ...tile, id: `${columnNum}-${index + gap}` }));

    const modelReplenishment = Array(gap)
      .fill(0)
      .map((_, index) =>
        this._createTile(columnNum, index, undefined, 0, index - gap)
      );

    const refreshedModelColumn = modelReplenishment.concat(filteredModelColumn);
    this.tiles[columnNum] = [...refreshedModelColumn];

    // 2) changes in DOM ---------------------------------------------------------------------

    // remove aggregated tiles
    const domColumn = elements.domColumns[columnNum];
    aggTiles.forEach((tile) =>
      document.getElementById(`tile-${columnNum}-${tile}`).remove()
    );

    // change id
    let tileNum = gap;
    for (let domTile of domColumn.children) {
      domTile.setAttribute("id", `tile-${columnNum}-${tileNum}`);
      tileNum++;
    }

    // create replenishment for DOM
    const domReplenishment = Array(gap)
      .fill(0)
      .map((_, index) => this._createDomTile(columnNum, index, index - gap));

    // add replenishment tiles to DOM column
    domColumn.prepend(...domReplenishment);

    // 3) promise for reassign y-position of model tiles and top-property for DOM tiles ------------

    const currentColumn = this.tiles[columnNum];

    const shiftTiles = async () => {
      let whileCondition = true;
      while (whileCondition) {
        whileCondition = false;
        await wait(200);

        tileNum = 0;
        for (let domTile of domColumn.children) {
          // if (currentColumn[tileNum] === undefined) {
          //   console.log("line 244", currentColumn, tileNum);
          // }
          const currentPositionY = currentColumn[tileNum]["positionY"];
          if (currentPositionY - tileNum) {
            currentColumn[tileNum]["positionY"]++;
            whileCondition = true;
          }
          domTile.style.top = `${
            currentColumn[tileNum]["positionY"] * state.fieldConfig.tileSize
          }rem`;
          tileNum++;
        }
      }
    };

    return shiftTiles();
  }

  // check if field has any moves after refresh
  getClickableTilesInThisField() {
    let moves = 0;
    for (let x = 0; x < this.numX; x++) {
      for (let y = 0; y < this.numY; y++) {
        if (
          this.getAggregationArea(x, y, true).length >=
          state.fieldConfig.minAggregationSize
        ) {
          moves++;
        }
      }
    }
    return moves;
  }
}

export default new Field();
