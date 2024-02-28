const { default: mongoose } = require("mongoose");
require("dotenv").config();

const mongoDBURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoDBURI)
  .then(() => console.log("connected to Database"))
  .catch((err) => console.log(err?.message ?? "Failed Db connection"));
