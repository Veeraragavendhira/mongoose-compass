const exp=require("express")
const app=exp()

const mongoose=require("mongoose")
const User=require("./userModel")  //import
mongoose.connect("mongodb://127.0.0.1:27017/ragavoffi").then (()=>{
console.log("connection success using mongoose lib")
}).catch(()=>{
    console.log("Error connection")
})

var result=""
app.get("/showdata", (req,res)=>{
    var un=req.query["un"]
    var ag=req.query["age"]
    var ad=req.query["ad"]
    result = result+ "<br>User Name: "+un+"<br>age: "+ag+"<br>Address: "+ad


    const myinp=new User({
    sname:un,
    age:ag,
    addr:ad,
})
myinp.save().then(()=>{
    console.log("success")
}).catch((err)=>{
    console.log("error:",err)
})
res.write(result+"<h1> Successfully Inserted </h1>")
    res.end()
}).listen(3143)
console.log("Port Listening @ 3143...........")


