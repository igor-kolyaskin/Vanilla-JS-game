import messages from "../constants/modalMessages";

const getMessageText = (textType) => {
  return messages[textType] || "text not found";
};

export default getMessageText;
