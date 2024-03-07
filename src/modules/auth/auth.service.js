class AuthService {
  constructor() {}

  async sendOtp(phone) {}

  async checkOtp(phone, code) {}

  async logOut() {}
}

module.exports = {
  AuthService: new AuthService(),
};
