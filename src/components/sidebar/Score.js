/* eslint-disable no-undef */
import state from "../../store/state";

class Score {
  constructor() {
    this.movesDilplay = null;
    this.scoresNumber = null;
  }

  render() {
    const score = document.createElement("section");
    score.setAttribute("id", "score");

    const movesDilplay = document.createElement("div");
    movesDilplay.setAttribute("id", "moves-display");
    movesDilplay.innerText = state.fieldConfig.movesToWin;
    this.movesDilplay = movesDilplay;

    const scoresDisplay = document.createElement("div");
    scoresDisplay.setAttribute("id", "scores-display");

    const scoresTitle = document.createElement("div");
    scoresTitle.setAttribute("id", "scores-title");
    scoresTitle.innerText = "очки:";

    const scoresNumber = document.createElement("div");
    scoresNumber.setAttribute("id", "scores-number");
    scoresNumber.innerText = "0";
    this.scoresNumber = scoresNumber;

    scoresDisplay.append(scoresTitle, scoresNumber);

    score.append(movesDilplay, scoresDisplay);

    return score;
  }

  updateMovesIndication() {
    this.movesDilplay.innerText = state.fieldConfig.movesToWin - state.fieldConfig.moves;
  }

  updateScoreIndication() {
    this.scoresNumber.innerText = state.fieldConfig.score;
  }
}

export default new Score();
