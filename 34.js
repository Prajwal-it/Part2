const express=require('express');
const app=express();
app.use(express.json());
app.listen((3000),(req,res)=>{
    console.log(`Welcome to NodeJS`);
})