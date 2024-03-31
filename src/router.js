const { AuthGuard } = require("./common/guard/auth.guard");
const { authRouter } = require("./modules/auth/auth.routes");
const { userRouter } = require("./modules/user/user.routes");

const router = require("express").Router();

router.use("/auth", authRouter);
router.use("/user", AuthGuard.authorize, userRouter);

module.exports = {
  mainRouter: router,
};
