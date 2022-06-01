const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const jwtToken = jwt.sign({ _id: user._id }, SECRET);
    return res
      .cookie("usertoken", jwtToken, SECRET, {
        httpOnly: true,
      })
      .json({ email: user.email, _id: user._id });
  } catch (err) {
    console.error(err);
  }
};

const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await User.findOne({ email: email });
    if (user === null) {
      res
        .status(400)
        .json({ errors: { error: { message: "User not exist" } } });
    }

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      res.status(400).json({
        errors: { error: { message: "Password incorrect" } },
      });
    }

    const userToken = jwt.sign({ _id: user._id }, SECRET);

    return res
      .cookie("usertoken", userToken, SECRET, { httpOnly: true })
      .json({ name: user.name, _id: user._id });
  } catch (err) {
    console.error(err);
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("usertoken");
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    return { success: false, data: err.message };
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate("expenses");
    res.json({ users });
  } catch (err) {
    console.error(err);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("expenses");
    res.json(user);
  } catch (err) {
    console.error(err);
  }
};

const addBudget = async (req, res) => {
  try {
    const { id } = req.params;
    const { budget } = req.body;
    const user = await User.findById(id);
    const updateUser = await User.findByIdAndUpdate(
      { _id: id },
      {
        name: user.name,
        email: user.email,
        password: user.password,
        expenses: user.expenses,
        budget: budget,
      },
      {
        new: true,
      }
    );
    await user.save();
    res.json(updateUser);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { register, login, logout, getAllUsers, getUser, addBudget };
