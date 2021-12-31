const { Schema, model } = require('mongoose')

 const CommentModel = new Schema({
  id: String,
  userId: String,
  createdAt: Number,
  body: String,
  postId: String,
  userImg: String
})

module.exports = model('Comm', CommentModel)