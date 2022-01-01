const { Schema, model } = require('mongoose')

 const GroupModel = new Schema({
  bgPicture: String,
  picture: String,
  customers: [String],
  title: String,
  postsIds: [String],
  creatorId: String
  
})

module.exports = model('Group', GroupModel)