import React, { useEffect } from 'react'
import { User } from '@auth0/auth0-react'

import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import currentUser from '../../store/currentUser'

import { SEND_FRIENDSHIP_REQUEST, REJECT_FRIEND_REQUEST, GET_CURRENT_USER, GET_FRIENDS } from '../../graphql/queries'

const UserDatialSidebaiItem: React.FC<{friend: User}> = ({friend}) => {

  const [sendFriendshipRequest] = useMutation(SEND_FRIENDSHIP_REQUEST)
  const [muteUser] = useMutation(REJECT_FRIEND_REQUEST)

  const [muted, setMuted] = useState<boolean>(false)
  const [requested, setRequested] = useState<boolean>(false)

  const history = useHistory()

  const sendReq = async () => {
    sendFriendshipRequest({ variables: { userEmail: currentUser.email, requestEmail: friend.email } })

    setRequested(prev => !prev)
  }

  const removeUser = () => {
    setMuted(true)

    muteUser({ variables: { userEmail: currentUser.email, mutedEmail: friend.email }, refetchQueries: [GET_CURRENT_USER, GET_FRIENDS] })
  }

  const pushHistory = () => {
    history.push({
      pathname: '/user/' + friend.email?.split('.')[0],
      state: {
        email: friend.email
      } 
    })
  }

  useEffect(() => {
    setRequested(currentUser.yourFriendReqs.includes(friend.email!))
  }, [])

  return (

    <div onClick={pushHistory.bind(null)}  className='flex items-center gap-2 w-full p-2 rounded-lg transition-all duration-200 hover:bg-gray-200 cursor-pointer'>

      <img src={friend.picture!} className='rounded-full w-14 h-14 mt-2' alt="kk" />

      <div className='flex gap-2 flex-col'>

        <p className='text-[#212121] leading-5 mt-2 font-bold text-sm'>{friend.username}</p>

        <div className='flex flex-nowrap justify-between gap-2 items-center'>

          {
            !requested ? (<button onClick={sendReq.bind(null)} className='btnm text-white bg-blue-500 hover:bg-blue-600'> Добавить</button>)
            :
            (<button onClick={sendReq.bind(null)} className='btnm text-white bg-red-500 hover:bg-red-600'> Отмена</button>)
          }

         

          <button onClick={removeUser.bind(null)} className='btnm bg-gray-200 hover:bg-gray-300'>Удалить</button>
          
        </div>

      </div>

    </div>
  )
}

export default UserDatialSidebaiItem
