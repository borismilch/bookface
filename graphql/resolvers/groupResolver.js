const GroupModel = require( "../../models/GroupModel");
const UserModel = require( "../../models/UserModel");
const PostModel = require("../../models/PostModel")

module.exports = {
  Query: {

    getGroups: async () => await GroupModel.find(), 
    getGroup: async (_, { id }) => await GroupModel.findById(id),

    getGroupsByEmail: async (_, { email }) => {
      const ee = await GroupModel.find({creatorId: email})  

      return ee
    },
    getPostsOfGroupId: async (_, { groupId }) => {
      const posts = await PostModel.find()

      return posts.filter(post => post.groupId === groupId)
    },

  },

  Mutation: {
    createGroup: async (_, { payload }) => {
      const group = await GroupModel.create(payload)
     

      return group
    },

    async subscribeOnGroup (_, { id, email }) {
      const group = await GroupModel.findById(id)

      if (group.customers.includes(email)) {
        console.log(0, group.customers)
        group.customers = group.customers.filter(c => c !== email)
      }

      else {
        console.log(1, group.customers)
        await group.customers.push(email)
      }

      await group.save()

      return group
    }
  
  },

  Group: {

    users: async ({ customers }) => {
      const users = await UserModel.find()

      return users.filter(user => customers.includes(user.email))
    },
    creator: async ({ creatorId }) => UserModel.findOne({ email: creatorId })
  }

}