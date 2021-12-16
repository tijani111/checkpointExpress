const express=require("express")
const app=express()

app.use(express.static("workspace"))

app.get("/home",(req,res)=>{res.sendFile(__dirname+"/workspace/home.html")})
app.get("/services",(req,res)=>{res.sendFile(__dirname+"/workspace/services.html")})
app.get("/contact",(req,res)=>{res.sendFile(__dirname+"/workspace/contact.html")})


app.use((req, res, next) => {
    if (new Date().getDay >= 1 && new Date().getDay <= 5 && new Date().getHours >= 10 && new Date().getHours < 17) {
      next();
    } else {
         console.log("Our website is not available")
    }
  });












const port=5000
app.listen(port,(err)=>{err?console.log(err):console.log(`the server is connected on ${port}...`)})