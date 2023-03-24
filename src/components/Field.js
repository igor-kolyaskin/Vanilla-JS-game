// import elements from "../../constants/elements"

class Field {
  constructor() {
    this.numX = 0;
    this.numY = 0;
    this.columns = [];
  }

  init({ numX, numY }) {
    this.numX = numX;
    this.numY = numY;
    this.columns = Array(numX)
      .fill(0)
      .map((column, indexX) => {
        return Array(numY)
          .fill(0)
          .map((cell, indexY) => ({ id: `${indexX}-${indexY}` }));
      });
    console.log(this.columns);
  }

  render() {
    const field = document.createElement("main");
    field.setAttribute("id", "field-container");

    const columns = Array(this.numX)
      .fill(0)
      .map((clmn, indexX) => {
        const column = document.createElement("div");
        column.setAttribute("id", `column-${indexX}`);
        column.classList.add("column");

        const cells = Array(this.numY)
          .fill(0)
          .map((cll, indexY) => {
            const cell = document.createElement("div");
            cell.setAttribute("id", `cell-${indexX}-${indexY}`);
            cell.classList.add("cell");
            return cell;
          });
        column.append(...cells);

        return column;
      });

    field.append(...columns);

    return field;
  }
}

export default new Field();
