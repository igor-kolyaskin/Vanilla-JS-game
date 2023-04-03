import state from "../../state/state";
class ProgressBar {
  constructor() {
    this.barGreen = null;
  }

  render() {
    const progressBar = document.createElement("section");
    progressBar.setAttribute("id", "progressbar");

    const progressBarMask = document.createElement("div");
    progressBarMask.setAttribute("id", "progressbar-mask");

    const progressBarGreen = document.createElement("div");
    progressBarGreen.setAttribute("id", "progressbar-green");
    this.barGreen = progressBarGreen;

    progressBarMask.append(progressBarGreen);

    progressBar.append(progressBarMask);

    return progressBar;
  }

  updateProgressBar() {
    const { score, scoreToWin } = state.game;
    this.barGreen.style.top = `${
      10.75 *
      (1 - (score <= 0 ? 0 : score > scoreToWin ? 1 : score / scoreToWin))
    }rem`;
    console.log(score, scoreToWin);
  }
}

export default new ProgressBar();
