const autoBind = require("auto-bind");
const { UserService } = require("./user.service");

class UserController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = UserService;
  }

  whoami(req, res, next) {
    try {
      const user = req.user;
      res.send(user);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = { UserController: new UserController() };
