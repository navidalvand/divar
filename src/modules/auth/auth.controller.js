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

      if (!phone) throw new createHttpError.BadRequest("phone is required");

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

      if (!phone) throw new createHttpError.BadRequest("phone is required");
      if (!code) throw new createHttpError.BadRequest("code is required");

      const user = await this.#service.checkOtp(phone, code);

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
    } catch (err) {
      next(err);
    }
  }
}

module.exports = {
  AuthController: new AuthController(),
};
