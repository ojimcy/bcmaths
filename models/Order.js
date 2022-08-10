const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  full_name: {
    type: String,
    require: true,
  },
  phone_number: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  delivery_address: {
    type: String,
    require: true,
  },
  book_title: {
    type: String,
    require: true,
  },
  copies: {
    type: Number,
    require: true,
  },
  status: {
      type: String,
      default: 'processing',
      enum: ['processing', 'delivered'],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("Order", OrderSchema);
