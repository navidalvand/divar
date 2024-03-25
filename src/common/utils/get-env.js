require("dotenv").config();

function getEnv(name) {
  return process.env[name];
}

module.exports = {
  getEnv,
};
