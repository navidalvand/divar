function exceptionHandler(app) {
  app.use((err, req, res, next) => {
    const statusCode = err?.statusCode ?? err?.status ?? 500;
    const message = err?.message ?? err?.stack ?? "Internal Server Error";
    const data = err?.data || null;

    res.status(statusCode).json({
      statusCode,
      message,
      data,
    });
  });
}

module.exports = { exceptionHandler };
