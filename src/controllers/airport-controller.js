
const {AirportService}=require('../services/index');
const airportService=new AirportService();

const create= async (req,res)=>{
  try {
    const response=await airportService.create(req.body);
    res.status(201).json({
       data:response,
      success:true,
      message:'Successfully created an airport',
      err:{}
    })
  } catch (error) {
      console.log(error);
    return res.status(500).json({
      data:{},
      success:false,
      message:'Not able to create an airport',
      err:error
    })
  }
}

const destroy= async (req,res)=>{
  try {
    const response=await airportService.destroy(req.params.id);
    res.status(200).json({
       data:response,
      success:true,
      message:'Successfully deleted an airport',
      err:{}
    })
  } catch (error) {
      console.log(error);
    return res.status(500).json({
      data:{},
      success:false,
      message:'Not able to delete an airport',
      err:error
    })
  }
}

const update= async (req,res)=>{
  try {
    const response=await airportService.update(req.params.id,req.body);
    res.status(200).json({
       data:response,
      success:true,
      message:'Successfully updated the airport',
      err:{}
    })
  } catch (error) {
      console.log(error);
    return res.status(500).json({
      data:{},
      success:false,
      message:'Not able to update the airport',
      err:error
    })
  }
}

const get= async (req,res)=>{
  try {
    const response=await airportService.get(req.params.id);
    res.status(201).json({
       data:response,
      success:true,
      message:'Successfully fetched an airport',
      err:{}
    })
  } catch (error) {
      console.log(error);
    return res.status(500).json({
      data:{},
      success:false,
      message:'Not able to fetch an airport',
      err:error
    })
  }
}

const getAll= async (req,res)=>{
  try {
    const response=await airportService.getAll();
    res.status(201).json({
       data:response,
      success:true,
      message:'Successfully fetchded all airports',
      err:{}
    })
  } catch (error) {
      console.log(error);
    return res.status(500).json({
      data:{},
      success:false,
      message:'Not able fetch airports',
      err:error
    })
  }
}

module.exports={
  create,
  destroy,
  update,
  get,
  getAll
}