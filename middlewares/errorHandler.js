export const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 404;
  const message = err.message || "Something went wrong";
  res.status(status).json({
    success: false,
    message: message,
  });
};
