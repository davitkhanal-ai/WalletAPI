const mongoose = require("mongoose");

const userRegister = async (req, res) => {
  const Users = mongoose.model("users");

  //creation code for registration process
  const { name, address, email, password, balance } = req.body;

  //validations if possible

  //creation code

  try {
    const createdUser = await Users.create({
      name,
      email,
      address,
      password,
      balance,
      address,
    });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
    return;
  }

  res.status(200).json({ status: "User has been registered" });
};

module.exports = userRegister;
