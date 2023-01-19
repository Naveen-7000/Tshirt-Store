const app = require('./app');
require('dotenv').config();


// server 
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on Port: ${process.env.PORT}`);
});