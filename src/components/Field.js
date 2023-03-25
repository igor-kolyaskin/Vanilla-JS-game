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
    this.tiles = Array(numX)
      .fill(0)
      .map((column, indexX) => {
        return Array(numY)
          .fill(0)
          .map((tile, indexY) => {
            const tileType = this._getRandomTileType(numColors);
            return {
              id: `${indexX}-${indexY}`,
              type: tileType,
              aggregation: 0,
            };
          });
      });
  }

  render() {
    const field = document.createElement("main");
    field.setAttribute("id", "field-container");
    elements.fieldContainer = field;

    const tiles = this._getTiles();
    field.append(...tiles);

    return field;
  }

  rerender() {
    const field = elements.fieldContainer;
    field.innerHTML = "";
    const tiles = this._getTiles();
    field.append(...tiles);
  }

  _getRandomTileType(numColors) {
    return Math.ceil(Math.random() * numColors);
  }

  _getTiles() {
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
            tile.setAttribute(
              "id",
              `tile-${indexX}-${indexY}-${objectTileType}`
            );
            tile.classList.add("tile");
            tile.style.backgroundColor = `var(--tile-${objectTileType}-clr)`;
            return tile;
          });
        column.append(...tiles);

        return column;
      });
  }
  // this fn returns array of aggregated tiles' coordinates
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
}

export default new Field();
