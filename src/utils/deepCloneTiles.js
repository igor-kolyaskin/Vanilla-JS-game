const deepCloneTiles = (tiles) => {
  const clonedTiles = tiles.map((column) => {
    return column.map((tile) => {
      return { ...tile };
    });
  });
  return clonedTiles;
};

export default deepCloneTiles;
