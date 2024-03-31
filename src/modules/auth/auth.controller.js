const createHttpError = require("http-errors");
const { AuthMessage } = require("./auth.messages");
const { AuthService } = require("./auth.service");
const autoBind = require("auto-bind");
class AuthController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = AuthService;
  }
  async sendOtp(req, res, next) {
    try {
      const { phone } = req.body;

      if (!phone) throw createHttpError.BadRequest("phone is required");

      const result = await this.#service.sendOtp(phone);

      return res.send({
        message: AuthMessage.sendOtpSuccessfully,
        data: {
          phone: result.phone,
          otp: result.otp.code,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async checkOtp(req, res, next) {
    try {
      const { phone, code } = req.body;

      if (!phone) throw createHttpError.BadRequest("phone is required");
      if (!code) throw createHttpError.BadRequest("code is required");

      const user = await this.#service.checkOtp(phone, code);

      const token = this.#service.signToken({ phone, id: user._id });
      const oneDay = 1000 * 60 * 60 * 24;

      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        expiresIn: oneDay,
      });

      return res.send({
        message: AuthMessage.loginSuccessfully,
        user,
      });
    } catch (err) {
      next(err);
    }
  }

  async logOut(req, res, next) {
    try {
      res.clearCookie("token");
      res.send("ok");
    } catch (err) {
      next(err);
    }
  }
}

module.exports = {
  AuthController: new AuthController(),
};
