
const {City}=require('../models/index');


class Cityrepository{
 async createcity({name}){
   try{
    const city= await City.create({name});
    return city;
   }  
   catch(error){
    console.log('Something went wrong in repository layer');
      throw {error};
   }

   
 }
 async deletecity(cityid){
      try{
         await City.destroy({
          where:{
            id:cityid
          }
         })
         return true;
      }
      catch(error){
       console.log('Something went wrong in repository layer');
      throw {error};
      }
      
 }
 async updatecity(data,cityid){
    try{
       const city=await City.update(data,{
        where:{
          id:cityid
        }
       })
       return city;
    }
    catch(error){
      console.log('Something went wrong in repository layer');
      throw {error};
    }
 }
 async getcity(cityid){
  try{
    const city=await City.findByPk(cityid);
    return city;
  }
  catch(error){
    console.log('Something went wrong in repository layer');
      throw {error};
  }
 }
 

}
module.exports=Cityrepository;

