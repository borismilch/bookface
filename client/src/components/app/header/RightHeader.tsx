import React, {useEffect, useState } from 'react'

import { Bell, MessangerIcon, Apps } from '../../../../assets/icons'
import { ExtendedUser } from '../../../models/models'

import { useHistory } from 'react-router-dom'

import { UserCircleIcon } from '@heroicons/react/outline'
import HeaderSelect from './HeaderSelect'

import { useAuth0, User } from '@auth0/auth0-react'
import currentUser from '../../../store/currentUser'
import { GET_CURRENT_USER } from '../../../graphql/queries'
import { useQuery } from '@apollo/react-hooks'

const RightHeader: React.FC<{istransparent?: boolean}> = ({istransparent}) => {
  const history = useHistory()

  const [curUser, setUser] = useState<User>()

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()

  const { data: userData } = useQuery<{ getCurrentUser: ExtendedUser }>(GET_CURRENT_USER, { variables: { email: user!.email } })

  const [isMenuu, setIsMenu] = useState<boolean>(false)

  const setMenuBar = (val: boolean) => {
    setIsMenu(val)
  }

  const pushHistory = () => {
    history.push('/profile')
  }

  useEffect(() => {
    console.log(userData)
    currentUser.setLoadedUser(false)
    if (userData) {
      setUser(userData.getCurrentUser)
      currentUser.setMutes((userData.getCurrentUser.mutes! || []))
      currentUser.setYourFriendReq ((userData.getCurrentUser.yourSendedFriendReq! || []))
      currentUser.setFriendsReqs((userData.getCurrentUser.friendRequests!) || [])
      currentUser.setFriends((userData.getCurrentUser.friends!) || [])
      currentUser.setPicture(userData.getCurrentUser.picture!)
      currentUser.setBgPicture(userData.getCurrentUser.bgPicture!)
      currentUser.username = userData.getCurrentUser.username
     
      currentUser.setLoadedUser(true)
    }
    
  }, [userData])

  return (
    <div className='flex gap-4 items-center'>

   { !istransparent && <div className='flex items-centergap-4'>

      { isAuthenticated && 
      ( <div className='flex  items-center gap-2'>
        <p className='font-medium text-[#212121]'>{user?.userame}</p>
        <img onClick={() => setMenuBar(!isMenuu)} src={curUser?.picture} className='avatar' alt="" />

       { isMenuu && <div className='relative'>
          <HeaderSelect changeMenuBar={setMenuBar} />
        </div>
        }

      </div> ) }

    </div>
       }

       <div className='flex items-center gap-2'>
         
       <div className='icon'>
           <Apps />
        </div> 

        <div onClick={() => history.push('/create-group')} className='icon'>
           <Bell />
        </div>

        <div className='icon'>
           <MessangerIcon />
        </div>

        <div onClick={pushHistory.bind(null)} className='icon'>
          <UserCircleIcon className='h-10 w-10' /> 
        </div>
        

       </div>

    </div>
  )
}

export default RightHeader
