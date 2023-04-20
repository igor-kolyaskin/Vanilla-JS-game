const scoreTable = {
  2: 1,
  3: 3,
  4: 6,
  5: 10,
  6: 15,
  max: 20,
};

const constRefreshField = {
  refreshFieldMessageText: "wait",
  stateUpdates: [{ fieldLock: true }],
  firstTileCoordinates: [0, 0],
};

const constResetToStart = [{ moves: 0 }, { score: 0 }, { fieldLock: false }];

const statusWinProperties = {
  messageText: "win",
  stateUpdates: [{ status: "win" }, { fieldLock: true }],
  streetLightMessage: "pressButtonGo",
};
const statusLosingProperties = {
  messageText: "losing",
  stateUpdates: [{ status: "losing" }, { fieldLock: true }],
  streetLightMessage: "pressButtonGo",
};

export {
  scoreTable, constRefreshField, constResetToStart, statusWinProperties, statusLosingProperties,
};
