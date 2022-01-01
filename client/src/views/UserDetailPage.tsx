import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Header } from '../components/app'
import ChatSidebar from '../components/chatengine/ChatSidebar'
import ChatsidebarHeader from '../components/chatengine/ChatsidebarHeader'
import RecimendationsList from '../components/userDetail/RecimendationsList'

import UserFriends from '../components/userDetail/profile/UserFriends'

import UserProfileBanner from '../components/userDetail/profile/UserProfileBanner'

import { AdjustmentsIcon } from '@heroicons/react/outline'

import { useState } from 'react'
import UserPhotos from '../components/userDetail/profile/UserPhotos'

import { useQuery } from '@apollo/react-hooks'
import { GET_USER_DATA } from '../graphql/queries'

import PostList from '../components/home/posts/PostList'
import { ExtendedUser } from '../models/models'

const UserDetailPage = () => {
  const [user, setUser] = useState<ExtendedUser>({} as ExtendedUser) 

  const location = useLocation<{email: string}>()
  const {email} = location.state

  const { data, loading, error } = useQuery(GET_USER_DATA,
   { variables: { email } })

  useEffect(() => {

   if (data) {

    setUser(data.getCurrentUser)
   }
   
  }, [data])

  if (loading) { return ( <p>Loading</p> ) }
  if (error) { return ( <p>Error</p> ) }

  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-200 '>

      <Header />

      <div className='flex'>
         
      <ChatSidebar >
       <ChatsidebarHeader title='Рекоммедаци' /> 
         <RecimendationsList /> 
       </ChatSidebar>

       <div className='bg-gray-100 w-full ml-auto'>

       <div className='flex flex-col w-full max-w-[940px] mx-auto'>
        <UserProfileBanner user={user} />

        <div className='flex flex-col md:flex-row gap-6 mt-7  px-[10px]'>

          <div className='flex flex-col flex-grow flex-[0.40]'>

            <div className='p-4 bg-white shadow-md rounded-xl pb-7'>
              
              <h1 className='text-xl font-bold text-[#212121] '>Краткая информация</h1>

            </div>

            <UserPhotos email={user.email!} />

            <UserFriends friendArray={user.friends!} />

          </div>

          <div className='flex-[0.60] flex-grow'>

           <div className='p-4 flex items-center justify-between bg-white shadow-md rounded-xl'>
              
              <h1 className='text-xl font-bold text-[#212121] '>Info</h1>

              <button className='btnm bg-gray-200 flex items-center gap-2 hover:bg-gray-300 '>

                <AdjustmentsIcon className='w-5 h-5 text-gray-600' />

                <p className='text-[#212121]'>Filters</p>

              </button>

            </div>

            <PostList filters={[user.email!]}  />

          </div>

        </div>

       </div>

       </div>

     

        
      </div>

      <h2>{email}</h2>
    </div>
  )
}

export default UserDetailPage
