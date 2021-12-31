import React from 'react'
import { User } from '@auth0/auth0-react'

import { useHistory } from 'react-router-dom'

const UserFriendItem: React.FC<{friend: User}> = ({friend}) => {

  const history = useHistory()

  const pushHistory = () => {
    history.push({
      pathname: '/user/' + friend._id,
      state: { email: friend.email }
      
    })
  }

  return (
    <div className='flex flex-col'>

      <div onClick={pushHistory.bind(null)} key={friend._id} className='relative'>
        <img src={friend.picture!} className='photo_picture rounded-md' alt="" />
      </div>

      <p className='font-semibold truncate text-gray-800'>{friend.username}</p>

    </div>
   
  )
}

export default UserFriendItem
