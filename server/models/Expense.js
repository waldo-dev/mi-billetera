const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ExpenseSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  price: {
    type: String,
    required: [true, 'price is required'],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Expense = model('Expense', ExpenseSchema);

module.exports = { Expense };
