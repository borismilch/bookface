import React, { useState } from 'react'
import { User } from '@auth0/auth0-react'
import { useMutation } from '@apollo/react-hooks'

import { MUTE_USER } from '../../graphql/queries'
import { useAuth0 } from '@auth0/auth0-react'
import { GET_FRIENDS , GET_CURRENT_USER} from '../../graphql/queries'
import { SEND_FRIENDSHIP_REQUEST } from '../../graphql/queries'
import { useEffect } from 'react'

import CardLoader from '../app/loaders/CardLoader'

import { useHistory } from 'react-router-dom'

import currentUser from '../../store/currentUser'
import { observer } from 'mobx-react-lite'

const FriendCart: React.FC<{friend: User}> = ({friend}) => {
  const history = useHistory()

  const { user } = useAuth0()

  const [muteUser] = useMutation(MUTE_USER)
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)
  const [requested, setRequested] = useState<boolean>(false)

  const [muted, setMuted] = useState<boolean>(false)

  const [sendFriendshipRequest] = useMutation(SEND_FRIENDSHIP_REQUEST)

  const loadImage = () => {
    setImageLoaded(true)
  }

  const pushHistory = () => {
    history.push({
      pathname: '/user/' + friend._id,
      state: { email: friend.email }
    }) 
  }

  const sendReq = async () => {
    sendFriendshipRequest({ variables: { userEmail: user!.email, requestEmail: friend.email } })

    setRequested(prev => !prev)
  }

  const removeUser = () => {
    setMuted(true)

    muteUser({ variables: { userEmail: user?.email, mutedEmail: friend.email }, refetchQueries: [GET_CURRENT_USER, GET_FRIENDS] })
  }

  useEffect(() => {
    setRequested(currentUser.yourFriendReqs.includes(friend.email!))
  }, [])

  return (
    <>

      { !imageLoaded && <CardLoader /> }
      
    <div className={'flex flex-col overflow-hidden transition-all duration-200 rounded-xl shadow-lg border-r border-gray-300 ' + (muted && 'opacity-50 cursor-not-allowed') + ( imageLoaded ? 'opacity-100 relative' : 'opacity-100 absolute')}>

      <img
        onLoad={loadImage.bind(null)}
       onClick={pushHistory.bind(null)} src={friend.picture} className='filter brightness-90 hover:brightness-100 cursor-pointer transition-all duration-200 ' alt=".l." />

      <div className='flex flex-col px-2 pb-3 gap-2 bg-white'>

        <p className='text-lg py-2 font-semibold'>{friend.username[0].toUpperCase() + friend.username.slice(1)}</p>

      { 
        !requested ? ( <button onClick={sendReq.bind(null)} 
        className={'friend_card_button text-blue-600 bg-blue-100 hover:bg-blue-200 ' + (muted && 'opacity-50 cursor-not-allowed')}>Добавить</button>) :

        (<button onClick={sendReq.bind(null)} 
          className={'friend_card_button text-red-600 bg-red-100 hover:bg-red-200 ' + (muted && 'opacity-50 cursor-not-allowed')}>Refuse</button>)
      }

        <button onClick={removeUser.bind(null)} className={'friend_card_button text-[#212121] bg-gray-100 hover:bg-gray-200 ' + (muted && 'opacity-50 cursor-not-allowed')}>{'Удалить'}</button>


      </div>
      
    </div>

    </>
  )
}

export default observer(FriendCart)
