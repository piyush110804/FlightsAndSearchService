const {CityRepository}=require('../repository/index');

class CityService{
  constructor(){
    this.cityRepository=new CityRepository();
  }
  async createCity(data){
    try{
    const city=await this.cityRepository.createCity(data);
    return city;
  }
  catch(error){
    console.log('Something went wrong in service layer');
      throw {error};
   }

}
  async deleteCity(cityid){
    try{
      const response=await this.cityRepository.deleteCity(cityid);
      return response;
    }
    catch(error){
    console.log('Something went wrong in service layer');
      throw {error};
   }

  }
  async updateCity(data,cityid){
    try{
    const city=await this.cityRepository.updateCity(data,cityid);
    return city;
  }
    catch(error){
    console.log('Something went wrong in service layer');
      throw {error};
   }

  }
  async getCity(cityid){
    try{
      const city=await this.cityRepository.getCity(cityid);
      return city;
    }
    catch(error){
    console.log('Something went wrong in service layer');
      throw {error};
   }
    
  }


}
  module.exports=CityService
