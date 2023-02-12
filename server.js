const express= require("express");
const app= express();

app.get("/",(req, res)=>{
    res.send("Welcome to CRM");
})

app.listen(8080, ()=>{
    console.log("Server has started successfully")
})