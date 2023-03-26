import fieldInstance from "../components/Field";
import wait from "../utils/wait";

function tileClickListener(event) {
  const targetId = event.target.id.split("-");
  const [caller, x, y] = targetId;
  if (caller !== "tile") return;

  const aggArea = fieldInstance.getAggregationArea(x, y);
  console.log(aggArea);

  async function handleClick() {
    fieldInstance.changeAggregatedDomTiles(aggArea, 0);
    await wait(1000);
    fieldInstance.refreshColumns(aggArea);
  }

  handleClick();
}

export default tileClickListener;
