const BigPromise = require("../middleware/bigPromise");
const User = require("../models/user");
const cookieToken = require("../utils/cookieToken");
const customError = require("../utils/customeError");

exports.SignUp = BigPromise(async(req,res,next)=>{
    // need compulsory fields from body
    const {email,password,name} = req.body;

    // need email field mandatory and use customError handler
    if(!email || !name || !password){
       return next(new customError('email, name and password is required',400));
    }
    // add model to db
    const user =await User.create({
        name,
        email,
        password
    })
   
    cookieToken(user,res);
})