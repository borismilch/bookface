import { User } from '@auth0/auth0-react'
import React from 'react'

import { DotsHorizontalIcon } from '@heroicons/react/solid'

import { useHistory } from 'react-router-dom'

const ChatSidebarItem: React.FC<{friend: User}> = ({ friend }) => {
  const history = useHistory()

  const pushHistory = () => {
    history.push({
      pathname: '/user/' + friend.email!.split('.')[0],
      state: {
        email: friend.email
      } 
    })
  }

  return (
    <div onClick={pushHistory.bind(null)}  className='flex items-center justify-between w-full p-2 rounded-lg transition-all duration-200 hover:bg-gray-200 cursor-pointer'>

      <div className='flex gap-3 items-center'>

        <img src={friend.picture!} className='rounded-full w-12 h-12' alt="kk" />

        <p className='text-[#212121] font-bold text-sm'>{friend.username}</p>

      </div>

      <div className='p-2 rounded-full transition-all duration-200 hover:bg-gray-200 cursor-pointer '>
        <DotsHorizontalIcon className='h-5 w-5 text-gray-600' />
      </div>

    </div>
  )
}

export default ChatSidebarItem
