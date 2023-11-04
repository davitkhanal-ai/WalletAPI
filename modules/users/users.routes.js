const express = require("express");
const userRegister = require("./controllers/userRegister");
const userLogin = require("./controllers/userLogin");
const mockUserRegister = require("./controllers/mockUserRegister");
const getUserData = require("./controllers/getUserData");

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/mock-register", mockUserRegister);
userRouter.post("/login", userLogin);
userRouter.get("/user", getUserData);

module.exports = userRouter;
