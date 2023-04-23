import getMessageText from "../utils/getModalMessageText";
import { Button, Paragraph, Section } from "../elements";

class Message {
  constructor() {
    this.messageText = null;
    this.messageElement = null;
  }

  render() {
    const configMessageButton = {
      attributes: { id: "message-button" },
    };

    const configMessageText = {
      attributes: { id: "message-text" },
      innerText: getMessageText("greeting"),
    };
    this.messageText = Paragraph(configMessageText);

    const configMessage = {
      attributes: { id: "message" },
      children: [Button(configMessageButton), this.messageText],
    };
    this.messageElement = Section(configMessage);

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
