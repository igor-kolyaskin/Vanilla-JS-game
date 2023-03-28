const state = {
  fieldConfig: {
    numX: 4,
    numY: 6,
    numColors: 8,
    tileSize: 4,
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
