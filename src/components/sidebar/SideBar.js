import progressBarInstance from "./ProgressBar";
import scoreInstance from "./Score";
import Bonuses from "./Bonuses";
import { Aside } from "../../elements";

const SideBar = () => {
  const score = scoreInstance.render();
  const bonuses = Bonuses();
  const progressBar = progressBarInstance.render();

  const configAside = {
    attributes: [["id", "sidebar"]],
    children: [score, bonuses, progressBar],
  };
  const aside = Aside(configAside);

  return aside;
};

export default SideBar;
