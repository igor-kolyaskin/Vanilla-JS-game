import fieldInstance from "../components/field/Field";
import streetlightInstance from "../components/header/Streetlight";
import progressBar from "../components/sidebar/ProgressBar";
import state from "../state/state";
import scoreInstance from "../components/sidebar/Score";
import scoreTable from "../constants/scoreTable";
import messageInstance from "../components/Message";

class Game {
  startNewGame() {
    this.refreshField();
  }

  refreshField() {
    streetlightInstance.yellow();
    state.lockField();

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
    const currentMoves = state.game.moves;
    state.updateGame({ key: "moves", value: currentMoves + 1 });
    scoreInstance.updateMovesIndication();
  }

  incrementScore(scr) {
    const currentScore = state.game.score;
    const scoreIncrement = scoreTable[scr]
      ? scoreTable[scr]
      : scoreTable["max"];
    state.updateGame({ key: "score", value: currentScore + scoreIncrement });
    scoreInstance.updateScoreIndication();
    progressBar.updateProgressBar();
  }

  resetToStart() {
    state.updateGame({ key: "moves", value: 0 });
    state.updateGame({ key: "score", value: 0 });
    state.unlockField();
    scoreInstance.updateScoreIndication();
    scoreInstance.updateMovesIndication();
    progressBar.updateProgressBar();
  }

  setGameStatus() {
    const { score, moves, scoreToWin, movesToWin } = state.game;
    if (score >= scoreToWin) {
      messageInstance.open("win");
      state.updateGame({ key: "status", value: "win" });
      state.lockField();
    } else if (moves >= movesToWin) {
      messageInstance.open("losing");
      state.updateGame({ key: "status", value: "losing" });
      state.lockField();
    } else {
      console.log("continue");
    }
  }
}

export default new Game();
