class Streetlight {
  constructor() {
    this.light = null;
    this.text = null;
  }

  // creates DOM-element
  render() {
    const streetlight = document.createElement("section");
    streetlight.setAttribute("id", "streetlight");

    const light = document.createElement("div");
    light.setAttribute("id", "streetlight-light");
    light.classList.add("streetlight-green");
    this.light = light;

    const lightContainer = document.createElement("div");
    lightContainer.setAttribute("id", "streetlight-lt-cont");
    lightContainer.append(light);

    const text = document.createElement("div");
    text.setAttribute("id", "streetlight-text");
    text.innerText = "Hello";
    this.text = text;

    streetlight.append(text, lightContainer);

    return streetlight;
  }

  green(turnNumber = "?") {
    this.light.classList.remove("streetlight-yellow");
    this.light.classList.remove("streetlight-red");
    this.light.classList.add("streetlight-green");
    this.text.innerText = `The number of available moves is ${turnNumber}`;
  }

  red() {
    this.light.classList.remove("streetlight-yellow");
    this.light.classList.remove("streetlight-green");
    this.light.classList.add("streetlight-red");
    this.text.innerText = "No moves. Click the red circle to change field";
  }

  yellow() {
    this.light.classList.remove("streetlight-red");
    this.light.classList.remove("streetlight-green");
    this.light.classList.add("streetlight-yellow");
    this.text.innerText = "Please wait";
  }
}

export default new Streetlight();
