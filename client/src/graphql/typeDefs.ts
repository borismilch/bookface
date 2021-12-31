import { gql } from "@apollo/react-hooks"

export default gql`
  type Like {
    id: ID!
    createdAt: String!
  },
  type Query {
    getPosts (filters: [String]): [Post]
    getPost (id: String): Post
    getComments (postId: String): [Comment]
    getSinglePost (postId: String): Post
    getUsers (mutes: [String]): [User] 
    getCurrentUser (email: String): User

    sendFrienshipReq (userEmail: String, requestEmail: String ): User

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
    getUser (email: String): [User],
    checkUserImage (email: String, picture: String): User
    addToMute (userEmail: String, mutedEmail: String): User

    rejectmRequest (userEmail: Strrng, reqEmail: String): User
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
    id: ID!
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
    
    user: User

  }

  input CommentInput {
    userId: String
    createdAt: String
    body: String
    userImg: String
  }
`