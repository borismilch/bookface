import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_COMMENTS } from '../../../graphql/queries'

import LikeIcon from '../../LikeIcon'
import { IComment } from '../../../models/models'

const PostInfo: React.FC<{likes: number, postId: String}> = ({ likes, postId }) => {

  const {data} = useQuery<{getComments: IComment[]}>(GET_COMMENTS, { variables: { postId }})
  const commentsCount = data?.getComments.length
  
  console.log(data)

  return (
    <div className={'flex items-center p-4 justify-between border-gray-400 border-b'}>

      <div className='flex items-center gap-2 '>

        <div className='transform rotate-12'>
          <LikeIcon />
        </div>

        <p className='text-gray-700'>{likes}</p>

      </div>

      <p className='text-gray-400 font-semibold'>Comments: {commentsCount} </p>

          
    </div>
  )
}

export default PostInfo
