const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    // unique:true
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  balance: {
    type: Number,
    require: [true, "balance is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
