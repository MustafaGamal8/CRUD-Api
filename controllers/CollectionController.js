const asyncHandler = require("../middlewares/AsyncHandelMW");
const path = require('path');
const CollectionSchema = require("../models/collectionModel");
const { default: mongoose } = require("mongoose");





const SendForm  = asyncHandler(
 async (req,res)=>{
  res.sendFile(path.join(__dirname,'..', 'views', 'form.html'));
 }
)


const createCollection = asyncHandler(
  async (req, res) => {
  const collectionName = req.body.collectionName;
  const collectionKey = req.body.collectionKey;

  if (!collectionName || !collectionKey) {
    return res.status(400).send("Error: Both collectionName and collectionKey are required");
  }

  const dbCollections = []
  const temp = await mongoose.connection.db.listCollections().toArray()
   temp.forEach(collection => {
    dbCollections.push(collection.name)
  });
   

   if (dbCollections.includes(collectionName)) {
    res.send("Collection name already taken");
    return    
   }
  


  const collectionModel = await mongoose.model(collectionName, CollectionSchema);
  const collection = new collectionModel({
    name: collectionName,
    key: collectionKey,    
  })  
  
  await collection.save();

  const responseMessage = `
    <h1>Collection created successfully:</h1>
    <p>Name: ${collectionName}</p>
    <p>Key: ${collectionKey}</p>
    <p>Link: /api/${collectionName}?key=${collectionKey}</p>
  `;
  res.send(responseMessage);
});





module.exports = {createCollection ,SendForm}