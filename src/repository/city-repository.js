const { where } = require('sequelize');
const {City}=require('../models/index');

class cityrepository{
 async createcity({name}){
   try{
    const city= await City.create({name});
    return city;
   }
   catch(error){
    throw error;
   }

   
 }
 

}
module.exports=cityrepository;

