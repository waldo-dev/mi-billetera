const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const { SECRET } = process.env;
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

    res
      .cookie("usertoken", userToken, SECRET, {
        httpOnly: true,
      })
      .json({
        email: user.email,
        _id: user._id,
        name: user.name,
      });
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

module.exports = { register, login, logout };
