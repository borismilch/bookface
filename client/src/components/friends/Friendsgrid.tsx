import React from 'react'

import FriendCart from './FriendCart'

import { useQuery } from '@apollo/react-hooks'
import { GET_CURRENT_USER } from '../../graphql/queries'
import { User } from '@auth0/auth0-react'

import { observer } from 'mobx-react-lite'
import currentUser from '../../store/currentUser'
import { useEffect } from 'react'

const Friendsgrid: React.FC<{Req: any, reqArray: string[], arrLkey: string, Card: Function}> = ({Req, reqArray, arrLkey, Card}) => {

  const { data: userData } = useQuery(GET_CURRENT_USER, { variables: { email: currentUser.email } })

  const { data, loading, refetch } = useQuery(Req, 
    { variables: { mutes: userData ? [currentUser.email, ...reqArray] : [currentUser.email]} 
  })

  useEffect(() => {
    if(userData) {
      refetch()
    }
  }, [userData])
  
  if (loading || !currentUser.isLoadedUser) { return <p>loading...</p> }
  console.log(data)

  const friends = data[arrLkey].filter((item: User) => !currentUser.friends.includes(item.email!) )


  return (
    <div className='grid gap-[12px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>

      {
        friends.map((friend: User) => (
          <Card key={friend.email} friend={friend} />
        ))
      }
     
      
    </div>
  )
}

export default observer(Friendsgrid)
