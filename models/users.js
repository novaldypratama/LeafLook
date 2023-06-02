const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: [true, "Masukan username Anda!"],
    },
    password: {
      type: String,
      required: [true, "Masukan password yang Valid!"],
      minlength: 8,
      select: false,
    },
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;