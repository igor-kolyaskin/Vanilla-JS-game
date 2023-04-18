const deepCloneTiles = (tiles) => {
  const clonedTiles = tiles.map((column) => column.map((tile) => ({ ...tile })));
  return clonedTiles;
};

export default deepCloneTiles;
