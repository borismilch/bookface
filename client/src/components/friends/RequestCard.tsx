import React, { useState } from 'react'
import { User } from '@auth0/auth0-react'
import { useMutation } from '@apollo/react-hooks'

import { observer } from 'mobx-react-lite'
import { REJECT_FRIEND_REQUEST, CONFIRM_USER_NAME, GET_CURRENT_USER, GET_FRIENDS } from '../../graphql/queries' 
import currentUser from '../../store/currentUser'

const ReqFriendCard: React.FC<{friend: User}> = ({friend}) => {

  const [confirmReq] = useMutation(CONFIRM_USER_NAME)
  const [rejectReq] = useMutation(REJECT_FRIEND_REQUEST)

  const [disabled, setDisabled] = useState<boolean>(false)

  const reject = () => {
    setDisabled(true)
    rejectReq({ variables: { userEmail: currentUser.email, reqEmail: friend.email! }, refetchQueries: [GET_CURRENT_USER, GET_FRIENDS] })

  }

  const confirm = () => {
    setDisabled(true)
    confirmReq({ variables: { userEmail: currentUser.email, reqEmail: friend.email! } })
  }

  return (
    <div className={'flex flex-col overflow-hidden transition-all duration-200 rounded-xl shadow-lg border-r border-gray-300 ' +  (disabled && 'opacity-50 cursor-not-allowed')}>

      <img src={friend.picture} alt=".l." />

      <div className='flex flex-col px-2 pb-3 gap-2 bg-white'>

        <p className='text-lg py-2 font-semibold'>{friend.username[0].toUpperCase() + friend.username.slice(1)}</p>

        <button
          onClick={reject.bind(null)}
          className={'friend_card_button text-gray-700 bg-gray-100 hover:bg-gray-200 ' +  (disabled && 'opacity-50 cursor-not-allowed')}>Відхилити</button>

        <button 
          onClick={confirm.bind(null)}
          className={'friend_card_button bg-blue-500 hover:bg-blue-600 text-white ' +  (disabled && 'opacity-50 cursor-not-allowed')}>Одобрити</button>

      </div>
      
    </div>
  )
}

export default observer(ReqFriendCard)
