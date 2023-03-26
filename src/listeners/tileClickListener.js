import fieldInstance from "../components/Field";

function tileClickListener(event) {
  const targetId = event.target.id.split("-");
  const [caller, x, y] = targetId;
  if (caller !== "tile") return;

  const aggArea = fieldInstance.getAggregationArea(x, y);

  // fieldInstance.changeAggregatedDomTiles(aggArea, 0);
  fieldInstance.refreshColumns(aggArea);
}

export default tileClickListener;
