const { Schema, model } = require('mongoose')

 const CommentModel = new Schema({
  id: String,
  userId: String,
  createdAt: String,
  body: String,
})

 const LikeModel = new Schema({
  id: String,
  userId: String,
  createdAt: String,
 
})

const schema = new Schema({
  id: String,
  body: String,
  createdAt: String,
  userId: String,
  comments: [CommentModel],
  likes: [LikeModel],
  likeCount: Number,
  commentCount: Number,
  image:String,
  userImg: String
})

module.exports = model('Post', schema)