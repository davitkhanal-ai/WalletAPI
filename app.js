const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./modules/users/users.routes");
const incomeRouter = require("./modules/income/income.routes");
const expensesRouter = require("./modules/expenses/expenses.routes");
require("dotenv").config();
const app = express();
app.use(express.json());
app.post("/process-json-array", (req, res) => {
  const jsonData = req.body; // JSON array from the request body

  // Process the JSON array here (e.g., log it)
  console.log(jsonData);

  res.status(200).json({ message: "JSON array received and processed" });
});

const mongo_connect = process.env.MONGO_URL;

//create a collection called users
require("./models/users.models");
require("./models/transactions.models");

mongoose
  .connect(mongo_connect, {})
  .then(() => {
    console.log("Database has been connected to Wallet API projects");
  })
  .catch((err) => {
    console.log(" You failed to connect MongoDB!");
  });

// Router redirection starts here
app.use("/users", userRouter);

//Router redirection for incomes
app.use("/income", incomeRouter);

//Router redirection for incomes
app.use("/expenses", expensesRouter);

// to listen the server in 8000
app.listen(8000, () => {
  console.log("Server started at 8000");
});
