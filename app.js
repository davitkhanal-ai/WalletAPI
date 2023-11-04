const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./modules/users/users.routes");
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

// to listen the server in 8000
app.listen(8000, () => {
  console.log("Server started at 8000");
});
