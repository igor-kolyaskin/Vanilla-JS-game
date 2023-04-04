import game from "../bll/Game";
import state from "../store/state";

const onClickNewGame = () => {
  state.updateState({ key: "status", value: "play" });

  game.resetToStart();
  game.refreshField();
};

export default onClickNewGame;
