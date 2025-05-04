const mongoose = require('mongoose')

const dbConnection = async ()=>{
  const con = await mongoose.connect(process.env.MONGODB_URI);
  console.log(`MongoDB connected: ${con.connection.host}`.cyan.underline.bold)
}


module.exports = dbConnection;
