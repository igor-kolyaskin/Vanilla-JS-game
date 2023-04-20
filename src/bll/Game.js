/* eslint-disable class-methods-use-this */
import fieldInstance from "../components/field/Field";
import streetlightInstance from "../components/header/Streetlight";
import messageInstance from "../components/Message";
import progressBar from "../components/sidebar/ProgressBar";
import scoreInstance from "../components/sidebar/Score";
import state from "../store/state";
import scoreTable from "../constants/scoreTable";

class Game {
  startNewGame() {
    this.refreshField();
    this.resetToStart();
  }

  refreshField() {
    streetlightInstance.showMessage("wait");
    const stateUpdates = [{ fieldLock: true }];
    state.updateState(stateUpdates);

    const { numX, numY } = state.fieldConfig;

    const aggArea = [];
    for (let x = 0; x < numX; x += 1) {
      for (let y = 0; y < numY; y += 1) {
        aggArea.push({ x, y });
      }
    }

    fieldInstance.changeAggregatedTiles(0, 0, aggArea);
    fieldInstance.refreshColumns(aggArea);
  }

  incrementMoves() {
    const currentMoves = state.fieldConfig.moves;
    const stateUpdates = [{ moves: currentMoves + 1 }];
    state.updateState(stateUpdates);
    scoreInstance.updateMovesIndication();
  }

  incrementScore(scr) {
    const currentScore = state.fieldConfig.score;
    const scoreIncrement = scoreTable[scr] ? scoreTable[scr] : scoreTable.max;
    const stateUpdates = [
      { score: currentScore + scoreIncrement },
    ];
    state.updateState(stateUpdates);
    scoreInstance.updateScoreIndication();
    progressBar.updateGreenBarPosition();
  }

  resetToStart() {
    const stateUpdates = [
      { moves: 0 },
      { score: 0 },
      { fieldLock: false },
    ];
    state.updateState(stateUpdates);
    scoreInstance.updateScoreIndication();
    scoreInstance.updateMovesIndication();
    progressBar.updateGreenBarPosition();
  }

  setGameStatus() {
    const {
      score, moves, scoreToWin, movesToWin,
    } = state.fieldConfig;
    if (score >= scoreToWin) {
      messageInstance.open("win");
      const stateUpdates = [
        { status: "win" },
        { fieldLock: true },
      ];
      state.updateState(stateUpdates);
      streetlightInstance.showMessage("pressButtonGo");
    } else if (moves >= movesToWin) {
      messageInstance.open("losing");
      const stateUpdates = [
        { status: "losing" },
        { fieldLock: true },
      ];
      state.updateState(stateUpdates);
      streetlightInstance.showMessage("pressButtonGo");
    }
  }
}

export default new Game();
