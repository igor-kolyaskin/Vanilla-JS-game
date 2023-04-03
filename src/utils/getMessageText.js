import messages from "../constants/messages";

const getMessageText = (textType) => {
  return messages[textType] || "text not found";
};

export default getMessageText;
