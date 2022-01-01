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

    getGroups: [Group]
    getGroup (id: String): Group

    getGroupsByEmail (email: String): [Group]

    getPostsOfGroupId (groupId: String): [Post]
  
  },

  type Mutation {
    addPost (image: String, body: String, userId: String, userImg: String, groupId: String): Post
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

    changeUserImage( email: String, picture: String ): User
    changeBgPicture (email: String, bgPicture: String): User

    createGroup(payload: GroupInput): Group

    addGroupCreated (email: String, groupId: String): User

    subscribeOnGroup(id: String, email: String): Group

  }

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

  type Group {
    _id: String 
    picture: String 
    title: String
    bgPicture: String 

    customers: [String] 
    postsIds: [String]

    users: [User]

    creatorId: String 
    creator: User
  }

  input GroupInput {
    picture: String 
    title: String
    bgPicture: String 
    creatorId: String

    customers: [String] 
    postsIds: [String]

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
    bgPicture: String
    mutes: [String]
    friendRequests: [String]
    yourSendedFriendReq: [String]
    friends: [String] 

    myGroups: [Group]

    groupsCreated: [String]
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