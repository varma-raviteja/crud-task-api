const mongoose = require('mongoose');


// MongoDB connection URI
const uri = "mongodb://localhost:27017/taskmanager"; // Replace with your MongoDB connection string

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).
then(()=>{console.log("DB connected Successfully")}).
catch(()=>{console.log(error)});


module.exports=mongoose;
