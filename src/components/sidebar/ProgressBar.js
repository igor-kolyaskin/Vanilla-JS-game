/* eslint-disable no-undef */
import state from "../../store/state";

class ProgressBar {
  constructor() {
    this.barGreen = null;
    this.scoreMax = null;
  }

  render() {
    const progressBar = document.createElement("section");
    progressBar.setAttribute("id", "progressbar");

    const progressBarMask = document.createElement("div");
    progressBarMask.setAttribute("id", "progressbar-mask");

    const scoreMax = document.createElement("div");
    scoreMax.setAttribute("id", "progressbar-score-max");
    scoreMax.innerText = state.fieldConfig.scoreToWin;
    this.scoreMax = scoreMax;

    const scoreMin = document.createElement("div");
    scoreMin.setAttribute("id", "progressbar-score-min");
    scoreMin.innerText = "0";

    const progressBarGreen = document.createElement("div");
    progressBarGreen.setAttribute("id", "progressbar-green");
    this.barGreen = progressBarGreen;

    progressBarMask.append(progressBarGreen);

    progressBar.append(scoreMax, progressBarMask, scoreMin);

    return progressBar;
  }

  updateGreenBarPosition() {
    const { score, scoreToWin } = state.fieldConfig;
    this.barGreen.style.top = `${
      10.75
      // eslint-disable-next-line no-nested-ternary
      * (1 - (score <= 0 ? 0 : score > scoreToWin ? 1 : score / scoreToWin))
    }rem`;
  }

  updateScoreMaxValue() {
    this.scoreMax.innerText = state.fieldConfig.scoreToWin;
  }
}

export default new ProgressBar();
