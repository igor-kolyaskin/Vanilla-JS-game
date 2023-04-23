import Element from "../../elements/Element";
import Bonus from "./Bonus";
import bonusConfigArray from "../../constants/constantsBonuses";

const Bonuses = () => {
  const configBonuses = {
    tag: "section",
    attributes: [["id", "bonuses"]],
    children: [...bonusConfigArray.map((bonusConfig) => Bonus(bonusConfig))],
  };
  return Element(configBonuses);
};

export default Bonuses;
