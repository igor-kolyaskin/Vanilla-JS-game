import progressBarInstance from "./ProgressBar";
import scoreInstance from "./Score";
import Bonuses from "./Bonuses";
import Element from "../common/Element";

const SideBar = () => {
  const score = scoreInstance.render();
  const bonuses = Bonuses();
  const progressBar = progressBarInstance.render();

  const configAside = {
    tag: "aside",
    attributes: [["id", "sidebar"]],
    children: [score, bonuses, progressBar],
  };
  const aside = Element(configAside);

  return aside;
};

export default SideBar;
