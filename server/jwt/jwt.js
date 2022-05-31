const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRET;

const authenticate = (req, res, next) => {
  try {
    const userToken = req.cookies.usertoken;
    jwt.verify(userToken, JWT_SECRET, (err) => {
      if (err) return res.status(401).json({ verified: false });
      else next();
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = authenticate;
