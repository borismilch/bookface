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

    getGroups: [Group]
    getGroup(id: String): Group

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
    getUser (email: String): [User]
    checkUserImage (email: String, picture: String): User
    addToMute (userEmail: String, mutedEmail: String): User

    rejectmRequest (userEmail: Strrng, reqEmail: String): User
    confirmRequest (userEmail: String, reqEmail: String): User

    changeUserImage( email: String, picture: String ): User
    changeBgPicture (email: String, bgPicture: String): User

    createGroup(payload: GroupInput): Group

    addGroupCreated (email: String, groupId: String): User

    subscribeOnGroup(id: String, email: String): Group


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

  type Group {
    _id: String 
    picture: String 
    title: String
    bgPicture: String 

    customers: [String] 
    postsIds: [String]

    creatorId: String 
    creator: User

  }

  input GroupInput {
    _id: String 
    picture: String 
    title: String
    bgPicture: String 

    customers: [String] 
    postsIds: [String]

    creatorId: String
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
    bgPicture: String
    mutes: [String]
    friendRequests: [String]
    yourSendedFriendReq: [String]
    friends: [String]
    groupsCreated: [String]

    myGroups: [Group]


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