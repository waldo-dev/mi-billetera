const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Por favor ingrese un email valido",
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Contraseña debe tener más de 8 caracteres"],
    },
    expenses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Expense",
      },
    ],
    budget: {
      type: String,
      default: "0",
    },
    scripts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Script" }],
  },
  { timestamps: true }
);

UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
  if (this.isNew && this.password !== this["confirmPassword"]) {
    this.invalidate("confirmPassword", "Password must match confirm password");
  }
  next();
});

UserSchema.pre("save", function (next) {
  if (this.isNew)
    bcrypt.hash(this.password, 10).then((hash) => {
      this.password = hash;
      next();
    });
  else next();
});

const User = model("User", UserSchema);
module.exports = { User, UserSchema };
