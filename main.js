const express = require("express");
const { swaggerConfig } = require("./src/config/swagger.config.js");
const { morganConfig } = require("./src/config/morgan.config.js");
const { corsConfig } = require("./src/config/cors.config.js");
const { helmetConfig } = require("./src/config/helmet.config.js");
const { mainRouter } = require("./src/router.js");
const {
  notFoundException,
} = require("./src/common/exception/notFound.exception.js");
const {
  exceptionHandler,
} = require("./src/common/exception/exception.handler.js");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const port = process.env.PORT;

function main() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  corsConfig(app);
  helmetConfig(app);
  morganConfig(app);
  swaggerConfig(app);
  require("./src/config/mongoose.config.js");
  app.use(mainRouter);
  exceptionHandler(app);
  notFoundException(app);
  app.listen(port, () => console.log(`divar listening on port ${port}!`));
}
main();
