const postResolvers = require('./postResolvers')
const commentResolvers = require('./commentResolvers')
const userResolvers = require('./userResolver')
const friendResolver = require('./friendsResolver')
const groupResolver = require('./groupResolver')


module.exports = {
  Query: {
    ...postResolvers.Query,
    ...commentResolvers.Query,
    ...userResolvers.Query,
    ...friendResolver.Query,
    ...groupResolver.Query
  },
  Mutation: {
    ...postResolvers.Mutation,
    ...commentResolvers.Mutation,
    ...userResolvers.Mutation,
    ...friendResolver.Mutation,
    ...groupResolver.Mutation
  },
  Post: {
    ...postResolvers.Post
  },
  Comment: {
    ...commentResolvers.Comment
  },
  Group: {
    ...groupResolver.Group
  },
  User: {
    ...userResolvers.User
  }
}