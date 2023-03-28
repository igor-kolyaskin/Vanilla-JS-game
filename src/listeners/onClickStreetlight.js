import fieldInstance from "../components/Field";
import streetlightInstance from "../components/header/Streetlight";
import state from "../state/state";

function onClickStreetlight(event) {
  if (event.target.id !== "streetlight-light") return;

  streetlightInstance.yellow();
  state.lockField();

  const { numX, numY } = state.fieldConfig;

  const aggArea = [];
  for (let x = 0; x < numX; x++) {
    for (let y = 0; y < numY; y++) {
      aggArea.push({ x: x, y: y });
    }
  }
  console.log("after red click", aggArea);

  fieldInstance.changeAggregatedTiles(0, 0, aggArea);
  fieldInstance.refreshColumns(aggArea);
}

export default onClickStreetlight;
