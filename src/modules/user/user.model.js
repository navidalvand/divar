const { Schema, model } = require("mongoose");

const OTPSchema = new Schema({
  code: { type: Number },
  expiresIn: { type: Number, default: 0 },
});

const UserSchema = new Schema(
  {
    fullName: { type: String, required: false },
    phone: { type: String, unique: true, required: true },
    otp: { type: OTPSchema },
    verifiedPhone: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("user", UserSchema);

module.exports = { UserModel };
