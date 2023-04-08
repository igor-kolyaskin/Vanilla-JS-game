const getSquareBangArea = (x, y, numX, numY) => {
  let agg = [];
  for (let i = -1; i < 2; i++) {
    if (+x + i < 0 || +x + i > numX - 1) continue;
    for (let j = -1; j < 2; j++) {
      if (+y + j < 0 || +y + j > numY - 1) continue;
      agg.push({ x: +x + i, y: +y + j });
    }
  }

  return agg;
};

export default getSquareBangArea;
