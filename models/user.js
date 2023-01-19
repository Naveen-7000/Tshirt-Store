const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
// here in required i am using array to tell that if its true then go ahead
// if not then pass this message to validator or show this message
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [40, "Name should be under 40 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    validate: [validator.isEmail, "Please enter email in correct format"],
    // check only one user with the same email id in database
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [6, "Password should be atleast 6 char"],
    // select helps you to not get password from DB on req
    select: false,
  },
  photo: {
    id: {
      type: stringify,
      required: true,
    },
    secure_url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  cretedAt: {
    type: Date,
    default: Date.now,
  },
});

//  encrypt password before save




module.exports = mongoose.model("User", userSchema);
