const getRandomTileType = (numColors) => {
  return Math.ceil(Math.random() * numColors);
};

export default getRandomTileType;
