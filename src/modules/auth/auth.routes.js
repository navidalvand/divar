const { AuthGuard } = require("../../common/guard/auth.guard");
const { AuthController } = require("./auth.controller");

const router = require("express").Router();

router.post("/send-otp", AuthController.sendOtp);
router.post("/check-otp", AuthController.checkOtp);
router.post("/logout", AuthGuard.authorize ,AuthController.logOut );

module.exports = {
  authRouter: router,
};
