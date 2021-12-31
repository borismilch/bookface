import React from 'react'
import { DELETE_COMMENT, GET_COMMENTS } from '../../../../graphql/queries'

import { useMutation } from '@apollo/react-hooks'
import { CommentContext } from './Comment'

import { observer } from 'mobx-react-lite'

import { useContext } from 'react'

import store from '../../../../store/changeComment'

const CommentSelect:React.FC = () => {

  const { commentId, opened, setOpened, setDelete, commentText } = useContext(CommentContext)

  const [deleteComment] = useMutation(DELETE_COMMENT)

  const deleteCurrentComment = () => {
    setDelete(true)
    deleteComment({ variables: { commentId }, refetchQueries: [GET_COMMENTS] })
  }

  const addCommentToChange = () => {
    console.log('sss')
    store.addCangedCommet (commentText, commentId  )
  }

  return (
    <>
      { opened && (<div onClick={setOpened.bind(null, false)} className='flex flex-col shadow-xl  rounded-xl -top-4 right-4  overflow-hidden bg-white absolute w-[160px]'>

        <p onClick={addCommentToChange.bind(null)} className='select-item text-gray-600'>Rewrite Comment</p>

        <p onClick={deleteCurrentComment.bind(null)} className='select-item text-red-600 '>Delete Comment</p>
        
      </div>)}
    </>
  )
}

export default observer(CommentSelect)
