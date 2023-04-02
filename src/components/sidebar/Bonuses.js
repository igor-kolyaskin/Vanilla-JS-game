import Bonus from "./Bonus";

const Bonuses = () => {
  const bonuses = document.createElement("section");
  bonuses.setAttribute("id", "bonuses");

  const bonusOne = Bonus(1);
  const bonusTwo = Bonus(2);

  bonuses.append(bonusOne, bonusTwo);

  return bonuses;
};

export default Bonuses;
