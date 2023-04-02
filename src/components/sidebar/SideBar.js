import progressBarInstance from "./ProgressBar";
import scoreInstance from "./Score";
import Bonuses from "./Bonuses";

const SideBar = () => {
  const aside = document.createElement("aside");
  aside.setAttribute("id", "sidebar");

  const score = scoreInstance.render();
  const bonuses = Bonuses();
  const progressBar = progressBarInstance.render();

  aside.append(score, bonuses, progressBar);

  return aside;
};

export default SideBar;
