const elements = {
  _fieldContainer: null,
  get fieldContainer() {
    return this._fieldContainer;
  },
  set fieldContainer(fc) {
    this._fieldContainer = fc;
  },

  _domColumns: [],
  get domColumns() {
    return this._domColumns;
  },
  set domColumns(arr) {
    this._domColumns = arr;
  },
};
