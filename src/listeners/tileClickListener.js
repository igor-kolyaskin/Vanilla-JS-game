import fieldInstance from "../components/Field";

function tileClickListener(event) {
  const targetId = event.target.id.split("-");
  const [caller, x, y] = targetId;
  if (caller !== "tile") return;

  // getAggregationArea(x, y)
  // 1) sets type = 0 for aggregated tiles in object this.tiles
  // 2) returns array with coordinates of aggregated tiles
  const aggArea = fieldInstance.getAggregationArea(x, y);
  console.log(aggArea);

  // changeAggregatedTilesInDOM(aggArea)
  // changes aggregated DOM-tiles in accordance wiht aggArea
  fieldInstance.changeAggregatedTilesInDOM(aggArea);

  // rerender() creates a new field DOM-tree
  // fieldInstance.rerender();

  for (let i = 0; i < fieldInstance.numX; i++) {
    console.log(
      `column ${i}: ${fieldInstance
        ._getRefreshedColumn(i)
        .map((tile) => `<${tile.id}/${tile.type}>`)}`
    );
  }
}

export default tileClickListener;
