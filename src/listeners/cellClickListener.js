import fieldInstance from "../components/Field";

function cellClickListener(event) {
  const targetId = event.target.id.split("-");
  const [caller, x, y] = targetId;
  if (caller !== "cell") return;
  fieldInstance.getAggregationArea(x, y);
  fieldInstance.rerender();
}

export default cellClickListener;
