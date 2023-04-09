const getRandomTileType = (numColors) => {
  // return Math.ceil(Math.random() * numColors);
  const rnd = Math.random() * 100;
  let result;
  if (rnd >= 95) {
    result = 11;
  } else {
    result = Math.ceil(rnd / (95 / numColors));
  }
  return result;
};

export default getRandomTileType;
