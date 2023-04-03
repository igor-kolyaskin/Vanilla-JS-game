import fieldInstance from "../components/field/Field";
import streetlightInstance from "../components/header/Streetlight";
import progressBar from "../components/sidebar/ProgressBar";
import state from "../state/state";
import score from "../components/sidebar/Score";
import scoreTable from "../constants/scoreTable";

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
    score.updateMovesIndication();
  }

  incrementScore(scr) {
    const currentScore = state.game.score;
    const scoreIncrement = scoreTable[scr]
      ? scoreTable[scr]
      : scoreTable["max"];
    state.updateGame({ key: "score", value: currentScore + scoreIncrement });
    score.updateScoreIndication();
    progressBar.updateProgressBar();
  }
}

export default new Game();
