const express = require("express");
const port = 3000;

function main() {
  const app = express();
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}
main();
