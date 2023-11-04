const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

//database variables deriving from env file
const mongo_connect = process.env.MONGO_URL;

// DB connection strings
mongoose
  .connect(mongo_connect, {})
  .then(() => {
    console.log(
      "Database has been connected to Wallet API projects"
    );
  })
  .catch((err) => {
    console.log(" You failed to connect MongoDB!");
  });


// to listen the server in 8000
app.listen(8000, () => {
  console.log("Server started at 8000");
});
