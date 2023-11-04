const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const mongo_connect = process.env.MONGO_URL;

mongoose
  .connect(mongo_connect, {})
  .then(() => {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  })
  .catch((err) => {
    console.log(" You failed to connect MongoDB!");
  });


// to listen the server in 8000
app.listen(8000, () => {
  console.log("Server started at 8000");
});
