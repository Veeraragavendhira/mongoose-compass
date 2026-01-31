const exp=require("express")
const app=exp()
const bp=require("body-parser")
const urlencoder=bp.urlencoded({extended:false})

const mongoose=require("mongoose")
const User=require("./userModel")  //import
mongoose.connect("mongodb://127.0.0.1:27017/ragavoffi").then (()=>{
console.log("connection success using mongoose lib")
}).catch(()=>{
    console.log("Error connection")
})
async function dis()
{
    try
    {
   const result=await User.where("age").gte(25)
    console.log(result)
    }
    catch(e){
        console.log(e.message)
    }
}
dis()