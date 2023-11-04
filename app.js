const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./modules/users/users.routes");
require("dotenv").config();
const mongo_connect = process.env.MONGO_URL;
const app = express();

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
