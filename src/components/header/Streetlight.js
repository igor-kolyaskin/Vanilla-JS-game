import getStreetlightMessage from "../../utils/getStreetlightMessage";
import Spinner from "../common/Spinner";
import Element from "../common/Element";

class Streetlight {
  constructor() {
    this.refreshButton = null;
    this.text = null;
    this.textMessage = null;
    this.textNumber = null;
    this.textWord = null;
  }

  render() {
    const configRefreshButton = {
      tag: "div",
      attributes: [["id", "refresh-button"]],
      classes: ["refresh-button"],
      children: [],
      innerText: null,
    };
    this.refreshButton = Element(configRefreshButton);

    const configTextMessage = {
      tag: "div",
      attributes: [["id", "streetlight-text-message"]],
      classes: ["street-text-parts"],
      children: [],
      innerText: "Hallo",
    };
    this.textMessage = Element(configTextMessage);

    const configTextNumber = {
      tag: "div",
      attributes: [["id", "streetlight-text-number"]],
      classes: ["street-text-parts"],
      children: [],
      innerText: "?",
    };
    this.textNumber = Element(configTextNumber);

    this.textSpinner = Spinner();

    const configTextWord = {
      tag: "div",
      attributes: [["id", "streetlight-text-word"]],
      classes: ["street-text-parts"],
      children: [],
      innerText: " кликов",
    };
    this.textWord = Element(configTextWord);

    const configText = {
      tag: "div",
      attributes: [["id", "streetlight-text"]],
      classes: [],
      children: [
        this.textMessage,
        this.textNumber,
        this.textSpinner,
        this.textWord,
      ],
      innerText: null,
    };
    this.text = Element(configText);

    const configStreetlight = {
      tag: "section",
      attributes: [["id", "streetlight"]],
      classes: ["slider-min-max"],
      children: [this.text, this.refreshButton],
      innerText: null,
    };
    const streetlight = Element(configStreetlight);

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
