import Spinner from "../common/Spinner";
class Streetlight {
  constructor() {
    this.refreshButton = null;
    this.text = null;
    this.textMessage = null;
    this.textNumber = null;
    this.textWord = null;
  }

  // creates DOM-element
  render() {
    const streetlight = document.createElement("section");
    streetlight.setAttribute("id", "streetlight");

    const refreshButton = document.createElement("div");
    refreshButton.setAttribute("id", "refresh-button");
    refreshButton.classList.add("refresh-button");
    // refreshButton.innerText = "Обновить поле";
    this.refreshButton = refreshButton;

    const text = document.createElement("div");
    text.setAttribute("id", "streetlight-text");
    this.text = text;

    const textMessage = document.createElement("div");
    textMessage.setAttribute("id", "streetlight-text-message");
    textMessage.classList.add("street-text-parts");
    textMessage.innerText = "Hallo";
    this.textMessage = textMessage;

    const textNumber = document.createElement("div");
    textNumber.setAttribute("id", "streetlight-text-number");
    textNumber.classList.add("street-text-parts");
    textNumber.innerText = "?";
    this.textNumber = textNumber;

    const textSpinner = Spinner(["street-text-parts", "street-text-spinner"]);
    this.textSpinner = textSpinner;

    const textWord = document.createElement("div");
    textWord.setAttribute("id", "streetlight-text-word");
    textWord.classList.add("street-text-parts");
    textWord.innerText = " кликов";
    this.textWord = textWord;

    text.append(textMessage, textNumber, textSpinner, textWord);
    streetlight.append(text, refreshButton);

    return streetlight;
  }

  green(turnNumber = "?") {
    this.refreshButton.classList.remove("refresh-button-active");
    this.textMessage.classList.remove("street-message-long");
    this.textMessage.innerText = `На этом поле ещё`;
    this.textNumber.innerText = `${turnNumber}`;
    this.textWord.innerText = `кликов`;
    this.textNumber.style.display = "inherit";
    this.textSpinner.style.display = "none";
    this.textWord.style.display = "inherit";
  }

  red() {
    this.refreshButton.classList.add("refresh-button-active");
    this.textMessage.classList.add("street-message-long");
    this.textMessage.innerText = "На этом поле не осталось кликов";
    this.textNumber.style.display = "none";
    this.textWord.style.display = "none";
    this.textNumber.style.display = "none";
    this.textSpinner.style.display = "none";
  }

  yellow() {
    this.refreshButton.classList.remove("refresh-button-active");
    this.textMessage.classList.remove("street-message-long");
    this.textMessage.innerText = `На этом поле ещё`;
    this.textNumber.innerText = `wait`;
    this.textWord.innerText = `кликов`;
    this.textNumber.style.display = "none";
    this.textWord.style.display = "inherit";
    this.textSpinner.style.display = "inherit";
  }
}

export default new Streetlight();
