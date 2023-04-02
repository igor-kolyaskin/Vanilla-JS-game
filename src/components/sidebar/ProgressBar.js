class ProgressBar {
  constructor() {
    this.bar = null;
    this.text = null;
  }

  // creates DOM-element
  render() {
    const progressBar = document.createElement("section");
    progressBar.setAttribute("id", "progressbar");

    const progressBarMask = document.createElement("div");
    progressBarMask.setAttribute("id", "progressbar-mask");

    const progressBarGreen = document.createElement("div");
    progressBarGreen.setAttribute("id", "progressbar-green");

    progressBarMask.append(progressBarGreen);

    progressBar.append(progressBarMask);

    return progressBar;
  }
}

export default new ProgressBar();
