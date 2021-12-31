import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { User } from '@auth0/auth0-react'

import { GET_FRIENDS } from '../../graphql/queries'
import currentUser from '../../store/currentUser'

import { useState, useEffect } from 'react'

import UserDatialSidebaiItem from './UserDatialSidebaiItem'

const RecimendationsList = () => {

  const [users, setUsers] = useState<User[]>([])

  const { data, loading } = useQuery<{getUsers: User[]}>(GET_FRIENDS, 
    { variables: { mutes: currentUser.mutes.slice() } })

  useEffect(() => {

    if (data) {
      setUsers(data.getUsers)
      console.log(data.getUsers)
    }

  }, [data])

  if (loading) { return ( <p>Loading...</p> ) }

  return (
    <div className='flex flex-col overflow-auto max-h-[80vh] scrollbar-hide'>

      {
        users.map(friend => (
          <UserDatialSidebaiItem key={friend.email} friend={friend} />
        ))
      }

      
    </div>
  )
}

export default RecimendationsList
