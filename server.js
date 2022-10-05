//All Dependencies----------

const express = require("express");
const ejs = require("ejs");


const app = express();//Initializing Webapp

//Middleware--------------
app.set("view engine","ejs");
app.use(express.static("public"));

//Main code--------------
app.get("/",(req,res)=>{
    res.render(__dirname+"/views/Home.ejs");
});


app.listen(process.env.PORT || 3000,()=>{
        console.log("Server Work fine...");
});