const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const crypto = require("crypto");
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

//  encrypt password before save -HOOKS
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// validating the password using method with the passedd pass by user to DB pass
userSchema.methods.IsValidatedPassword = async function(userEnteredPassword){
   return await bcrypt.compare(userEnteredPassword,this.password);
}

// JWT Token a method to create and return the token
userSchema.methods.getJwtToken = async function(){
  JWT.sign({id:this._id,},process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRY,
  })
}

// generate forgot password token (simple string )
userSchema.methods.getForgotPasswordToken = async function(){
  // generate a long and random string 
   const forgotToken  = crypto.randomBytes(20).toString('hex');
  //  getting a hash  - make sure to get a hash on backend
   this.forgotPasswordToken = crypto.createHash('sha256').update(forgotToken).digest('hex');

  //  time of token to be added in DB
  this.forgotPasswordExpiry = Date.now() + 20*60*1000;
  return forgotToken;
}


module.exports = mongoose.model("User", userSchema);
