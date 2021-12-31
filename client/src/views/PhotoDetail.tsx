import React, { useEffect } from 'react'

import { useLocation } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'

import { Header } from '../components/app'

import { GET_SINGLE_POST } from '../graphql/queries'
import { IPost } from '../models/models'
import UserHeading from '../components/home/posts/comments/UserHeading'
import PhotoSidebar from '../components/photos/PhotoSidebar'


const PhotoDetail:React.FC = () => {

  const location = useLocation<{id: string }>()

  const {id} = location.state
  console.log(id)

  const { data, loading, error } = useQuery(GET_SINGLE_POST, { variables: { postId: id } })

  if (loading) { return ( <p>Loading...</p> ) }
  if (error) { return ( <p>Error...</p> ) }

  const post = data.getSinglePost     

  return (
    <div className='flex h-screen bg-black'>
      <Header tranparent={true} />

      <div className='flex h-full w-full  items-center justify-center'>

        <img src={post.image} className='h-full object-cover'  alt="" />

      </div>

      <div className='w-[466px] bg-white'>
        <PhotoSidebar post={post} />
      </div>
      
    </div>
  )
}

export default PhotoDetail
