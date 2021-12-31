import React from 'react'
import { IPost } from '../../../models/models'
import CommentList from './comments/CommentList'

import { useHistory } from 'react-router-dom'

import PostInfo from './PostInfo'

import ActionButtons from './controll/ActionButtons'

import PostForm from './PostForm'
import UserHeading from './comments/UserHeading'

const Post: React.FC<{post: IPost}> = ({post}) => {

  const history = useHistory()

  const pushHistory = () => {
    history.push({
      pathname: '/photo/' + post._id,
      state: { id: post._id } 
    })
  }

  return (

    <div className='flex flex-col bg-[#fff] shadow-lg mt-5  rounded-3xl w-full'>

      <UserHeading post={post} />
      
      <div className='flex flex-col w-full'>
          <img onClick={pushHistory.bind(null)} src={post.image} className='object-cover cursor-pointer max-h-[400px]' alt="" />
      </div>

      <PostInfo likes={post.likes.length} postId={post._id} />

      <ActionButtons likes={post.likes} postId={post._id} />

      <PostForm postId={post._id} />

      <CommentList postId={post._id} />
    
    </div>
  )
}

export default Post
