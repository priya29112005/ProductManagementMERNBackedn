const mongoose=require('mongoose');
const { connect } = require('../routes/userRoutes');
const connectDB=async()=>{
    try{
        await mongoose.connect("process.env.MONGO_URI",{
            UseNewUrlParser:true,
        
        })
        console.log("MongoDB connected Sucessfully");
    }
    catch(error){
        console.log("MongoDB connection Failed:",error);
        process.exit(1);
    }
    
};
module.exports=connectDB;