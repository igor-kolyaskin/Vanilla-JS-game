import progressBarInstance from "./ProgressBar";
import Bonuses from "./Bonuses";

const SideBar = () => {
  const aside = document.createElement("aside");
  aside.setAttribute("id", "sidebar");

  const score = document.createElement("section");
  score.setAttribute("id", "score");

  const bonuses = Bonuses();

  const progressBar = progressBarInstance.render();
  aside.append(score, bonuses, progressBar);

  return aside;
};

export default SideBar;
