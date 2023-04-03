import fieldInstance from "../components/field/Field";
import streetlightInstance from "../components/header/Streetlight";
import state from "../state/state";
import score from "../components/sidebar/Score";

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
}

export default new Game();
