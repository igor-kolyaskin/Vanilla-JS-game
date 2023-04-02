import gameInstance from "../bll/Game";

function onClickStreetlight(event) {
  if (event.target.id !== "refresh-button") return;
  gameInstance.refreshField();
}

export default onClickStreetlight;
