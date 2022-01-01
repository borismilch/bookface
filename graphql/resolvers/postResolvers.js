const PostModel = require('../../models/PostModel')
const UserModel = require('../../models/UserModel')

module.exports = {
  Query: {
    getPosts: async (_, { filters }) => {
      try {
        const posts = await PostModel.find() 

        return filters ? posts.filter(post => filters.includes(post.userId)) : posts

        
      } catch (e) { console.log(e) }
    },

    getSinglePost: async (_, { postId }) => {
      try {
        const post = await PostModel.findById(postId)  

        return post
      } catch (e) { console.log(e) }
    },  

  },
  Mutation: {
    async addPost (_, {image, body, userId, userImg, groupId}) {
      const nPost = { image, body, userId,  createdAt: new Date(),
       comments: [], likes: [], likeCount: 0,  commentCount: 0, userImg, groupId }

      console.log(nPost) 
        
      const newPost = await PostModel.create(nPost)
      await newPost.save()

      return  newPost

    },

    deletePost: async (_, { id }) => await PostModel.findByIdAndDelete(id),
   
    changePost: async (_, { id, post }) => await PostModel.findByIdAndUpdate(id, post, { new: true }),

    async setLike (_, { userId, postId }) {
      const post = await PostModel.findById(postId)

      if (post.likes.find(item => item.userId === userId)) {
        post.likes = post.likes.filter(like => like.userId !== userId)
      }
      else {
       await post.likes.push({userId, postId, createdAt: Date.now() + '' })
     }
     
      await post.save()

      return post
    },
    
  },

  Post: { 
    user: async  ({userId}) => await UserModel.findOne({ email: userId })
  },
}