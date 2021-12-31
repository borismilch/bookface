const postResolvers = require('./postResolvers')
const commentResolvers = require('./commentResolvers')
const userResolvers = require('./userResolver')
const friendResolver = require('./friendsResolver')


module.exports = {
  Query: {
    ...postResolvers.Query,
    ...commentResolvers.Query,
    ...userResolvers.Query,
    ...friendResolver.Query
  },
  Mutation: {
    ...postResolvers.Mutation,
    ...commentResolvers.Mutation,
    ...userResolvers.Mutation,
    ...friendResolver.Mutation
  },
  Post: {
    ...postResolvers.Post
  },
  Comment: {
    ...commentResolvers.Comment
  }
}