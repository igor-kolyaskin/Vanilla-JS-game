const Spinner = (classArray) => {
  // eslint-disable-next-line no-undef
  const spinner = document.createElement("div");
  spinner.classList.add("lds-dual-ring", ...classArray);

  return spinner;
};

export default Spinner;
