const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name must be provided"],
  },
  age: {
    type: Number,
    required: [true, "user age must be provided"],
  },
  contact: {
    type: Number,
    required: [true, "user contact must be provided"],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "address must be provided"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
