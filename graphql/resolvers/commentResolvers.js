
const CommentModel = require('../../models/ComModel')
const UserModel = require('../../models/UserModel')

module.exports = {
  Query: { 
    getComments: async (_, {postId}) => await CommentModel.find({ postId }),
  },
  Mutation: {

    addComent: async (_, { postId, comment }) => await CommentModel.create({postId, ...comment}),

    updateComent: async (_, { commentId, comment }) => await CommentModel.findOneAndUpdate(commentId, comment),

    deleteComent: async (_, { commentId }) => await CommentModel.findByIdAndRemove(commentId),
    
  },

  Comment: {
    user: async ({userId}) =>  await UserModel.findOne({ email: userId })
  }
}