class ProgressBar {
  constructor() {
    this.bar = null;
    this.text = null;
  }

  // creates DOM-element
  render() {
    const progressBar = document.createElement("section");
    progressBar.setAttribute("id", "progressbar");

    const text = document.createElement("div");
    text.setAttribute("id", "progressbar-text");
    text.innerText = "Progress";
    this.text = text;

    const bar = document.createElement("div");
    bar.setAttribute("id", "progressbar-bar");
    this.bar = bar;

    const barContainer = document.createElement("div");
    barContainer.setAttribute("id", "progressbar-bar-cont");
    barContainer.append(bar);

    progressBar.append(text, barContainer);

    return progressBar;
  }
}

export default new ProgressBar();
