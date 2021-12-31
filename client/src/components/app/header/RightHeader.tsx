import React, {useEffect } from 'react'

import { AcoountIcon, Bell, MessangerIcon, Apps } from '../../../../assets/icons'
import { ExtendedUser } from '../../../models/models'

import { useAuth0 } from '@auth0/auth0-react'
import currentUser from '../../../store/currentUser'
import { GET_CURRENT_USER } from '../../../graphql/queries'
import { useQuery } from '@apollo/react-hooks'

const RightHeader: React.FC<{istransparent?: boolean}> = ({istransparent}) => {

  const { user, isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0()

  if (!currentUser.email) { return (   <button onClick={loginWithRedirect} className='butt px-6'>Login</button> ) }

  const { data: userData } = useQuery<{ getCurrentUser: ExtendedUser }>(GET_CURRENT_USER, { variables: { email: currentUser.email } })

  useEffect(() => {
    currentUser.setLoadedUser(false)
    if (userData) {
      currentUser.setMutes((userData.getCurrentUser.mutes! || []))
      currentUser.setYourFriendReq ((userData.getCurrentUser.yourSendedFriendReq! || []))
      currentUser.setFriendsReqs((userData.getCurrentUser.friendRequests!) || [])
      currentUser.setFriends((userData.getCurrentUser.friends!) || [])
      currentUser.setLoadedUser(true)
    }
    
  }, [userData])

  return (
    <div className='flex gap-4 items-center'>


   { !istransparent && <div className='flex items-centergap-4'>

      { isAuthenticated && 
      ( <div className='flex  items-center gap-2'>
        <p className='font-medium text-[#212121]'>{user?.userame}</p>
        <img onClick={()=> logout()} src={user?.picture} className='avatar' alt="" />
      </div> ) }

    </div>
       }

       <div className='flex items-center gap-2'>
         
       <div className='icon'>
           <Apps />
         </div> 

         <div className='icon'>
           <Bell />
         </div>

         <div className='icon'>
           <MessangerIcon />
         </div>

         <div className='icon'>
          <AcoountIcon /> 
         </div>
        

       </div>

    </div>
  )
}

export default RightHeader
