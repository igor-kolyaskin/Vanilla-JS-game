import getMessageText from "../utils/getMessageText";

class Message {
  constructor() {
    this.messageText = null;
    this.messageElement = null;
  }

  render() {
    const message = document.createElement("section");
    message.setAttribute("id", "message");

    const messageButton = document.createElement("button");
    messageButton.setAttribute("id", "message-button");

    const messageText = document.createElement("p");
    messageText.setAttribute("id", "message-text");
    this.messageText = messageText;
    this.messageText.innerText = getMessageText("greeting");

    message.append(messageButton, messageText);
    this.messageElement = message;

    return message;
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
