const dotenv=require('dotenv');
const app=require('./app');
const connectDB=require("./config/db");

dotenv.config();

connectDB();

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${Port}`);
});
