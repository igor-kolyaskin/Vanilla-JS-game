import fieldInstance from "../components/Field";
import wait from "../utils/wait";

function tileClickListener(event) {
  const targetId = event.target.id.split("-");
  const [caller, x, y] = targetId;
  if (caller !== "tile") return;

  const aggArea = fieldInstance.getAggregationArea(x, y);
  console.log(aggArea);

  async function handleClick() {
    fieldInstance.changeAggregatedTilesInDOM(aggArea, 0);
    await wait(1000);
    fieldInstance.refreshColumns(aggArea);
  }

  handleClick();

  // rerender() creates a new field DOM-tree
  // fieldInstance.rerender();

  // for (let i = 0; i < fieldInstance.numX; i++) {
  //   console.log(
  //     `column ${i}: ${fieldInstance
  //       ._getRefreshedColumn(i)
  //       .map((tile) => `<${tile.id}/${tile.type}>`)}`
  //   );
  // }
}

export default tileClickListener;
