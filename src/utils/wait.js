// eslint-disable-next-line no-promise-executor-return
const wait = (t) => new Promise((resolve) => setTimeout(resolve, t));

export default wait;
