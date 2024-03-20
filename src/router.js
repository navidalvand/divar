const { authRouter } = require("./modules/auth/auth.routes");

const router = require("express").Router();

router.use("/auth", authRouter);

module.exports = {
  mainRouter: router,
};
