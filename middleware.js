const handleError = (err, req, res, next) => {
  if (res.headersSent) return next(err);
  console.error(err);
  const statusCode = err.statusCode || 500;
  const errorMessage = 'Internal Error';
  res.status(statusCode).json({ error: errorMessage });
};

const notFound = (req, res) => {
  res.status(404).json({ error: 'Not Found' });
};

const handleValidationError = (err, req, res, next) => {
  if (err.name !== 'ValidationError') return next(err);
  
  console.error(err);
  res.status(400).json({ error: err._message, errorDetails: err.errors });
};

module.exports = {
  handleError,
  handleValidationError,
  notFound,
};
