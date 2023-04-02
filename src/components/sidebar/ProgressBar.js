class ProgressBar {
  constructor() {
    this.bar = null;
    this.text = null;
  }

  // creates DOM-element
  render() {
    const progressBar = document.createElement("section");
    progressBar.setAttribute("id", "progressbar");

    return progressBar;
  }
}

export default new ProgressBar();
