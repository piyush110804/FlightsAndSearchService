const express=require("express");
const PORT= 3000;   //require('./config/serverconfig');
const bodyparser=require("body-parser");
const ApiRoutes=require('./routers/index');
 const SetupAndStartServer= async ()=>{
  const app=express();
  app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({extended:true}));
  app.get("/test", (req, res) => {
    res.send("Server working");
});
 app.use('/api',ApiRoutes);
  app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);

  })

 }
 SetupAndStartServer();