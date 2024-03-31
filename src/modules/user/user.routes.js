const { UserController } = require("./user.controller");

const router = require("express").Router();

router.get("/profile", UserController.whoami);

module.exports = {
  userRouter: router,
};
