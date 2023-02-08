const mongoose = require("mongoose");

const connectWithDb = () =>{
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }).then(console.log("DB connected")).catch((error)=>{
    console.log("DB connection issue" , error);
    process.exit(1);
  })
}

module.exports = connectWithDb