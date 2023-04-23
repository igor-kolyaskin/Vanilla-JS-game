import { Div } from "../../elements";

function TileBlast() {
  const configBlast = { classes: ["blast"] };

  const configTileBlast = {
    classes: ["tile-blast"],
    children: [Div(configBlast)],
  };

  return Div(configTileBlast);
}
export default TileBlast;
