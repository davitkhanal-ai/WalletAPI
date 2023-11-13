const mongoose = require("mongoose");

const userDashboard = async (req, res) => {
  const User = mongoose.model("users");
  const Transactions = mongoose.model("transactions");

const getTransactions = await Transactions.find({
  user_id:req.user._id
}).sort("-createdAt").select("remarks amount transaction_type")

  const getUserData = await User.findOne({
    _id: req.user._id,
  }).select("name balance");

  res.status(200).json({
    Info: getUserData,
    Transactions: getTransactions
  });
};

module.exports = userDashboard;
