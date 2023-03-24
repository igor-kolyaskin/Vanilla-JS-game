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
            const cellType = this._getCellType(numColors);
            return { id: `${indexX}-${indexY}`, type: cellType };
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

  _getCellType(numColors) {
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
}

export default new Field();
