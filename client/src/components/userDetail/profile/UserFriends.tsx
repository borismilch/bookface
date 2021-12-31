import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import ListPlaceholder from '../../app/loaders/ListPlaceholder'

import { GET_FRIEND_REQUESTS_METADATA } from '../../../graphql/queries'
import { useState, useEffect } from 'react'
import { ExtendedUser } from '../../../models/models'

import UserFriendItem from './UserFriendItem'

const UserFriends: React.FC<{friendArray: string[]}> = ({friendArray}) => {

  const [friends, setFriends] = useState<ExtendedUser[]>([] as ExtendedUser[])
  const { data, loading } = useQuery(GET_FRIEND_REQUESTS_METADATA, 
    { variables: { mutes: ['', ...(friendArray || [])] } })

  useEffect(() => {
    if (data) {
      setFriends(data.getFriedRequests)
      console.log(data.getFriedRequests)
    }
  }, [data])

  if (loading) { return ( <p>Loaidng...</p> ) }

  if (!friends.length) { return (
    <ListPlaceholder title='Друзі відсутні' />
  ) }

  return (
    <div className='flex flex-col bg-white rounded-2xl pb-6 mt-6 shadow-lg border-gray-200 border p-4'>

    <div className='flex justify-between items-center w-full'>
      <h3 className='text-xl text-[#212121] font-bold'>Friends</h3>
      
      <button className='px-4 p-2 transition-all duration-200 rounded-lg hover:bg-blue-100 text-blue-600 cursor-pointer font-semibold '>More</button>
    </div>

    <div className='w-full h-full grid gap-2 grid-cols-3 mt-3'>

      {friends.map(friend => (
        <UserFriendItem key={friend._id} friend={friend} />
      ))}
      
    </div>


     
  </div>
  )
}

export default UserFriends
