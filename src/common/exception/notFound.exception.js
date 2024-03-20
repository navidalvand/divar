function notFoundException(app) {
  app.use((req, res) => {
    const { protocol, method, hostname, originalUrl } = req;

    res.status(404).json({
      statusCode: 404,
      message: "page or route not found",
      data: {
        protocol,
        method,
        hostname,
        originalUrl,
        request: `${method}: ${protocol}://${hostname}:${process.env.PORT}${originalUrl}`,
      },
    });
  });
}

module.exports = { notFoundException };
