/* eslint-disable class-methods-use-this */
import fieldInstance from "../components/field/Field";
import streetlightInstance from "../components/header/Streetlight";
import messageInstance from "../components/Message";
import progressBar from "../components/sidebar/ProgressBar";
import scoreInstance from "../components/sidebar/Score";
import state from "../store/state";
import {
  scoreTable,
  constRefreshField,
  constResetToStart,
  statusWinProperties,
  statusLosingProperties,
} from "../constants/constantsGames";

class Game {
  startNewGame() {
    this.refreshField();
    this.resetToStart();
  }

  refreshField() {
    const { refreshFieldMessageText, stateUpdates, firstTileCoordinates } = constRefreshField;
    streetlightInstance.showMessage(refreshFieldMessageText);
    state.updateState(stateUpdates);

    const { numX, numY } = state.fieldConfig;

    const aggArea = [];
    for (let x = 0; x < numX; x += 1) {
      for (let y = 0; y < numY; y += 1) {
        aggArea.push({ x, y });
      }
    }
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
    state.updateState(constResetToStart);
    scoreInstance.updateScoreIndication();
    scoreInstance.updateMovesIndication();
    progressBar.updateGreenBarPosition();
  }

  setGameStatus() {
    const {
      score, moves, scoreToWin, movesToWin,
    } = state.fieldConfig;
    if (score >= scoreToWin) this._applyStatusProperties(statusWinProperties);
    else if (moves >= movesToWin) this._applyStatusProperties(statusLosingProperties);
  }

  _applyStatusProperties({ messageText, stateUpdates, streetLightMessage }) {
    streetlightInstance.showMessage(streetLightMessage);
    state.updateState(stateUpdates);
    messageInstance.open(messageText);
  }
}

export default new Game();
