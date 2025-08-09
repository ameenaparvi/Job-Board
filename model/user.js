const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: { type: String, required: true, unique: true },
  Age: { type: String },
  Place: { type: String },
  Qualification: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
