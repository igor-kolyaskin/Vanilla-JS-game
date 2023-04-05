import state from "../../store/state";
import Bonus from "./Bonus";

const Bonuses = () => {
  const bonuses = document.createElement("section");
  bonuses.setAttribute("id", "bonuses");

  const confingBonus1 = {
    id: 1,
    iconUrl: 'url("../assets/png/color-bang-icon.png")',
    tooltipText: "color-bang",
    amount: 3,
  };

  const confingBonus2 = {
    id: 2,
    iconUrl: 'url("../assets/png/colulmn-bang-icon.png")',
    tooltipText: "column-bang",
    amount: 5,
  };
  const bonusOne = Bonus(confingBonus1);
  const bonusTwo = Bonus(confingBonus2);
  bonusOne.addEventListener("click", () => console.log(state._fieldConfig));

  bonuses.append(bonusOne, bonusTwo);

  return bonuses;
};

export default Bonuses;
