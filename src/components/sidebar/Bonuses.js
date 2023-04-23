import { Section } from "../../elements";
import Bonus from "./Bonus";
import bonusConfigArray from "../../constants/constantsBonuses";

const Bonuses = () => {
  const configBonuses = {
    attributes: {id: "bonuses"},
    children: [...bonusConfigArray.map((bonusConfig) => Bonus(bonusConfig))],
  };
  return Section(configBonuses);
};

export default Bonuses;
