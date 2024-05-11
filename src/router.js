const { mainAuthGuard } = require("./common/guard/main.guard");
const { authRouter } = require("./modules/auth/auth.routes");
const { categoryRouter } = require("./modules/category/category.routes");
const { userRouter } = require("./modules/user/user.routes");

const router = require("express").Router();

router.use("/auth", authRouter);
router.use("/user", mainAuthGuard, userRouter);
router.use("/category", mainAuthGuard, categoryRouter);

module.exports = {
  mainRouter: router,
};
