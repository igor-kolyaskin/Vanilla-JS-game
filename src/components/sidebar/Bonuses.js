import state from "../../state/state";
import Bonus from "./Bonus";

const Bonuses = () => {
  const bonuses = document.createElement("section");
  bonuses.setAttribute("id", "bonuses");

  const bonusOne = Bonus(1);
  const bonusTwo = Bonus(2);
  bonusOne.addEventListener("click", () => console.log(state._game));

  bonuses.append(bonusOne, bonusTwo);

  return bonuses;
};

export default Bonuses;
