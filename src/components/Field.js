import elements from "../state/elements";
class Field {
  constructor() {
    this.numX = 0;
    this.numY = 0;
    this.numColors = 0;
    this.columns = [];
  }

  init({ numX, numY, numColors }) {
    this.numX = numX;
    this.numY = numY;
    this.columns = Array(numX)
      .fill(0)
      .map((column, indexX) => {
        return Array(numY)
          .fill(0)
          .map((cell, indexY) => {
            const cellType = this._getRandomCellType(numColors);
            return {
              id: `${indexX}-${indexY}`,
              type: cellType,
              aggregation: 0,
            };
          });
      });
  }

  render() {
    const field = document.createElement("main");
    field.setAttribute("id", "field-container");
    elements.fieldContainer = field;

    const columns = this._getColumns();
    field.append(...columns);

    return field;
  }

  rerender() {
    const field = elements.fieldContainer;
    field.innerHTML = "";
    const columns = this._getColumns();
    field.append(...columns);
  }

  _getRandomCellType(numColors) {
    return Math.ceil(Math.random() * numColors);
  }

  _getColumns() {
    return Array(this.numX)
      .fill(0)
      .map((clmn, indexX) => {
        const column = document.createElement("div");
        column.setAttribute("id", `column-${indexX}`);
        column.classList.add("column");

        const cells = Array(this.numY)
          .fill(0)
          .map((cll, indexY) => {
            const objectCellType = this.columns[indexX][indexY]["type"];

            const cell = document.createElement("div");
            cell.setAttribute(
              "id",
              `cell-${indexX}-${indexY}-${objectCellType}`
            );
            cell.classList.add("cell");
            cell.style.backgroundColor = `var(--cell-${objectCellType}-clr)`;
            return cell;
          });
        column.append(...cells);

        return column;
      });
  }
  // this fn returns array of aggregated cells' coordinates
  getAggregationArea(x, y) {
    const clickedCell = this.columns[x][y];
    const type = clickedCell.type;

    let agg = [{ x: +x, y: +y }];
    clickedCell.aggregation = type;
    clickedCell.type = 0;
    let prevLenght = 1;

    while (true) {
      agg.forEach((cell) => {
        agg = [...agg, ...this._getNeighbourCells(+cell.x, +cell.y, type)];
      });
      if (prevLenght === agg.length) break;
      prevLenght = agg.length;
    }
    return agg;
  }

  _getNeighbourCells(x, y, targetType) {
    const aggr = [];
    const __getNeighbourCell = ([a, b]) => {
      const cell = this.columns[a][b];
      if (cell.type === targetType && !cell.aggregation) {
        cell.aggregation = targetType;
        cell.type = 0;
        aggr.push({ x: a, y: b });
      }
    };

    // neighbor cell top
    if (y > 0) __getNeighbourCell([x, y - 1]);
    // neighbor cell right
    if (x < this.numX - 1) __getNeighbourCell([x + 1, y]);
    // neighbor cell bottom
    if (y < this.numY - 1) __getNeighbourCell([x, y + 1]);
    // neighbor cell left
    if (x > 0) __getNeighbourCell([x - 1, y]);

    return aggr;
  }
}

export default new Field();
