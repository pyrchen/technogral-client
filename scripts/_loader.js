const DEFAULT_LOADING_SYMBOLS = ['\\', '|', '/', '—'];

function createLoader(loadingSymbols = DEFAULT_LOADING_SYMBOLS) {
  let x = 0;
  let interval = null;

  const startLoader = () => {
    interval = setInterval(() => {
      process.stdout.write(`\r${loadingSymbols[x++]}`);
      x %= loadingSymbols.length;
    }, 100);
  };

  const stopLoader = () => {
    clearInterval(interval);
  };

  return { stopLoader, startLoader };
}

module.exports = {
  createLoader,
};