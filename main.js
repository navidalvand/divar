const express = require("express");
const { swaggerConfig } = require("./src/config/swagger.config.js");
require("dotenv").config();
const port = process.env.PORT;

function main() {
  const app = express();
  require("./src/config/mongoose.config.js");
  swaggerConfig(app);
  app.listen(port, () => console.log(`divar listening on port ${port}!`));
}
main();
