const state = {
  _fieldConfig: {
    numX: 5,
    numY: 6,
    numColors: 4,
    tileSize: 3,
    minAggregationSize: 2,
  },

  get fieldConfig() {
    return this._fieldConfig;
  },

  set fieldConfig(config) {
    this._fieldConfig = { ...config };
  },

  _fieldConfigTemp: {
    numX: 5,
    numY: 6,
    numColors: 4,
    tileSize: 3,
    minAggregationSize: 2,
  },

  get fieldConfigTemp() {
    return this._fieldConfigTemp;
  },

  set fieldConfigTemp(config) {
    this._fieldConfigTemp = { ...config };
  },

  _game: {
    fieldLock: false,
    score: 0,
    moves: 0,
    scoreToWin: 30,
    movesToWin: 6,
    allowedFieldRefresh: 3,
    status: "start",
  },

  get game() {
    return this._game;
  },
  set game(config) {
    this._game = { ...config };
  },
  get fieldLock() {
    return this._game.fieldLock;
  },
  updateGame(payload) {
    const { key, value } = payload;
    this._game[key] = value;
  },
  lockField() {
    this._game = { ...this._game, fieldLock: true };
  },
  unlockField() {
    this._game = { ...this._game, fieldLock: false };
  },

  _gameTemp: {
    fieldLock: false,
    score: 0,
    moves: 0,
    scoreToWin: 30,
    movesToWin: 6,
    allowedFieldRefresh: 3,
    status: "start",
  },

  get gameTemp() {
    return this._gameTape;
  },
  set gameTemp(config) {
    this._gameTemp = { ...config };
  },
};
export default state;
