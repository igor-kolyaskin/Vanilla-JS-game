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
    movesDilplay.innerText = "37";
    this.movesDilplay = movesDilplay;

    const scoresDisplay = document.createElement("div");
    scoresDisplay.setAttribute("id", "scores-display");

    const scoresTitle = document.createElement("div");
    scoresTitle.setAttribute("id", "scores-title");
    scoresTitle.innerText = "очки:";

    const scoresNumber = document.createElement("div");
    scoresNumber.setAttribute("id", "scores-number");
    scoresNumber.innerText = "221";
    this.scoresNumber = scoresNumber;

    scoresDisplay.append(scoresTitle, scoresNumber);

    score.append(movesDilplay, scoresDisplay);

    return score;
  }
}

export default new Score();
