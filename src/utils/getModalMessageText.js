import messages from "../constants/modalMessages";

const getModalMessageText = (textType) => messages[textType] || "text not found";

export default getModalMessageText;
