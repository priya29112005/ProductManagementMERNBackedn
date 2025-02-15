const express=require('express');
const Joi=require("joi");

const app =express();

const userschema=Joi.object({
    name:Joi.string().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(6).max(20).required(),
    age:Joi.number().integer().min(18).max(100),

});


app.use(express.json());

app.post("/register",(req,res)=>{
const {error,value}=userschema.validate(req.body,{abortEarly:false});

if(error){
    return res.status(400).json({
        message:"validation error",
        details:error.details.map((err)=>err.message),
});
}
res.status(200).json({message:"user registration is success"});

});

app.listen(3000,()=>{
    console.log("server is running in http://localhost:3000");
});