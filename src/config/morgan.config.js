const morgan = require("morgan");

function morganConfig(app) {
  app.use(morgan("dev"));
}

module.exports = {
  morganConfig,
};
