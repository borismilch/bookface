import { useQuery } from '@apollo/react-hooks'
import React, { useEffect, useState } from 'react'
import { GET_POSTS_PICTURES } from '../../../graphql/queries'
import { IPost } from '../../../models/models'

import UserPhoto from '../../userDetail/profile/UserPhoto'

const GridGallery: React.FC<{groupId: string}> = ({groupId}) => {
  const [photos, setPhotos] = useState<IPost[]>([] as IPost[])

  const { data } = useQuery<{getPostsOfGroupId: IPost[]}>(GET_POSTS_PICTURES, {variables: { groupId }}) 

  useEffect(() => {

    if (data) {
      setPhotos(data.getPostsOfGroupId)
    }

  }, [data])

  return (
    <div className='flex flex-col bg-white rounded-2xl pb-6 mt-6 shadow-lg border-gray-200 border p-4'>

    <div className='flex justify-between items-center w-full'>
      <h3 className='text-xl text-[#212121] font-bold'>Photos</h3>
      
      <button className='px-4 p-2 transition-all duration-200 rounded-lg hover:bg-blue-100 text-blue-600 cursor-pointer font-semibold '>More</button>
    </div>

    <div className='w-full h-full grid gap-2 grid-cols-3 mt-3'>
      {
        photos.map(photo => (
          <UserPhoto photo={photo} key={photo._id} />
        ))
      }
    </div>


     
  </div>
  )
}

export default GridGallery
