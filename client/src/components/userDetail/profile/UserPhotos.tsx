import React, { useEffect } from 'react'

import { IPhoto } from '../../../models/models'
import { useQuery } from '@apollo/react-hooks'

import { useState  } from 'react'
import UserPhoto from './UserPhoto'

import { GET_POSTS_IMAGES } from '../../../graphql/queries'

const UserPhotos: React.FC<{email: string}> = ({ email }) => {

  const [photos, setPhootos] = useState<IPhoto[]>([])


  const { data, loading, error } = useQuery(GET_POSTS_IMAGES, { variables: { filters: [email] } })

  useEffect(() => {

    if (data) {
      setPhootos(data.getPosts)
    }

  }, [data])

  if (loading) { return ( <p>Loading...</p> ) }
  if (error) { console.log(error) }

  return (
    <div className='flex flex-col bg-white rounded-2xl pb-6 mt-6 shadow-lg border-gray-200 border p-4'>

      <div className='flex justify-between items-center w-full'>
        <h3 className='text-xl text-[#212121] font-bold'>Photos</h3>
        
        <button className='px-4 p-2 transition-all duration-200 rounded-lg hover:bg-blue-100 text-blue-600 cursor-pointer font-semibold '>More</button>
      </div>

      <div className='w-full h-full grid gap-2 grid-cols-3 mt-3'>
        {
          photos.map(photo => (
            <UserPhoto key={photo._id} photo={photo} />
          ))
        }
      </div>


       
    </div>
  )
}

export default UserPhotos
