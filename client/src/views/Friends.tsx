import React from 'react'

import { Header } from '../components/app'
import FriendCart from '../components/friends/FriendCart'
import RequestCard from '../components/friends/RequestCard'

import { FriedsHeading, FriendsGrid } from '../components/friends/root'

import FriendsSidebar from '../components/app/sidebar/FriendsSidebar'

import { GET_FRIENDS } from '../graphql/queries'
import { GET_FRIEND_REQUESTS } from '../graphql/queries'
import currentUser from '../store/currentUser'

import { observer } from 'mobx-react-lite'

const Friends = () => {
  console.log(currentUser.friendsReq.slice())
  return (
    <div className='flex flex-col min-h-screen mt-2 bg-gray-100'>
      <Header />

      <main className='flex flex-grow '>

        <FriendsSidebar />

        <div className='flex flex-col gap-4 flex-grow px-[16px] lg:px-[32px] pb-10'>
          
         { currentUser.friendsReq.slice().length > 0 && <div className='flex flex-col'>
            <FriedsHeading title='Friendship Requests' />
            <FriendsGrid Card={RequestCard}  arrLkey={'getFriedRequests'} Req={GET_FRIEND_REQUESTS} reqArray={currentUser.friendsReq.slice()} />
          </div>}

          <div className='flex flex-col'>
            <FriedsHeading title='Find your friends' />
            <FriendsGrid Card={FriendCart} Req={GET_FRIENDS} arrLkey={'getUsers'} reqArray={currentUser.mutes.slice()} />
          </div>


        </div>

      </main>

    </div>
  )
}

export default observer(Friends)
