import React from 'react'
import { CommentContextParams, IComment } from '../../../../models/models'

import { useAuth0 } from '@auth0/auth0-react'

import { time } from '../../../../lib/dayjs'

import CommentSelect from './CommentSelect'

import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { useState } from 'react'

import { createContext } from 'react'

export const CommentContext = createContext<CommentContextParams>({} as CommentContextParams)

const Comment:React.FC<{comment: IComment}> = ({comment}) => {

  const { user } = useAuth0()
  const [opened, setOpened] = useState<boolean>(false)
  const [deleting, setDeleting] = useState<boolean>(false)

  const setOpenedSelect = (val: boolean) => {
    setOpened(val)
  }

  const setDelete = (val: boolean) => {
    setDeleting(val)
  }

  const contextParams = {setDelete: setDelete, commentText: comment.body, commentId: comment._id!, opened: opened, setOpened: setOpenedSelect}

  return (
    <CommentContext.Provider value={contextParams}>

      <div className={'flex flex-col gap-1 relative ' + (deleting && 'opacity-50')}>

      <div className='flex items-start gap-4'>

      <div className='flex items-start gap-1'>

        <img src={comment.userImg} className='avatar-sm' alt="kkk" />

        <div className='flex flex-col'>

          <div className='px-4 py-2 rounded-3xl flex flex-col bg-gray-200'>
          <p className='text-[#212121] leading-3 pt-1  font-medium text-xs'>{comment.user?.username}</p>
            <p className='text-[#212121]'>{comment.body}</p>
          </div>
            
          <div className='flex gap-2 items-center ml-2 '>

            <p className='text-sm cursor-pointer text-gray-500 font-semibold hover:underline'>Like</p>

            <p className=' text-gray-600 font-bold'>·</p>

            <p className='text-sm text-gray-500 cursor-pointer font-semibold hover:underline'>Share</p>

            <p className=' text-gray-600 font-bold'>·</p>

            <p className='text-sm text-gray-500 cursor-pointer font-light 
            hover:underline'>{time(new Date(+comment.createdAt)).fromNow()}</p>

          </div>

        </div>

      </div>

      <div className='icon_button' onClick={() => setOpened(!opened)}>

        {(user?.email === comment.user?.email) && (

          <div className='relative'>
            <DotsHorizontalIcon className='h-5 w-5' />
            <CommentSelect />
          </div>

        )}

      </div>

      </div>

    </div>
    
    </CommentContext.Provider>
   
  )
}

export default Comment
