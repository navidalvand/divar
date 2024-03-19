const { AuthRouter } = require("./modules/auth/auth.routes");

const router = require("express").Router();

router.use("/auth", AuthRouter);

module.exports = {
  mainRouter: router,
};
