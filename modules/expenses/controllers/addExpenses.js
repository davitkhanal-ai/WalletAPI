const mongoose = require("mongoose");
const addExpenses = async (req, res) => {
  const Users = mongoose.model("users");
  const Transactions = mongoose.model("transactions");
  const { amount, remarks } = req.body;

  try {
    if (!amount) throw "Please enter amount";
    if (amount < 1) throw "Amount cannot be less than1";

    if (!remarks) throw "please add remarks";
    if (remarks.length < 2) throw "remarks must be atleast 3 digit";
  } catch (error) {
    res.status(400).json({ status: "failed", message: error });
    return;
  }

  //after success
  try {
    //create transaction history
    await Transactions.create({
      amount: amount,
      remarks: remarks,
      user_id: req.user._id,
      transaction_type: "expenses",
    });

    //after success
    await Users.updateOne(
      {
        _id: req.user._id,
      },
      { $inc: { balance: -amount } },
      {
        runValidators: true,
      }
    );
  } catch (error) {
    res.status(400).json({ status: "failed", message: error });
    return;
  }

  res.status(200).json({ status: "Expenses was update" });
};
module.exports = addExpenses;
