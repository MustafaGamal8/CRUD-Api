const mongoose = require('mongoose')




const CollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true
  },
  data:{},
  created_at: {
    type: Date,
    default: Date.now
  }
})



module.exports = CollectionSchema