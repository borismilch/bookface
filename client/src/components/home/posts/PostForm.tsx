import React, { ChangeEvent, SyntheticEvent, useEffect } from 'react'
import { useState } from 'react' 

import { CameraIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import { observer } from 'mobx-react-lite'

import store from '../../../store/changeComment'

import { useMutation } from '@apollo/react-hooks'
import { ADD_COMMENT, GET_COMMENTS, UPDATE_COMMENT } from '../../../graphql/queries'

import { IComment } from '../../../models/models'
import { useRef } from 'react'
import currentUser from '../../../store/currentUser'

const PostForm: React.FC<{postId: string}> = observer(({postId}) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const [message, setComment] = useState<string>('')

  const [addComment] = useMutation(ADD_COMMENT)
  const [changeComment] = useMutation(UPDATE_COMMENT)

  useEffect (() => {
 
    if (store.currentId) {
      setComment(store.currentText)
      inputRef.current!.focus()
    }

  }, [store.currentId])

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }

  const submitHandler = async (e: SyntheticEvent<HTMLFormElement>) => {

    e.preventDefault()
  
    const comment: IComment = {
      body: message, userId: currentUser.email!, userImg: currentUser.picture!, username: currentUser.nickname!, createdAt: Date.now().toString()
    }

    if ( store.currentText ) {

      changeComment({ variables: { postId, comment }, refetchQueries: [GET_COMMENTS] })
      store.clearChnagedComment()
      
    } else {

      addComment({ variables: { postId, comment }, refetchQueries: [GET_COMMENTS] })

    }
    setComment('')
    
  }

  return (
    <div className='flex flex-col items-center justify-center px-5 pb-2  pt-3 border-t border-gray-300 '>

      <div className='flex gap-2 items-center  w-full'>

        <img src={currentUser.picture} alt="fff" className='avatar-sm' />

        <form onSubmit={submitHandler} className='p-1 px-4 rounded-full bg-gray-200 items-center flex justify-between font-semibold  w-full '>

          <button type='submit' hidden></button>

          <input ref={inputRef} onChange={changeInputHandler} value={message} className='border-0 bg-transparent outline-none placeholder-gray-500  flex-1' placeholder='Type a message...' type="text" />

          <div className='flex items-center mr-4'>

             <div className='flex items-center p-1 rounded-full translate-x-7 duration-200 hover:bg-200'>
             <CameraIcon className='h-5 text-gray-500'  />
             </div>

             <div className='flex items-center p-2 rounded-full translate-x-7 duration-200 hover:bg-200'>
             <EmojiHappyIcon className='h-5 text-gray-500'  />
             </div>

          </div>


        </form>

     
      </div>

      <p className='text-sm text-left w-full p-2 font-semibold'>Нажмите ENTER, чтобы отправить комментарий.</p>
      
    </div>
  )
})

export default PostForm
