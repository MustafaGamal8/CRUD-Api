const { default: mongoose } = require("mongoose");
const CollectionSchema = require("../models/collectionModel");

const  getCollectionMW= async (req,res,nxt) => {
  const choosenCollection = req.params.collection
  if (!choosenCollection) {
    res.send("please enter collection name");
    return    
  }

  const dbCollections = []
    const temp = await mongoose.connection.db.listCollections().toArray()
     temp.forEach(collection => {
    dbCollections.push(collection.name)
  });


  if (!dbCollections.includes(choosenCollection)) {
    res.send("Collection not found");
    return
  }

  const MyModel = mongoose.model(choosenCollection, CollectionSchema);
  const collection = await MyModel.find({});

  req.body.collection = collection
  
  nxt() 
}


module.exports = getCollectionMW