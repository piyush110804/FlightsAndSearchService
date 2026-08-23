const express=require("express");
const {City,Airport}=require('./models/index');
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
  app.listen(PORT,async ()=>{
    console.log(`server started at port ${PORT}`);
  const city = await City.findByPk(6);
  const airports=await city.getAirports();


    console.log(airports);
  })

 }
 SetupAndStartServer();