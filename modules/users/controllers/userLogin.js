const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    if (!matched) throw "password doesnot matched broooo";
  } catch (error) {
    res.status(400).json({ status: "failed", message: error });
    return;
  }

  //creating a login
  const getUserForAccessToken = await Users.findOne({
    email: email,
  });

  const accessToken = jwt.sign(
    {
      email: getUserForAccessToken.email,
      name: getUserForAccessToken.name,
    },
    process.env.jwt-salt
  );

  res.status(200).json({ status: "user login succesfully",accessToken });
};

module.exports = userLogin;
