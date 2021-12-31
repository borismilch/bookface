import React from 'react'
import { User } from '@auth0/auth0-react'

import { UserAddIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import ProfileSelect from './ProfileSelect'

const UserProfileBanner: React.FC<{user: User}> = ({user}) => {
  return (
    <div className='flex flex-col w-full border-b shadow-lg bg-white  border-gray-300 '>

     <div className='w-full pt-[37%] top-0 left-0 bg-gradient-to-t from-gray-200 to-gray-100' />

      <div className='flex items-center relative border-b py-8 border-gray-300 w-full px-4'>

        <div className='flex items-center  flex-grow gap-4'>

        <div className='h-[170px] -top-20 w-[170px] absolute rounded-[50%] p-1 bg-white '>

          <img src={user.picture} className='h-full w-full rounded-[50%] ' alt="" />

        </div>
        <div className='w-[180px] h-1'>
          
        </div>

        <h1 className='text-3xl font-bold text-[#212121]'>{user.username} </h1>

        </div>

        <div className='flex gap-4 '>

          <button className='blue-btn'>
 
            <UserAddIcon className='text-white h-5 w-5' />

            <p className='text-white font-semibold text-sm'>Добавить</p>

          </button>

          <button className='gray-btn'>
 
          <SearchIcon className='h-5 w-5' />

            <p className='text-[#212121] font-semibold text-sm'>Search in Portfolio</p>

          </button>

        </div>

      </div>

      <ProfileSelect />    

  
    </div>
  )
}

export default UserProfileBanner
