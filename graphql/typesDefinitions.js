const { gql } = require('apollo-server')

module.exports = gql`
  type Like {
    _id: ID! 
    postId: String
    userId: String
    createdAt: String!
  },

  type Query {
    getPosts (filters: [String]): [Post]
    getPost (id: String): Post
    getComments (postId: String): [Comment]
    getSinglePost (postId: String): Post
    getUsers (mutes: [String]): [User] 
    getCurrentUser (email: String): User
    getFriedRequests (mutes: [String]): [User]
  
  },

  type Mutation {
    addPost (image: String, body: String, userId: String, userImg: String): Post
    deletePost (id: String): Post
    changePost(id: String, post: PostInput): Post

    addComent (postId: String, comment: CommentInput): Comment
    updateComent (commentId: String, comment: CommentInput): Comment
    deleteComent (commentId: String): Comment
    
    setLike (postId: String, userId: String): Like
    checkUserImage (email: String, picture: String): User

    addToMute (userEmail: String, mutedEmail: String): User

    sendFrienshipReq (userEmail: String, requestEmail: String ): User

    rejectmRequest (userEmail: String, reqEmail: String): User
    confirmRequest (userEmail: String, reqEmail: String): User

  },

  type Post {
    _id: ID
    image: String!
    body: String!
    createdAt: String
    userId: String!
    comments: [Comment]
    likes: [Like]
    likeCount: Int!
    commentCount: Int!
    userImg: String!

    user: User

  }

  input PostInput {
    image: String
    body: String
    createdAt: String
  }

  input LikeInput {
    postId: String
    userId: String
    createdAt: String!
  }

  type User {
    email: String
    _id: String
    username: String
    nickname: String
    picture: String 
    email_verified: Boolean
    mutes: [String]
    friendRequests: [String]
    yourSendedFriendReq: [String]
    friends: [String] 
  }

  type Comment {
    _id: ID!
    userId: ID!
    createdAt: String!
    body: String!
    userImg: String!
    postId: String!
    username: String
    
    user: User

  }

  input CommentInput {
    userId: String
    createdAt: String
    body: String
    userImg: String
    username: String
  }
`