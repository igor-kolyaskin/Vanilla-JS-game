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
}

export default new ProgressBar();
