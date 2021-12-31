import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'

import { ThumbUpIcon as ThumbUpIconSolid } from '@heroicons/react/solid'

import { useMutation } from '@apollo/react-hooks'

import { useAuth0 } from '@auth0/auth0-react'
import { LIKE_POST,GET_POSTS } from '../../../../graphql/queries'

const ActionButtons: React.FC<{postId: string, likes: any[]}> = ({ postId, likes }) => {

  const [likePost] = useMutation(LIKE_POST)
  const [isLiked, setIsLiked] = useState<boolean>(false)

  const { user } = useAuth0()

  useEffect(() => {
    setIsLiked(!!(likes.find(like => like.userId === user?.email!)))
  }, [user?.email!])

  const likePostAction = async () => {
    try {
      likePost({ variables: { userId: user?.email!, postId }, refetchQueries: [GET_POSTS] })

      setIsLiked(prev => !prev)

    } catch (e) { console.log(e) }
  }

  return (
    <div className='flex cursor-pointer justify-between items-center rounded-b-3xl overflow-hidden'>

        <button onClick={likePostAction.bind(null)} className='post_footer_button cursor-pointer'>
          { isLiked ? <ThumbUpIconSolid className='h-5 w-5 text-blue-500' /> : <ThumbUpIcon className='h-5' />}
          <p className='text-gray-600 font-semibold'>{isLiked ? 'Unike' : 'Like'}</p>
        </button>

        <button className='post_footer_button'>
          <ChatAltIcon className='h-5' />
          <p className='text-gray-600 font-semibold'>Comment</p>
        </button>

        <button className='post_footer_button'>
          <ShareIcon className='h-5' />
          <p className='text-gray-600 font-semibold'>Share</p>
        </button>

      </div>
  )
}

export default ActionButtons
