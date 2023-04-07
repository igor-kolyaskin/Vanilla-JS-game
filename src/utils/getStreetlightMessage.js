import getRightWordClick from "./getRightWordClick";

getRightWordClick;

const getStreetlightMessage = (text, turnNumber = 0) => {
  const messages = {
    remainingTiles: {
      isClassRefresh: false,
      textRefresh: "",
      isClassLong: false,
      textMessage: "На этом поле ещё",
      textNumber: `${turnNumber}`,
      styleNumber: "inherit",
      textWord: getRightWordClick(turnNumber),
      styleWord: "inherit",
      styleSpinner: "none",
    },

    noClicableTiles: {
      isClassRefresh: true,
      textRefresh: "Обновите поле",
      isClassLong: true,
      textMessage: "На этом поле не осталось кликов",
      textNumber: "",
      styleNumber: "none",
      textWord: "",
      styleWord: "none",
      styleSpinner: "none",
    },

    wait: {
      isClassRefresh: false,
      textRefresh: "",
      isClassLong: false,
      textMessage: "На этом поле ещё",
      textNumber: "wait",
      styleNumber: "none",
      textWord: "кликов",
      styleWord: "inherit",
      styleSpinner: "inherit",
    },

    pressButtonGo: {
      isClassRefresh: false,
      textRefresh: "",
      isClassLong: true,
      textMessage: "Для продолжения нажмите Go!",
      textNumber: "",
      styleNumber: "none",
      textWord: "",
      styleWord: "none",
      styleSpinner: "none",
    },

    blockIsTooSmall: {
      isClassRefresh: false,
      textRefresh: "",
      isClassLong: false,
      textMessage: "Маленькие блоки не сгорают",
      textNumber: "",
      styleNumber: "none",
      textWord: "",
      styleWord: "none",
      styleSpinner: "none",
    },
  };

  return messages[text];
};

export default getStreetlightMessage;
