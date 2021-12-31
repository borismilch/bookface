import React from 'react'
import { IPost } from '../../../../models/models'

import { DotsHorizontalIcon } from '@heroicons/react/outline'

const UserHeading: React.FC<{post: IPost}> = ({post}) => {
  return (
    <div className='flex items-center w-full gap-2 p-4 px-5 '>

    <img  src={post.userImg} className='w-[40px] h-[40px]  rounded-full object-cover' alt="" />

    <div className='flex flex-col gap-1 flex-grow'>
      <p className='font-semibold text-sm'>{post.user.username}</p>

      <p className='text-gray-400 text-xs'>
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
    </div>

    <div className='icon_button'>
      <DotsHorizontalIcon className='h-5 w-5' />
    </div>

  </div>

  )
}

export default UserHeading
