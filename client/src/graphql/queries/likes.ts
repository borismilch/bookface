import { gql } from '@apollo/client'

export const LIKE_POST = gql`
  mutation SetLike($postId: String, $userId: String) {
  setLike(postId: $postId, userId: $userId) {
    _id
    postId
    userId
    createdAt
  }
}
`