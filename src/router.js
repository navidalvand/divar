const { AuthGuard } = require("./common/guard/auth.guard");
const { authRouter } = require("./modules/auth/auth.routes");
const { categoryRouter } = require("./modules/category/category.routes");
const { userRouter } = require("./modules/user/user.routes");

const router = require("express").Router();

router.use("/auth", authRouter);
router.use("/user", AuthGuard.authorize, userRouter);
router.use("/category", AuthGuard.authorize, categoryRouter);

module.exports = {
  mainRouter: router,
};
