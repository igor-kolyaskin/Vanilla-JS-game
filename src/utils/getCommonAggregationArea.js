import deepCloneTiles from "./deepCloneTiles";

const getCommonAggregationArea = (coordX, coordY, numX, numY, tiles_, aggType) => {
  const tiles = deepCloneTiles(tiles_);
  const clickedTile = tiles[coordX][coordY];
  const { type } = clickedTile;

  let agg = [{ x: +coordX, y: +coordY }];
  clickedTile.aggregation = type;
  clickedTile.type = 0;
  let prevLength = 1;

  const _getNeighbourTiles = (x, y, targetType) => {
    const aggr = [];
    const __getNeighbourTile = ([a, b]) => {
      const tile = tiles[a][b];
      let aggContition;
      switch (aggType) {
        case "twin": aggContition = (tile.type === 1 || tile.type === 3) && !tile.aggregation;
          break;
        case "standard": aggContition = tile.type === targetType && !tile.aggregation;
          break;
        default: aggContition = tile.type === targetType && !tile.aggregation;
      }
      if (aggContition) {
        tile.aggregation = targetType;
        tile.type = 0;
        aggr.push({ x: a, y: b });
      }
    };

    // neighbor tile top
    if (y > 0) __getNeighbourTile([x, y - 1]);
    // neighbor tile right
    if (x < numX - 1) __getNeighbourTile([x + 1, y]);
    // neighbor tile bottom
    if (y < numY - 1) __getNeighbourTile([x, y + 1]);
    // neighbor tile left
    if (x > 0) __getNeighbourTile([x - 1, y]);

    return aggr;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    // eslint-disable-next-line no-loop-func
    agg.forEach((tile) => {
      agg = [...agg, ..._getNeighbourTiles(+tile.x, +tile.y, type)];
    });
    if (prevLength === agg.length) break;
    prevLength = agg.length;
  }
  return agg;
};

export default getCommonAggregationArea;
