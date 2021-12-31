import React, { useEffect } from 'react'
import { GET_FRIEND_REQUESTS } from '../../graphql/queries'

import { User } from '@auth0/auth0-react'

import { useQuery } from '@apollo/react-hooks'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import currentUser from '../../store/currentUser'

import ChatSidebarItem from './ChatSidebarItem'

const ChatSidebarLit = () => {

  const [friends, setFriends] = useState<User[]>([])

  const { data, loading } = useQuery<{getFriedRequests: User[]}>(GET_FRIEND_REQUESTS, 
    {  variables: { mutes: ['',...currentUser.friends.slice()] } })

  useEffect(() => {

    if (data) {
      setFriends(data.getFriedRequests)
    }

  }, [data])

  if (loading) { return ( <p>Loading...</p> ) }

  return (
    <>
      <h1 className='text-[#212112] pt-2 text-left w-full px-2 font-semibold text-lg'>{ friends.length } Friends </h1>
    <div className='flex flex-col w-full my-2 '>

     {
       friends.map(friend => (
         <ChatSidebarItem key={friend.email} friend={friend} />
       ))
     }
      
    </div>
    </>
  )
}

export default observer(ChatSidebarLit)
