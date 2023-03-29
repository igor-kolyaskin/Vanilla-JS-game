const state = {
  _fieldConfig: {
    numX: 4,
    numY: 6,
    numColors: 8,
    tileSize: 4,
  },

  get fieldConfig() {
    return this._fieldConfig;
  },

  set fieldConfig(config) {
    this._fieldConfig = { ...config };
  },

  _fieldConfigTemp: {
    numX: 4,
    numY: 6,
    numColors: 8,
    tileSize: 4,
  },

  get fieldConfigTemp() {
    return this._fieldConfigTemp;
  },

  set fieldConfigTemp(config) {
    this._fieldConfigTemp = { ...config };
  },

  gameConfig: {
    minAggregationSize: 2,
  },

  game: {
    _fieldLock: false,
  },

  lockField() {
    this.game._fieldLock = true;
  },
  unlockField() {
    this.game._fieldLock = false;
  },

  get fieldLock() {
    return this.game._fieldLock;
  },
};
export default state;
