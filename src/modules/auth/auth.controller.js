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

      const result = await this.#service.sendOtp(phone);
      return {
        message: AuthMessage.sendOtpSuccessfully,
        result,
      };
    } catch (err) {
      next(err);
    }
  }

  async checkOtp(req, res, next) {
    try {
    } catch (err) {
      new Error(`error in AuthController.checkOtp()`);
      new Error(err);
      next(err);
    }
  }

  async logOut(req, res, next) {
    try {
    } catch (err) {
      new Error(`error in AuthController.logOut()`);
      new Error(err);
      next(err);
    }
  }
}

module.exports = {
  AuthController: new AuthController(),
};
