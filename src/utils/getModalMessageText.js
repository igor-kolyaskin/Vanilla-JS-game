import messages from "../constants/modalMessages";

const getModalMessageText = (textType) => {
  return messages[textType] || "text not found";
};

export default getModalMessageText;
