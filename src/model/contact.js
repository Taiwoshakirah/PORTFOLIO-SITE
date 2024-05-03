const Schema = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Please provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = mongoose.Model("Contact",contactChema)
