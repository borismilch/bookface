import React, { useState } from 'react'
import { User } from '@auth0/auth0-react'
import ProfileSelect from '../userDetail/profile/ProfileSelect'

import Loader from '../icons/Loader'
import { CameraIcon } from '@heroicons/react/solid'

import { useRef } from 'react'

import { useMutation } from '@apollo/react-hooks'

import { CHANGE_USER_IMAGE } from '../../graphql/queries'
import BennerBackground from './BennerBackground'

import { observer } from 'mobx-react-lite'  
import { addFileToStorage } from '../../utils/Helpers'
import UselessButtons from './UselessButtons'
import currentUser from '../../store/currentUser'

const UserBanner: React.FC<{user: User }> = ({user}) => {
  const [changeUserImage] = useMutation(CHANGE_USER_IMAGE)
  const [uploading, setUploading] = useState<boolean>(false)
  const [avatar, setAvatar] = useState<string>('')
 
  const avatarInputRef = useRef<HTMLInputElement>(null)

  const changeAvatarHandler = () => {

    setUploading(true)

    const reader = new FileReader()
    const file = avatarInputRef.current!.files![0]

    reader.readAsDataURL(file)

    reader.onload = async (e: ProgressEvent<FileReader>) => {
      setAvatar(reader.result + '')
      const url = await addFileToStorage(reader.result + '', 'avatars')

      setAvatar(url)
      changeUserImage({ variables: { email: currentUser.email, picture: url } })
      setUploading(false)
    }
    
  }

  return (
    <div className='flex flex-col w-full border-b shadow-lg bg-white  border-gray-300 '>

      <input onChange={changeAvatarHandler} type="file" hidden ref={avatarInputRef} />
      <BennerBackground />

      <div className='flex items-center relative border-b py-8 border-gray-300 w-full px-4'>

        <div className='flex flex-col md:flex-row  items-center  flex-grow gap-4'>

        <div className='h-[170px] -top-28 md:-top-20 w-[170px] absolute rounded-[50%] p-1 bg-white '>

         {!uploading ? <div
          onClick={() => avatarInputRef.current?.click()}
          className='overlay'>

          <CameraIcon className='h-8 w-8 text-white' />

          </div> : (
            <div
             className='overlay opacity-100'>
   
             <Loader />
   
           </div>
          )
         }

         {  <img
            src={avatar ? avatar : user.picture} className='h-full w-full rounded-[50%] ' alt=""
          />}

        </div>
        <div className='w-[180px] h-1'>
          
        </div>

          <h1 className='text-3xl font-bold text-[#212121]'>{user.username}</h1>

          <UselessButtons />

        </div>

      </div>

      <ProfileSelect />    

  
    </div>
  )
}

export default observer(UserBanner)