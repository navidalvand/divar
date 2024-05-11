const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const { getEnv } = require("../utils/get-env");
const { UserModel } = require("../../modules/user/user.model");


/**
 *  *         Check Token in Cookies
 *  *         Verify Token
 */

async function mainAuthGuard(req, res, next) {
  try {
    const token = req?.cookies?.token;
    if (!token) throw createHttpError.Unauthorized("please try to login again");
    const secret = getEnv("JWT_SECRET_KEY");
    const data = jwt.verify(token, secret);
    if (!data) throw createHttpError.Unauthorized("invalid token");
    const user = await UserModel.findById(data.id, { otp: 0 }).lean();
    if (!user) throw createHttpError.NotFound("user not found");
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
}
module.exports = { mainAuthGuard };
