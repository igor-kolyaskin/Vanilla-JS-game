import state from "../../store/state";
import { Div, Section } from "../../elements";

class ProgressBar {
  constructor() {
    this.barGreen = null;
    this.scoreMax = null;
  }

  render() {
    const configScoreMax = {
      tag: "div",
      attributes: {id: "progressbar-score-max"},
      innerText: state.fieldConfig.scoreToWin,
    };
    this.scoreMax = Div(configScoreMax);

    const configScoreMin = {
      tag: "div",
      attributes: {id: "progressbar-score-min"},
      innerText: "0",
    };
    const scoreMin = Div(configScoreMin);

    const configProgressBarGreen = {
      tag: "div",
      attributes: {id: "progressbar-green"},
    };
    const progressBarGreen = Div(configProgressBarGreen);

    this.barGreen = progressBarGreen;

    const configProgressBarMask = {
      tag: "div",
      attributes: {id: "progressbar-mask"},
      children: [progressBarGreen],
    };
    const progressBarMask = Div(configProgressBarMask);

    const configProgressBar = {
      tag: "section",
      attributes: {id: "progressbar"},
      children: [this.scoreMax, progressBarMask, scoreMin],
    };
    const progressBar = Section(configProgressBar);

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
