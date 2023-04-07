import getRightWordClick from "../../utils/getRightWordClick";
import getStreetlightMessage from "../../utils/getStreetlightMessage";
import Spinner from "../common/Spinner";
class Streetlight {
  constructor() {
    this.refreshButton = null;
    this.text = null;
    this.textMessage = null;
    this.textNumber = null;
    this.textWord = null;
  }

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

  showMessage(text, turnNumber) {
    const message = getStreetlightMessage(text, turnNumber);
    const {
      isClassRefresh,
      textRefresh,
      isClassLong,
      textMessage,
      textNumber,
      styleNumber,
      textWord,
      styleWord,
      styleSpinner,
    } = message;

    if (isClassRefresh) {
      this.refreshButton.classList.add("refresh-button-active");
    } else {
      this.refreshButton.classList.remove("refresh-button-active");
    }
    this.refreshButton.innerText = textRefresh;

    if (isClassLong) {
      this.textMessage.classList.add("street-message-long");
    } else {
      this.textMessage.classList.remove("street-message-long");
    }
    this.textMessage.innerText = textMessage;

    this.textNumber.innerText = textNumber;
    this.textNumber.style.display = styleNumber;

    this.textWord.innerText = textWord;
    this.textWord.style.display = styleWord;

    this.textSpinner.style.display = styleSpinner;
  }
}

export default new Streetlight();
