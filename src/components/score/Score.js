import progressBarInstance from "./ProgressBar";

const Score = () => {
  const aside = document.createElement("aside");
  aside.setAttribute("id", "score");

  const progressBar = progressBarInstance.render();
  aside.append(progressBar);

  return aside;
};

export default Score;
