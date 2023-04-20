import game from "../bll/Game";
import state from "../store/state";

const onClickNewGame = () => {
  const stateUpdates = [{ key: "status", value: "play" }];
  state.updateState(stateUpdates);

  game.resetToStart();
  game.refreshField();
};

export default onClickNewGame;
