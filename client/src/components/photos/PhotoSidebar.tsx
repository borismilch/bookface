import React from 'react'
import { IPost } from '../../models/models'

import UserHeading from '../home/posts/comments/UserHeading'
import PostInfo from '../home/posts/PostInfo'

import CommentList from '../home/posts/comments/CommentList'

import PostForm from '../home/posts/PostForm'


const PhotoSidebar: React.FC<{post: IPost}> = ({post}) => {

  return (
 
    <div className='flex flex-col relative min-w-[350px]  items-center w-full h-screen  bg-white rounded-lg py-2 border-b-gray-600 pb-7'>

      <div className='flex flex-col mt-[3px] lg:mt-[53px] h-screen w-full'>

        <UserHeading post={post} />

        <PostInfo postId={post._id} likes={post.likes.length} />

     
        <div className='overflow-y-auto scrollbar-thin max-h-[73vh] py-4 scrollbar-trumb-gray-600'>

          <CommentList postId={post._id} showAll={true} />

        </div>

        <div className='md:absolute   md:bottom-0 left-0 bg-white z-10'>

          <PostForm postId={post._id} />

        </div>

      </div>
    </div>

  )
}

export default PhotoSidebar
