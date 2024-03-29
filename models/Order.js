const mongoose = require("mongoose");

const uuid = require("uuid");

const OrderSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => uuid.v4().replace(/\-/g, ""),
  },
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
    default: "processing",
    enum: ["processing", "delivered"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  bcm_jss: {
    type: String,
  },
  bcm_jss1: {
    type: String,
  },
  bcm_jss2: {
    type: String,
  },
  bcm_jss3: {
    type: String,
  },
  bcm_jss_copies: {
    type: Number,
  },
  bcm_jss1_copies: {
    type: Number,
  },
  bcm_jss2_copies: {
    type: Number,
  },
  bcm_jss3_copies: {
    type: Number,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
