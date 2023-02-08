const app = require('./app');
const connectWithDb = require('./config/db');
require('dotenv').config();

// db connect
connectWithDb()

// server 
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on Port: ${process.env.PORT}`);
});