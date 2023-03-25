import elements from "../state/elements";
class Field {
  constructor() {
    this.numX = 0;
    this.numY = 0;
    this.numColors = 0;
    this.tiles = [];
  }

  init({ numX, numY, numColors }) {
    this.numX = numX;
    this.numY = numY;
    this.numColors = numColors;

    this.tiles = Array(numX)
      .fill(0)
      .map((column, indexX) => {
        return Array(numY)
          .fill(0)
          .map((tile, indexY) => this._createTile(indexX, indexY));
      });
  }

  _createTile(x, y, aggregation = 0) {
    const tileType = this._getRandomTileType();
    return {
      id: `${x}-${y}`,
      type: tileType,
      aggregation: aggregation,
    };
  }

  // creates DOM-tree of tiles first time
  render() {
    const field = document.createElement("main");
    field.setAttribute("id", "field-container");
    elements.fieldContainer = field;

    const tilesDOM = this._createDOMTiles();
    field.append(...tilesDOM);

    return field;
  }

  // creates a new DOM-tree of tiles and replaces the old one
  rerender() {
    const field = elements.fieldContainer;
    field.innerHTML = "";
    const tilesDOM = this._createDOMTiles();
    field.append(...tilesDOM);
  }

  _getRandomTileType() {
    return Math.ceil(Math.random() * this.numColors);
  }

  _createDOMTiles() {
    return Array(this.numX)
      .fill(0)
      .map((clmn, indexX) => {
        const column = document.createElement("div");
        column.setAttribute("id", `column-${indexX}`);
        column.classList.add("column");

        const tiles = Array(this.numY)
          .fill(0)
          .map((tl, indexY) => {
            const objectTileType = this.tiles[indexX][indexY]["type"];

            const tile = document.createElement("div");
            tile.setAttribute("id", `tile-${indexX}-${indexY}`);
            tile.classList.add("tile");
            tile.style.backgroundColor = `var(--tile-${objectTileType}-clr)`;
            return tile;
          });
        column.append(...tiles);

        return column;
      });
  }

  // getAggregationArea(x, y)
  // 1) sets type = 0 for aggregated tiles in object this.tiles
  // 2) returns array of aggregated tiles' coordinates
  getAggregationArea(x, y) {
    const clickedTile = this.tiles[x][y];
    const type = clickedTile.type;

    let agg = [{ x: +x, y: +y }];
    clickedTile.aggregation = type;
    clickedTile.type = 0;
    let prevLength = 1;

    while (true) {
      agg.forEach((tile) => {
        agg = [...agg, ...this._getNeighbourTiles(+tile.x, +tile.y, type)];
      });
      if (prevLength === agg.length) break;
      prevLength = agg.length;
    }
    return agg;
  }

  _getNeighbourTiles(x, y, targetType) {
    const aggr = [];
    const __getNeighbourTile = ([a, b]) => {
      const tile = this.tiles[a][b];
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
  }

  _getRefreshedColumn(columnNumber) {
    const column = this.tiles[columnNumber];
    const cleanedColumn = column.filter((tile) => tile.type);
    const gap = this.numY - cleanedColumn.length;
    let replenishment = [];
    if (gap) {
      replenishment = Array(gap)
        .fill(0)
        .map((tl, index) => this._createTile(columnNumber, index));
    }
    return replenishment.concat(cleanedColumn);
  }

  // changeAggregatedTilesInDOM(aggArea)
  // applies visible changes to aggregated DOM-tiles in accordance with aggArea
  // currently sets color = 0
  changeAggregatedTilesInDOM(aggArea, color) {
    aggArea.forEach((tile) => {
      const tileDOM = document.getElementById(`tile-${tile.x}-${tile.y}`);
      tileDOM.style.backgroundColor = `var(--tile-${color}-clr)`;
    });
  }

  // refreshColumns(aggArea)
  // 1) changes columns in object this.tiles
  // 2) changes columns in DOM-tree
  refreshColumns(aggArea) {
    const columnArray = [];
    aggArea.forEach((tile) => {
      if (!columnArray.includes(tile.x)) columnArray.push(+tile.x);
    });
    columnArray
      .sort((a, b) => a - b)
      .forEach((columnNum) => {
        const aggregatedTilesInThisColumn = aggArea
          .filter((tile) => tile.x === columnNum)
          .sort((a, b) => a.y - b.y)
          .map((tile) => tile.y);
        this._refreshColumnInTilesObject(
          columnNum,
          aggregatedTilesInThisColumn
        );
        this._refreshColumnInTilesDOM(columnNum, aggregatedTilesInThisColumn);
      });
  }

  _refreshColumnInTilesObject(columnNum, tilesArray) {}
  _refreshColumnInTilesDOM(columnNum, tilesArray) {}
}

export default new Field();
