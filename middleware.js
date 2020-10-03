const handleError = (err, req, res, next) => {
  if (res.headersSent) return next(err);

  const statusCode = err.statusCode || 500;
  const errorMessage = 'Internal Error';
  res.status(statusCode).json({ error: errorMessage });
};

function notFound(req, res) {
  res.status(404).json({ error: 'Not Found' });
}

module.exports = {
  handleError,
  notFound,
};
