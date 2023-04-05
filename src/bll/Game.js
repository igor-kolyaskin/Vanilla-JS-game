import fieldInstance from "../components/field/Field";
import streetlightInstance from "../components/header/Streetlight";
import progressBar from "../components/sidebar/ProgressBar";
import state from "../store/state";
import scoreInstance from "../components/sidebar/Score";
import scoreTable from "../constants/scoreTable";
import messageInstance from "../components/Message";

class Game {
  startNewGame() {
    this.refreshField();
  }

  refreshField() {
    streetlightInstance.yellow();
    state.updateState({ key: "fieldLock", value: true });

    const { numX, numY } = state.fieldConfig;

    const aggArea = [];
    for (let x = 0; x < numX; x++) {
      for (let y = 0; y < numY; y++) {
        aggArea.push({ x: x, y: y });
      }
    }

    fieldInstance.changeAggregatedTiles(0, 0, aggArea);
    fieldInstance.refreshColumns(aggArea);
  }

  incrementMoves() {
    const currentMoves = state.fieldConfig.moves;
    state.updateState({ key: "moves", value: currentMoves + 1 });
    scoreInstance.updateMovesIndication();
  }

  incrementScore(scr) {
    const currentScore = state.fieldConfig.score;
    const scoreIncrement = scoreTable[scr]
      ? scoreTable[scr]
      : scoreTable["max"];
    state.updateState({ key: "score", value: currentScore + scoreIncrement });
    scoreInstance.updateScoreIndication();
    progressBar.updateGreenBarPosition();
  }

  resetToStart() {
    state.updateState({ key: "moves", value: 0 });
    state.updateState({ key: "score", value: 0 });
    state.updateState({ key: "fieldLock", value: false });
    scoreInstance.updateScoreIndication();
    scoreInstance.updateMovesIndication();
    progressBar.updateGreenBarPosition();
  }

  setGameStatus() {
    const { score, moves, scoreToWin, movesToWin } = state.fieldConfig;
    if (score >= scoreToWin) {
      messageInstance.open("win");
      state.updateState({ key: "status", value: "win" });
      state.updateState({ key: "fieldLock", value: true });
    } else if (moves >= movesToWin) {
      messageInstance.open("losing");
      state.updateState({ key: "status", value: "losing" });
      state.updateState({ key: "fieldLock", value: true });
    } else {
      console.log("continue");
    }
  }
}

export default new Game();
