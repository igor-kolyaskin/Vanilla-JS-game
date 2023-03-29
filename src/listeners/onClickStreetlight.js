import gameInstance from "../bll/Game";

function onClickStreetlight(event) {
  if (event.target.id !== "streetlight-light") return;
  gameInstance.refreshField();
}

export default onClickStreetlight;
