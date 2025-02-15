const mongoose=require('mongoose');
const ProductSchema=newmongooseSchema({
    ProductName:{type:string,required:true},
    sportsCategory:{type:string,default:'general'},
});
module.exports=mongoose.model("Products",ProductSchema);