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
  },

  get fieldLock() {
    return this._game.fieldLock;
  },

  lockField() {
    this._game.fieldLock = true;
  },
  unlockField() {
    this._game.fieldLock = false;
  },
};
export default state;
