const { AuthService } = require("./auth.service");

class AuthController {
  #service;
  constructor() {
    this.#service = AuthService;
  }
  async sendOtp(req, res, next) {
    try {
      const { phone } = req.body;
      this.#service.sendOtp(phone);
    } catch (err) {
      new Error(`error in AuthController.sendOtp()`);
      new Error(err);
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
