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

    message.append(messageButton, messageText);
    this.messageElement = message;

    return message;
  }

  open() {
    this.messageElement.style.visibility = "visible";
  }

  close() {
    this.messageElement.style.visibility = "hidden";
  }
}

export default new Message();
