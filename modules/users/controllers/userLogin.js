const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userLogin = async (req, res) => {
  const Users = mongoose.model("users");
  const { email, password } = req.body;

  //validation
  try {
    if (!email) throw "please provide a email";
    if (!password) throw "please provide a password";

    const getUser = await Users.findOne({
      email: email,
    });
    if (!getUser) throw "email / password doesnot exist";

    const matched = await bcrypt.compare(password, getUser.password);

    if(!matched) throw "password doesnot matched broooo"
  } catch (error) {
    res.status(400).json({ status: "failed", message: error });
    return;
  }

  //creating a login
  res
    .status(200)
    .json({ status: "user login succesfully" });
};

module.exports = userLogin;
