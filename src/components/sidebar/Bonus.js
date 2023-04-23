import { Div } from "../../elements";

const Bonus = (config) => {
  const {
    id, iconUrl, tooltipText, amount,
  } = config;

  const configBonusIcon = {
    classes: ["bonus-icon"],
  };
  const bonusIcon = Div(configBonusIcon);
  bonusIcon.style.backgroundImage = iconUrl;

  const configBonusTooltip = {
    attributes: [["data-tooltip", `${tooltipText}`]],
    classes: ["bonus-tooltip"],
  };

  const configBonusAmount = {
    classes: ["bonus-amount"],
    innerText: amount,
  };

  const configBonus = {
    attributes: [["id", `bonus-${id}`]],
    classes: ["bonus"],
    children: [bonusIcon, Div(configBonusTooltip), Div(configBonusAmount)],
  };

  return Div(configBonus);
};

export default Bonus;
