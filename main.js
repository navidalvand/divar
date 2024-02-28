const express = require("express");
require("dotenv").config();
const port = process.env.PORT;

function main() {
  const app = express();
  require("./src/config/mongoose.config.js");
  app.listen(port, () => console.log(`divar listening on port ${port}!`));
}
main();
