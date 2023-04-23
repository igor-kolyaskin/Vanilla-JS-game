import state from "../../store/state";
import { Div, Section } from "../../elements";

class Score {
  constructor() {
    this.movesDilplay = null;
    this.scoresNumber = null;
  }

  render() {
    const configMovesDilplay = {
      tag: "div",
      attributes: { id: "moves-display" },
      innerText: state.fieldConfig.movesToWin,
    };
    this.movesDilplay = Div(configMovesDilplay);

    const configScoresTitle = {
      tag: "div",
      attributes: { id: "scores-title" },
      innerText: "очки:",
    };
    const scoresTitle = Div(configScoresTitle);

    const configScoresNumber = {
      tag: "div",
      attributes: { id: "scores-number" },
      innerText: "0",
    };
    this.scoresNumber = Div(configScoresNumber);

    const configScoresDisplay = {
      tag: "div",
      attributes: { id: "scores-display" },
      children: [scoresTitle, this.scoresNumber],
    };
    const scoresDisplay = Div(configScoresDisplay);

    const configScore = {
      tag: "section",
      attributes: { id: "score" },
      children: [this.movesDilplay, scoresDisplay],
    };
    const score = Section(configScore);

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
