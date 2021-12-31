
const UserModel = require('../../models/UserModel')

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
    }
    
  },

}