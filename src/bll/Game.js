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
    const refreshFieldMessageText = "wait";
    streetlightInstance.showMessage(refreshFieldMessageText);
    const stateUpdates = [{ fieldLock: true }];
    state.updateState(stateUpdates);

    const { numX, numY } = state.fieldConfig;

    const aggArea = [];
    for (let x = 0; x < numX; x += 1) {
      for (let y = 0; y < numY; y += 1) {
        aggArea.push({ x, y });
      }
    }
    const firstTileCoordinates = [0, 0];
    fieldInstance.changeAggregatedTiles(...firstTileCoordinates, aggArea);
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
    const stateUpdates = [{ score: currentScore + scoreIncrement }];
    state.updateState(stateUpdates);
    scoreInstance.updateScoreIndication();
    progressBar.updateGreenBarPosition();
  }

  resetToStart() {
    const stateUpdates = [{ moves: 0 }, { score: 0 }, { fieldLock: false }];
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
      const statusProperties = {
        messageText: "win",
        stateUpdates: [{ status: "win" }, { fieldLock: true }],
        streetLightMessage: "pressButtonGo",
      };
      this._applyStatusProperties(statusProperties);
    } else if (moves >= movesToWin) {
      const statusProperties = {
        messageText: "losing",
        stateUpdates: [{ status: "losing" }, { fieldLock: true }],
        streetLightMessage: "pressButtonGo",
      };
      this._applyStatusProperties(statusProperties);
    }
  }

  _applyStatusProperties({ messageText, stateUpdates, streetLightMessage }) {
    streetlightInstance.showMessage(streetLightMessage);
    state.updateState(stateUpdates);
    messageInstance.open(messageText);
  }
}

export default new Game();
