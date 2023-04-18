/* eslint-disable no-undef */
const Bonus = (config) => {
  const {
    id, iconUrl, tooltipText, amount,
  } = config;

  const bonus = document.createElement("div");
  bonus.setAttribute("id", `bonus-${id}`);
  bonus.classList.add("bonus");

  const bonusIcon = document.createElement("div");
  bonusIcon.style.backgroundImage = iconUrl;
  bonusIcon.classList.add("bonus-icon");

  const bonusTooltip = document.createElement("div");
  bonusTooltip.setAttribute("data-tooltip", `${tooltipText}`);
  bonusTooltip.classList.add("bonus-tooltip");

  const bonusAmount = document.createElement("div");
  bonusAmount.innerText = amount;
  bonusAmount.classList.add("bonus-amount");

  bonus.append(bonusIcon, bonusTooltip, bonusAmount);

  return bonus;
};

export default Bonus;
