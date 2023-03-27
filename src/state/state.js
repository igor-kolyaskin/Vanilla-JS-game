const state = {
  fieldConfig: {
    numX: 4,
    numY: 6,
    numColors: 5,
    tileSize: 4,
  },
  gameConfig: {
    minAggregationSize: 2,
  },
  _fieldLock: false,
  get fieldLock() {
    return this._fieldLock;
  },
  set fieldLock(isLocked) {
    this._fieldLock = isLocked;
  },
};
export default state;
