const { default: mongoose } = require("mongoose");
const asyncHandler = require("../middlewares/AsyncHandelMW");
const getCollectionMW = require("../middlewares/GetCollectionMW");



const  get = asyncHandler(
 async (req,res)=>{
   const collection = req.body.collection

  res.status(200).json(collection[0]);

  }
) 


const post = asyncHandler(
  async (req,res)=>{
    const collection = req.body.collection[0]
  

  if (!req.body.data) {
    res.send("Data is required");
    return    
  }


  collection.data  = {...req.body.data}
  res.send(collection)

  }
)



module.exports = {get,post}