const express=require("express");
const {PORT}=require('./config/serverconfig');

 const SetupAndStartServer= async ()=>{
  const app=express();
  app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
  })

 }
 SetupAndStartServer();