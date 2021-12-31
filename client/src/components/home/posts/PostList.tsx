import React from 'react'

import { useQuery } from '@apollo/react-hooks' 
import { GET_POSTS } from '../../../graphql/queries'
import { IPost } from '../../../models/models'

import ListPlaceholder from '../../app/loaders/ListPlaceholder'

import Post from './Post'

const PostList:React.FC<{filters?: string[]}> = ({filters}) => {

  const { data, loading, error } = useQuery<{getPosts: IPost[]}>(GET_POSTS) 

  if (loading) { return ( <h1>Loading...</h1> ) }
  if (data) { console.log(data) }
  if (error) {console.log(error); return ( <p>mfmkkdmfkmlds</p> )}

  
  const posts = filters ? data!.getPosts!.filter(post => filters.includes(post.user.email)) : data!.getPosts

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
