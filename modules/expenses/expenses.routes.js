const express = require("express");

const auth = require("../../middlewares/auth");
const addExpenses = require("./controllers/addExpenses");

const expensesRouter = express.Router();

expensesRouter.use(auth);

expensesRouter.post("/sub",addExpenses );

module.exports = expensesRouter;
