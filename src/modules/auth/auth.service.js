const autoBind = require("auto-bind");
const { UserModel } = require("../user/user.model");
const createError = require("http-errors");
const { AuthMessage } = require("./auth.messages");
const { randomInt } = require("crypto");

class AuthService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }

  async sendOtp(phone) {
    const user = await this.#model.findOne({ phone });

    const now = new Date().getTime();
    const code = randomInt(10000, 99999);
    const twoMinuteMS = 1000 * 60 * 2;
    const expiresIn = now + twoMinuteMS;

    const otp = {
      code,
      expiresIn,
    };

    if (!user) {
      const newUser = await this.#model.create({
        phone,
        otp,
      });
      return newUser;
    }

    if (user?.otp?.expiresIn >= now)
      throw createError.BadRequest(AuthMessage.otpCodeNotExpired);

    user.otp = otp;
    await user.save();
    return user;
  }

  async checkOtp(phone, code) {
    const user = await this.checkExistsByPhone(phone);
    const now = new Date().getTime();
    if (user?.otp?.expiresIn <= now)
      throw createError.Unauthorized(AuthMessage.otpCodeExpired);
    if (user?.otp?.code !== code)
      throw createError.Unauthorized(AuthMessage.wrongOTP);

    if (!user.verifiedPhone) {
      user.verifiedPhone = true;
      await user.save();
    }
    
    return user;
  }

  async logOut() {}

  async checkExistsByPhone(phone) {
    const exist = await this.#model.findOne({ phone });
    if (!exist) throw createError.NotFound(AuthMessage.notFound);
    return exist;
  }
}

module.exports = {
  AuthService: new AuthService(),
};
