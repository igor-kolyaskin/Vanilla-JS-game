const Bonus = (num) => {
  const bonus = document.createElement("div");
  bonus.setAttribute("id", `bonus-${num}`);
  bonus.classList.add("bonus");

  return bonus;
};

export default Bonus;
