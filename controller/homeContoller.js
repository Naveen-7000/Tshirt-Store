// bring the middleware
const BigPromise = require("../middleware/bigPromise.js");


exports.home = BigPromise( async(req,res)=>{
    res.status(200).json({
        success:true,
        greeting:"Hello from API"
    })
});
exports.homeDummy = BigPromise((req,res)=>{
    res.status(200).json({
        success:true,
        greeting:"This is another dummy API"
    })
});
