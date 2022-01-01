
const UserModel = require('../../models/UserModel')


module.exports = {
  Query: {
    async getFriedRequests(_, { mutes }) {
      const users = await UserModel.find() 

      return users.filter(user => mutes.slice(1).includes(user.email))
    },

  },

  Mutation: {

    async addToMute(_, {userEmail, mutedEmail}) {
      const user = await UserModel.findOne({ email: userEmail })

      user.mutes = [...(user.mutes || []), mutedEmail]

      await user.save()

      return user

    },

    async sendFrienshipReq (_, { userEmail, requestEmail }) {
      const reqUser = await UserModel.findOne({ email: requestEmail })
      const user = await UserModel.findOne({ email: userEmail })

      console.log(user.friendRequests,reqUser.friendRequests)

      if ((await reqUser.friendRequests || []).find(item => item === userEmail)) {
        reqUser.friendRequests = await reqUser.friendRequests.filter(item => item !== userEmail)
        user.yourSendedFriendReq = await user.yourSendedFriendReq.filter(item => item !== requestEmail)
       
      } else {
        await reqUser.friendRequests.push(userEmail)
        await user.yourSendedFriendReq.push(requestEmail)
        console.log(1,  reqUser.friendRequests,  user.yourSendedFriendReq)
      }

      await reqUser.save()
      await user.save()

      return reqUser

    },

    async rejectmRequest (_, { userEmail, reqEmail }) {
      const reqUser = await UserModel.findOne({ emal: reqEmail })  
      const user = await UserModel.findOne({ email: userEmail })

      user.friendRequests = await user.friendRequests.filter(item => item !== reqEmail)
      reqUser.yourSendedFriendReq = await reqUser.yourSendedFriendReq.filter(item => item !== userEmail)
      user.yourSendedFriendReq = await user.yourSendedFriendReq.filter(item => item !== reqEmail)
      reqUser.friendRequests = await reqUser.friendRequests.filter(item => item !== userEmail)
    

      await user.save()
      await reqUser.save()

      return user

    },
    
    async confirmRequest (_, { userEmail, reqEmail }) {
      const reqUser = await UserModel.findOne({ emal: reqEmail })  
      const user = await UserModel.findOne({ email: userEmail })

      console.log(reqEmail, userEmail)

      user.friendRequests = await user.friendRequests.filter(item => item !== reqEmail)
      reqUser.yourSendedFriendReq = await reqUser.yourSendedFriendReq.filter(item => item !== userEmail)
      user.yourSendedFriendReq = await user.yourSendedFriendReq.filter(item => item !== reqEmail)
      reqUser.friendRequests = await reqUser.friendRequests.filter(item => item !== userEmail)

      await user.friends.push(reqEmail)
      await reqUser.friends.push(userEmail)

      await user.save()
      await reqUser.save()

      return user

    },

    
  },

}