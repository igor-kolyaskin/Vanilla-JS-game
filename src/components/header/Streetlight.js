import getStreetlightMessage from "../../utils/getStreetlightMessage";
import Spinner from "../common/Spinner";
import { Div, Section } from "../../elements";

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
      attributes: {id: "refresh-button"},
      classes: ["refresh-button"],
    };
    this.refreshButton = Div(configRefreshButton);

    const configTextMessage = {
      tag: "div",
      attributes: {id: "streetlight-text-message"},
      classes: ["street-text-parts"],
      innerText: "Hallo",
    };
    this.textMessage = Div(configTextMessage);

    const configTextNumber = {
      tag: "div",
      attributes: {id: "streetlight-text-number"},
      classes: ["street-text-parts"],
      innerText: "?",
    };
    this.textNumber = Div(configTextNumber);

    this.textSpinner = Spinner();

    const configTextWord = {
      tag: "div",
      attributes: {id: "streetlight-text-word"},
      classes: ["street-text-parts"],
      innerText: " кликов",
    };
    this.textWord = Div(configTextWord);

    const configText = {
      tag: "div",
      attributes: {id: "streetlight-text"},
      children: [
        this.textMessage,
        this.textNumber,
        this.textSpinner,
        this.textWord,
      ],
    };
    this.text = Div(configText);

    const configStreetlight = {
      tag: "section",
      attributes: {id: "streetlight"},
      classes: ["slider-min-max"],
      children: [this.text, this.refreshButton],
    };
    const streetlight = Section(configStreetlight);

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
