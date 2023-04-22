import getMessageText from "../utils/getModalMessageText";
import Element from "./common/Element";

class Message {
  constructor() {
    this.messageText = null;
    this.messageElement = null;
  }

  render() {
    const configMessageButton = {
      tag: "button",
      attributes: [["id", "message-button"]],
    };
    const messageButton = Element(configMessageButton);

    const configMessageText = {
      tag: "p",
      attributes: [["id", "message-text"]],
      innerText: getMessageText("greeting"),
    };
    this.messageText = Element(configMessageText);

    const configMessage = {
      tag: "section",
      attributes: [["id", "message"]],
      children: [messageButton, this.messageText],
    };
    this.messageElement = Element(configMessage);

    return this.messageElement;
  }

  open(textType) {
    this.messageElement.style.visibility = "visible";
    this.messageText.innerText = getMessageText(textType);
  }

  close() {
    this.messageElement.style.visibility = "hidden";
  }
}

export default new Message();
