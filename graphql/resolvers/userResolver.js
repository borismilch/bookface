
const PostModel = require('../../models/PostModel')
const UserModel = require('../../models/UserModel')
const GroupModel = require('../../models/GroupModel')


module.exports = {
  Query: {
  
    getUsers: async (_, {mutes}) => await UserModel.find({ email: { "$nin": [...mutes] } }),
    getCurrentUser: async  (_, { email }) => await UserModel.findOne({ email })

  },
  Mutation: {

    async checkUserImage (_, {email, picture}) {
      const user = await UserModel.findOne({ email })

      if (!user.picture) {
        user.picture = picture
        await user.save()
      }

      return user
    },

    changeUserImage: async (_, { email, picture }) => await UserModel.findOneAndUpdate({ email }, { picture }),

    changeBgPicture: async (_, { email, bgPicture }) =>  await UserModel.findOneAndUpdate({ email }, { bgPicture }),

    addGroupCreated: async (_, { email, groupId }) => {
      const user = UserModel.findOne({email})

     user.groupsCreated ?  await user.groupsCreated.push(groupId) :

     user.groupsCreated = [ groupId ]

      await user.save()

      return user
    }
    
  },

  User: {
    myGroups: async ({groupsCreated}) => {
      const groups = await GroupModel.find()

      return groups.filter(group => groupsCreated.includes(group._id))
    }
  }

}