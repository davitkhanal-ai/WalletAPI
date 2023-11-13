const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const mockUserRegister = async (req, res) => {
  const Users = mongoose.model("users");

  //creation code for registration process
  //const [ name, address, email, password, balance ] = req.body;

  for (let i = 0; i < req.body.length; i++) {
    console.log(req.body[i]);
    const { name, address, email, password, balance } = req.body[i];
    const encPassword = await bcrypt.hash(password, 10);
    try {
      const createdUser = await Users.create({
        name,
        address,
        email,
        password: encPassword,
        balance,
      });
    } catch (error) {
      res.status(400).json({ status: "failed", message: error.message });
      return;
    }
  }
  res.status(200).json({ status: "User has been registered" });
};

module.exports = mockUserRegister;
