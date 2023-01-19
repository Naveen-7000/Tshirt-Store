// Either we have to use try catch block for handling logic or async-await  || use promise everywhere

module.exports = func => (req,res,next)=>
     Promise.resolve(func(req,res,next)).catch(next)
