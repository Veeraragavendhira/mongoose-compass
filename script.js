const mongoose=require("mongoose")
const User=require("./userModel")  //import
mongoose.connect("mongodb://127.0.0.1:27017/ragavoffi").then (()=>{
console.log("connection success using mongoose lib")
}).catch(()=>{
    console.log("Error connection")
})
const myinp=new User({
    sname:"veera",
    age:25,
    addr:"no.5,west street,main road,karur",
    city:"erode"
})
myinp.save().then(()=>{
    console.log("success")
}).catch((err)=>{
    console.log("error:",err)
})
