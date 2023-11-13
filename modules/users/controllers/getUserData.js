const mongoose = require("mongoose");

const getUserData = async (req, res) => {
  const userModel = mongoose.model("users");

  const user = await userModel.find({}, { name: 1, email: 1 });

  res.status(200).json({ user });
};

module.exports = getUserData;
