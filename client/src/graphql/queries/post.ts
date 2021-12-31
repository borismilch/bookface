import { gql } from '@apollo/client'

export const ADD_POST = gql`
mutation Mutation($image: String, $body: String, $userId: String, $userImg: String) {
 addPost(image: $image, body: $body, userId: $userId, userImg: $userImg) {
   image
   body
   userId
   userImg
 }
}
`

export const GET_POSTS = gql`
 query Query ($filters: [String]) {
 getPosts (filters: $filters) {
   _id
   image
   body
   createdAt
   likeCount
   commentCount
   userId 
   userImg
   user {
     email
     username
   }
   likes {
     userId
   }
 }
}
`

export const GET_POSTS_IMAGES = gql`
 query Query ($filters: [String]) {
 getPosts (filters: $filters) {
   _id
   image
 }
}
`

export const GET_SINGLE_POST = gql`

query GetSinglePost($postId: String) {
  getSinglePost(postId: $postId) {
    image
    body
    _id
    
    createdAt
    likes {
      userId
    }
    user {
      username
    }
    userImg
  }
}
  
`