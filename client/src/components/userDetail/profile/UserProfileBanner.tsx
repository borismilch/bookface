import React from 'react'
import { User } from '@auth0/auth0-react'

import { UserAddIcon, UserRemoveIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import ProfileSelect from './ProfileSelect'

import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'

import currentUser from '../../../store/currentUser'
import { observer } from 'mobx-react-lite'
import { SEND_FRIENDSHIP_REQUEST } from '../../../graphql/queries'

const UserProfileBanner: React.FC<{user: User, noButtons?: boolean }> = ({user, noButtons}) => {
  const [requested, setRequested] = useState<boolean>(false)

  const [sendFriendshipRequest] = useMutation(SEND_FRIENDSHIP_REQUEST)

  const sendReq = async () => {
    sendFriendshipRequest({ variables: { userEmail: user!.email, requestEmail: user.email } })

    setRequested(prev => !prev)
  }

  useEffect(() => {
    setRequested(currentUser.yourFriendReqs.includes(user.email!))
  }, [])

  return (
    <div className='flex flex-col w-full border-b shadow-lg bg-white  border-gray-300 '>

     <div className='w-full relative h-[250px] md:h-[350px] top-0 left-0 bg-gradient-to-t from-gray-200 to-gray-100' >
     { user.bgPicture && <img src={user.bgPicture} className='w-full h-full object-cover ' alt="d" />}
     </div>

      <div className='flex items-center relative border-b py-8 border-gray-300 w-full px-4'>

        <div className='flex flex-col md:flex-row  items-center  flex-grow gap-4'>

        <div className='h-[170px] -top-28 md:-top-20 w-[170px] absolute rounded-[50%] p-1 bg-white '>

          <img src={user.picture} className='h-full w-full rounded-[50%] ' alt="" />

        </div>
        <div className='w-[180px] h-1'>
          
        </div>

        <h1 className='text-3xl font-bold flex-grow text-[#212121]'>{user.username} </h1>

        <div className='flex gap-4 '>

          {
           !noButtons && <>

              {!requested ? (<button 
                onClick={sendReq.bind(null)}
                className='blue-btn'>

                  <UserAddIcon className='text-white h-5 w-5' />

                  <p className='text-white font-semibold text-sm'>Добавить</p>

                </button>) : 
                (<button 
                  onClick={sendReq.bind(null)}
                  className='gray-btn bg-red-500 hover:bg-red-600'>

                  <UserRemoveIcon className='text-white h-5 w-5' />

                
                  <p className='text-[#fff] font-semibold text-sm'>Reject Request</p>

              </button>)
            }
              
            </>
          }


          <button className='gray-btn'>
 
          <SearchIcon className='h-5 w-5' />

            <p className='text-[#212121] font-semibold text-sm'>Search in Portfolio</p>

          </button>

        </div>

        </div>

        
      </div>

      <ProfileSelect />    

  
    </div>
  )
}

export default observer(UserProfileBanner)
