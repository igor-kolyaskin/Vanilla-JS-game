import fieldInstance from "../components/Field";

function tileClickListener(event) {
  const targetId = event.target.id.split("-");
  const [caller, x, y] = targetId;
  if (caller !== "tile") return;
  fieldInstance.getAggregationArea(x, y);
  fieldInstance.rerender();
}

export default tileClickListener;
