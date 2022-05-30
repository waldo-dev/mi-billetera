const { Expense } = require('../models/Expense');
const { User } = require('../models/User');

const createExpense = async (req, res) => {
  try {
    const { name, price, userId } = req.body;
    const user = await User.findById(userId);

    const newExpense = await Expense.create({
      name: name,
      price: price,
      userId: user._id,
    });
    user.expenses = user.expenses.concat(newExpense._id);

    await user.save();

    res.json({ newExpense });
  } catch (err) {
    console.error(err);
  }
};

const getAllExpenses = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
  }
};

const getExpense = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
  }
};

const updateExpense = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
  }
};

const deleteExpense = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createExpense,
  getAllExpenses,
  getExpense,
  deleteExpense,
  updateExpense,
};
