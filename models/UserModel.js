const { Schema, model } = require('mongoose')

 const CommentModel = new Schema({
  id: String,
  email: {type: String, unique: true},
  username: String,
  picture: String,
  nickname: String,
  mutes: [String],
  friendRequests: [String],
  yourSendedFriendReq: [String],
  friends: [String],

 }, { collection : 'users' })

module.exports = model('Comment', CommentModel)