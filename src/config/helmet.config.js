const helmet = require("helmet");

function helmetConfig(app) {
  app.use(helmet());
}

module.exports = {
  helmetConfig,
};
