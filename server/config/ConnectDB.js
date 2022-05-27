require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexion con la base de datos");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
