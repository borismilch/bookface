import { gql } from '@apollo/client'

export const GET_COMMENTS = gql`
  query GetComments($postId: String) {
  getComments(postId: $postId) {
    body
    userImg
    username
    user {
      username
      email
      _id
    }
    createdAt
    _id
  }
}
`

export const ADD_COMMENT = gql`
  mutation AddComent($postId: String, $comment:CommentInput) {
  addComent(postId: $postId, comment: $comment) {
    userId
  }
}
`


export const DELETE_COMMENT = gql`
  mutation Mutation($commentId: String) {
  deleteComent(commentId: $commentId) {
    _id
  }
 }
`

export const UPDATE_COMMENT = gql`
  mutation UpdateComent($commentId: String, $comment: CommentInput) {
    updateComent(commentId: $commentId, comment: $comment) {
      _id
    }
  }

`