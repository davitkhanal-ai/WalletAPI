const express = require("express");
const userRegister = require("./controllers/userRegister");
const userLogin = require("./controllers/userLogin");
const mockUserRegister = require("./controllers/mockUserRegister");
const getUserData = require("./controllers/getUserData");
const userDashboard = require("./controllers/userDashboard");
const auth = require("../../middlewares/auth");

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/mock-register", mockUserRegister);
userRouter.post("/login", userLogin);
userRouter.get("/user", getUserData);

//protectec routes
userRouter.use(auth);
userRouter.get("/dashboard", userDashboard);

module.exports = userRouter;
