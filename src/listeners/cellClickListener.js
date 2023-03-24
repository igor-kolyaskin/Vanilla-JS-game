import fieldInstance from "../components/Field";

function cellClickListener(event) {
  const targetId = event.target.id.split("-");
  const caller = targetId[0];
  if (caller !== "cell") return;
  const clickedCell = fieldInstance.columns[targetId[1]][targetId[2]];
  clickedCell["type"] = 0;
  fieldInstance.rerender();
}

export default cellClickListener;
