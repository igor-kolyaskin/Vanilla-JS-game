function TileBlast() {
  const tileBlast = document.createElement("div");
  tileBlast.classList.add("tile-blast");

  const blast = document.createElement("div");
  blast.classList.add("blast");

  tileBlast.append(blast);

  return tileBlast;
}
export default TileBlast;
