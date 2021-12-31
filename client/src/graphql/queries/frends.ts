import { gql } from '@apollo/client'


export const GET_FRIENDS = gql`
query Query($mutes: [String]) {
  getUsers(mutes: $mutes) {
    _id
    username
    email
    picture
  }
}
`



export const GET_FRIEND_REQUESTS = gql`
  query Query($mutes: [String]) {
  getFriedRequests(mutes: $mutes) {
    email
    _id
    username
    picture
    friends
  }
}
`
export const GET_FRIEND_REQUESTS_METADATA = gql`
  query Query($mutes: [String]) {
  getFriedRequests(mutes: $mutes) {
    _id
    username
    picture
    email
  }
}`

export const SEND_FRIENDSHIP_REQUEST = gql `
  mutation Mutation($userEmail: String, $requestEmail: String) {
  sendFrienshipReq(userEmail: $userEmail, requestEmail: $requestEmail) {
    _id
  }
}
`

export const REJECT_FRIEND_REQUEST = gql `
mutation Mutation($userEmail: String, $reqEmail: String) {
  rejectmRequest(userEmail: $userEmail, reqEmail: $reqEmail) {
    email
    _id
    username
    picture
    friends
   
  }
}
`

