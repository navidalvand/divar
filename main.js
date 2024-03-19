const express = require("express");
const { swaggerConfig } = require("./src/config/swagger.config.js");
const { morganConfig } = require("./src/config/morgan.config.js");
const { corsConfig } = require("./src/config/cors.config.js");
const { helmetConfig } = require("./src/config/helmet.config.js");
const { mainRouter } = require("./src/router.js");
require("dotenv").config();
const port = process.env.PORT;

function main() {
  const app = express();
  corsConfig(app);
  helmetConfig(app);
  morganConfig(app);
  swaggerConfig(app);
  require("./src/config/mongoose.config.js");
  app.use(mainRouter);
  app.listen(port, () => console.log(`divar listening on port ${port}!`));
}
main();
