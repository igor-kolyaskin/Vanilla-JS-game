import game from "../bll/Game";
import state from "../state/state";

const onClickNewGame = () => {
  state.updateGame({ key: "status", value: "play" });

  game.resetToStart();
  game.refreshField();
};

export default onClickNewGame;
