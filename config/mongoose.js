const mongoose=require('mongoose');
const env = require('./environment');

mongoose.connect(`mongodb://localhost/${env.db}`);


const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log("Connected to the database::MONGO_DB");

});

module.exports=db;

