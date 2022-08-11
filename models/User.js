const mongoose = require("mongoose");

const uuid = require("uuid");

const UserSchema = new mongoose.Schema({
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
  role: {
    type: String,
    default: "user",
    enum: ["admin", "user"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  passcode: {
    type: String,
    unique: true,
  }
});

module.exports = mongoose.model("User", UserSchema);
