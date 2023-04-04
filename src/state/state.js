const state = {
  _fieldConfig: {
    numX: 5,
    numY: 6,
    numColors: 4,
    tileSize: 3,
    minAggregationSize: 2,
    fieldLock: false,
    score: 0,
    moves: 0,
    scoreToWin: 30,
    movesToWin: 6,
    allowedFieldRefresh: 3,
    status: "start",
  },

  updateState(payload) {
    const { key, value } = payload;
    this._fieldConfig[key] = value;
  },

  get fieldConfig() {
    return this._fieldConfig;
  },

  set fieldConfig(config) {
    this._fieldConfig = { ...config };
  },

  _fieldConfigTemp: { empty: null },

  get fieldConfigTemp() {
    return this._fieldConfigTemp;
  },

  set fieldConfigTemp(config) {
    this._fieldConfigTemp = { ...config };
  },
};
export default state;
