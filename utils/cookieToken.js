const { expireDate } = require("./expireDate")

const cookieToken  = (user,res) =>{
 // i want t grab a token
 const token = user.getJwtToken()

 // create options for cookies
 const options = {
     expires: expireDate(),
     httpOnly : true
 }

 // send the token in cookies
 res.send(200).cookie('token',token,options).json({
     success:true,
     token,
     user
 })
}



module.exports = cookieToken