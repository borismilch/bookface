import { gql } from '@apollo/client'

export const GET_GROUP = gql `
  query GetGroups($id: String) {
  getGroup(id: $id) {
    _id
    picture
    title
    bgPicture
    customers
    postsIds
    users {
      email
      _id
      username
      picture
    }
    creator {
      email
      _id
      username
      picture
    }
 
  }
}
`

export const GET_POSTS_OF_GROUP = gql `
  query Query($groupId: String) {
  getPostsOfGroupId(groupId: $groupId) {
    _id
    image
    body
    userImg
    userId
    createdAt
    comments {
      _id
      user {
        email
        _id
        username
        picture
      }
      userId
      createdAt
      body
      userImg
      postId
      username
    }
    likes {
      _id
    }
    user {
      email
      _id
      username
      nickname
    }
  }
}
`

export const GET_POSTS_PICTURES = gql `
  query Query($groupId: String) {
  getPostsOfGroupId(groupId: $groupId) {
    _id
    image
  }
  }
`

export const SUBSCRIBE_ON_GROUP = gql `
  mutation SubscribeOnGroup($id: String, $email: String) {
  subscribeOnGroup(id: $id, email: $email) {
    _id
  }
}
`

export const GET_GROUPS = gql `
  query GetGroups {
  getGroups {
    _id
    picture
    title
    customers
    bgPicture
    postsIds
    users {
      email
      _id
      username
      picture
    }
  }
}
`

export const CREATE_GROUP = gql `
  mutation CreateGroup($payload: GroupInput) {
    createGroup(payload: $payload) {
      _id
    }
  }
`

export const GET_USERS_GROUPS = gql `
  query Query($email: String) {
  getGroupsByEmail(email: $email) {
    _id
    title
    picture
    customers
  }
}
`