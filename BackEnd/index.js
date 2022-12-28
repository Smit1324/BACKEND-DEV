const express=require('express');
const app=express();
const path=require('path');

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
});

app.post("/submit",(req,res)=>{
    res.send(`SUBMITTED`)
    console.log("SUBMITTED");
})

app.listen(7000,()=>{
    console.log("THIS IS PORT 7000");
});
