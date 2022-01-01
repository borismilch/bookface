import React, { useEffect } from 'react'

import { useQuery } from '@apollo/react-hooks' 
import { GET_POSTS_OF_GROUP } from '../../../graphql/queries'
import { IPost } from '../../../models/models'

import ListPlaceholder from '../../app/loaders/ListPlaceholder'

import Post from '../../home/posts/Post'

import PostSkeleton from '../../app/loaders/PostSkeleton'
import { useState } from 'react'

const PostList:React.FC<{groupId: string}> = ({groupId}) => {

  const [posts, setPosts] = useState<IPost[]>([] as IPost[])

  const { data, loading, error } = useQuery<{getPostsOfGroupId: IPost[]}>(GET_POSTS_OF_GROUP, {variables: { groupId }}) 

  useEffect(() => {

    if (data) {
      setPosts(data.getPostsOfGroupId)
    }

  }, [data])

  if (loading) { return ( <PostSkeleton /> ) }

  return (
    <div className='flex flex-col pb-12'>

      {
        posts.length > 0 && posts.map(post => (
          <Post key={post._id} post={post} />
        ))
      }

      {
        !posts.length && (
          <ListPlaceholder title='Дописів немає' />
        )
      }

    </div>
  )
}

export default PostList
