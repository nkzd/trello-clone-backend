const autoCatch = (handlers) => {
  for (key in handlers) {
    handlers[key] = auto(handlers[key]);
  }
  return handlers;
};

const auto = (handler) => {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
};

module.exports = autoCatch;
