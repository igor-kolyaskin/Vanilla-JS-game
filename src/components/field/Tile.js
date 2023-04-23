import { Div } from "../../elements";
import state from "../../store/state";

function Tile(x, y, top, type) {
  const configElement = {
    attributes: { id: `tile-${x}-${y}` },
    classes: ["tile"],
    styles: {
      top: `${state.fieldConfig.tileSize * top}rem`,
      backgroundImage: `url(./assets/png/tile_${type}.png)`,
    },
  };

  return Div(configElement);
}
export default Tile;
