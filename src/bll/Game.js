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
    const stateUpdates = [{ key: "fieldLock", value: true }];
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
    const stateUpdates = [{ key: "moves", value: currentMoves + 1 }];
    state.updateState(stateUpdates);
    scoreInstance.updateMovesIndication();
  }

  incrementScore(scr) {
    const currentScore = state.fieldConfig.score;
    const scoreIncrement = scoreTable[scr] ? scoreTable[scr] : scoreTable.max;
    const stateUpdates = [
      { key: "score", value: currentScore + scoreIncrement },
    ];
    state.updateState(stateUpdates);
    scoreInstance.updateScoreIndication();
    progressBar.updateGreenBarPosition();
  }

  resetToStart() {
    const stateUpdates = [
      { key: "moves", value: 0 },
      { key: "score", value: 0 },
      { key: "fieldLock", value: false },
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
        { key: "status", value: "win" },
        { key: "fieldLock", value: true },
      ];
      state.updateState(stateUpdates);
      streetlightInstance.showMessage("pressButtonGo");
    } else if (moves >= movesToWin) {
      messageInstance.open("losing");
      const stateUpdates = [
        { key: "status", value: "losing" },
        { key: "fieldLock", value: true },
      ];
      state.updateState(stateUpdates);
      streetlightInstance.showMessage("pressButtonGo");
    }
  }
}

export default new Game();
